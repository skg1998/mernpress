const User = require("../models/user.model");
const _ = require("lodash");
const errorHandler = require("../helpers/dbErrorHandler");
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

    const checkEmail = await User.findOne(email);
    if (checkEmail) {
      res.status(400).json({
        status: "fail",
        message: "email is already in use , Please try with other email"
      })
    } else {
      const newUser = await User.create(data);
      res.status(200).json({
        status: "succes",
        message: "succesfull signup !",
        data: newUser
      })
    }
  } catch (e) {
    res.status(404).json({
      status: "fail",
      message: " bad request"
    })
  }
};


const list = (req, res) => {
  User.find((err, users) => {
    if (err) {
      return res.status(400).json({
        error: errorHandler.getErrorMessage(err)
      });
    }
    res.json(users);
  }).select("name email updated created");
};

const userByID = (req, res, next, id) => {
  User.findById(id).exec((err, user) => {
    if (err || !user)
      return res.status("400").json({
        error: "User not found"
      });
    req.profile = user;
    next();
  });
};

const read = (req, res) => {
  req.profile.hashed_password = undefined;
  req.profile.salt = undefined;
  return res.json(req.profile);
};

const update = (req, res, next) => {
  let user = req.profile;
  user = _.extend(user, req.body);
  user.updated = Date.now();
  user.save(err => {
    if (err) {
      return res.status(400).json({
        error: errorHandler.getErrorMessage(err)
      });
    }
    user.hashed_password = undefined;
    user.salt = undefined;
    res.json(user);
  });
};

const remove = (req, res, next) => {
  let user = req.profile;
  user.remove((err, deletedUser) => {
    if (err) {
      return res.status(400).json({
        error: errorHandler.getErrorMessage(err)
      });
    }
    deletedUser.hashed_password = undefined;
    deletedUser.salt = undefined;
    res.json(deletedUser);
  });
};

const isSeller = (req, res, next) => {
  const isSeller = req.profile && req.profile.seller;
  if (!isSeller) {
    return res.status("403").json({
      error: "User is not a seller"
    });
  }
  next();
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
  userByID,
  read,
  list,
  remove,
  update,
  stripe_auth,
  stripeCustomer,
  createCharge
};
