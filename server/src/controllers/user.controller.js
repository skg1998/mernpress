const User = require("../models/user.model");
const errorHandler = require("../util/dbErrorHandler");
const config = require('../config/config');
const stripe = require("stripe");
const myStripe = stripe(config.stripe_test_secret_key);


const create = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;
    const data = {
      username: username,
      email: email,
      password: password
    }

    const checkEmail = await User.findOne({ email: email });
    if (checkEmail) {
      return res.status(400).json({
        status: "fail",
        message: "email is already in use , Please try with other email"
      })
    }

    const newUser = await User.create(data);

    res.status(200).json({
      status: "succes",
      data: newUser,
      message: "succesfull signup !",
    })

  } catch (err) {
    res.status(404).json({
      status: false,
      message: " bad request"
    })
  }
};

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const data = {
      email: email,
      password: password
    }
    const user = await User.findOne(req.body.email);
    if (!user) {
      return res.status("401").json({
        status: false,
        message: `User Not found by given email: ${req.body.email}`
      });
    }

  } catch (err) {
    res.status(404).json({
      status: false,
      message: "Something went wrong, try after some time"
    })
  }
}


const list = async (req, res, next) => {
  try {
    const users = await User.find();
    res.status(201).json({
      status: false,
      count: users.length,
      data: users,
      message: `All Users found succesfully`
    })
  } catch (err) {
    res.status(400).json({
      status: false,
      message: `Something went wrong`
    })
  }
};

const userByID = (req, res, next) => {
  try {
    const user = await User.find(req.params.id);

    if (!user) {
      return res.status(404).json({
        status: false,
        message: `User not found by given id: ${req.params.id}`
      })
    }

    res.status(201).json({
      status: true,
      data: user,
      message: `All Users found succesfully !`
    })

  } catch (err) {
    res.status(400).json({
      status: false,
      message: `Something went wrong`
    })
  }
};

const update = async (req, res, next) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    })

    if (!user) {
      return res.status(404).json({
        status: false,
        data: user,
        message: `User profile of given id: ${req.params.id} not found`
      })
    }

    res.status(200).json({
      status: true,
      data: user,
      message: `User profile Update succesfull!`
    })

  } catch (err) {
    res.status(400).json({
      status: false,
      message: `User not fount of given id: ${req.params.id}`
    })
  }
};

const remove = async (req, res, next) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id)

    if (!user) {
      return res.status(404).json({
        status: false,
        message: `User profile of given id: ${req.params.id} not found`
      })
    }

    res.status(200).json({
      status: true,
      data: user,
      message: `User profile Deleted succesfull!`
    })

  } catch (err) {
    res.status(400).json({
      status: false,
      message: `User not fount of given id: ${req.params.id}`
    })
  }
};

const stripe_auth = (req, res, next) => {
  request(
    {
      url: "https://connect.stripe.com/oauth/token",
      method: "POST",
      json: true,
      body: {
        client_secret: config.stripe_test_secret_key,
        code: req.body.stripe,
        grant_type: "authorization_code"
      }
    },
    (error, response, body) => {
      if (body.error) {
        return res.status("400").json({
          error: body.error_description
        });
      }
      req.body.stripe_seller = body;
      next();
    }
  );
};


const stripeCustomer = (req, res, next) => {
  if (req.profile.stripe_customer) {
    //update stripe customer
    myStripe.customers.update(req.profile.stripe_customer, {
      source: req.body.token
    }, (err, customer) => {
      if (err) {
        return res.status(400).send({
          error: "Could not update charge details"
        })
      }
      req.body.order.payment_id = customer.id
      next()
    })
  } else {
    myStripe.customers.create({
      email: req.profile.email,
      source: req.body.token
    }).then((customer) => {
      User.update({ '_id': req.profile._id },
        { '$set': { 'stripe_customer': customer.id } },
        (err, order) => {
          if (err) {
            return res.status(400).send({
              error: errorHandler.getErrorMessage(err)
            })
          }
          req.body.order.payment_id = customer.id
          next()
        })
    })
  }
}


const createCharge = (req, res, next) => {
  if (!req.profile.stripe_seller) {
    return res.status('400').json({
      error: "Please connect your Stripe account"
    })
  }
  myStripe.tokens.create({
    customer: req.order.payment_id,
  }, {
    stripe_account: req.profile.stripe_seller.stripe_user_id,
  }).then((token) => {
    myStripe.charges.create({
      amount: req.body.amount * 100, //amount in cents
      currency: "usd",
      source: token.id,
    }, {
      stripe_account: req.profile.stripe_seller.stripe_user_id,
    }).then((charge) => {
      next()
    })
  })
}

module.exports = {
  isSeller,
  create,
  login,
  userByID,
  list,
  remove,
  update,
  stripe_auth,
  stripeCustomer,
  createCharge
};
