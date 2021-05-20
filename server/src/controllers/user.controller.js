const User = require("../models/user.model");
const ErrorResponse = require('../util/errorResponse');

//get token from model, create cookie and send response
const sendTokenResponse = (user, statusCode, res, message) => {
  //Create Token
  const token = user.getSignedJwtToken();
  const option = {
    expires: new Date(Date.now() + process.env.JWT_COOKIE_EXPIRE * 24 * 60 * 60 * 1000),
    httpOnly: true
  }

  if (process.env.NODE_ENV === 'production') {
    option.secure = true;
  }

  res
    .status(statusCode)
    .cookie('token', token, option)
    .json({
      success: true,
      token: token,
      message: message
    })
}

/**
 * 
 * @desc create User account
 * @route POST api/v1/users/register
 * @param Public
 */
exports.create = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;
    const user = await User.create({ username, email, password });
    sendTokenResponse(user, 200, res, "account has been created successfully !");
  } catch (err) {
    next(err);
  }
}

/**
 * 
 * @desc login to account
 * @route POST api/v1/users/login
 * @param Public
 */
exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    //Validate email & password
    if (!email && !password) {
      return next(new ErrorResponse('Please Provide an email and password', 400))
    }

    //CHECK USER
    const user = await User.find({ email: email }).select('+password')
    if (!user) {
      return next(new ErrorResponse('Invalid credentials', 401))
    }

    //Check hashed Password
    const isMatched = await user.matchedPassword(password);
    if (!isMatched) {
      return next(new ErrorResponse('Invalid credentials', 401))
    }

    sendTokenResponse(user, 200, res, "login  successfully !");

  } catch (err) {
    next(err);
  }
}

/**
 * 
 * @desc list of all users
 * @route GET api/v1/users/list
 * @param Public
 */
exports.list = async (req, res, next) => {
  try {
    const users = await User.find();
    res.status(201).json({
      status: false,
      count: users.length,
      data: users,
      message: `All Users found succesfully`
    })
  } catch (err) {
    next(err);
  }
};

/**
 * 
 * @desc list of user by id
 * @route POST api/v1/users/userbyid
 * @param Public
 */
exports.userByID = async (req, res, next) => {
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
    next(err)
  }
}

/**
 * 
 * @desc Update account
 * @route PUT api/v1/users/:id
 * @param Private
 */
exports.update = async (req, res, next) => {
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
    next(err);
  }
}

/**
 * 
 * @desc delete account
 * @route DELETE api/v1/users/:id
 * @param Private
 */
exports.remove = async (req, res, next) => {
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
    next(err)
  }
}
