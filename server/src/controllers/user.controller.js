const User = require("../models/user.model");
const ErrorResponse = require('../util/errorResponse');
const sendEmail = require('../util/sendMail');
const crypto = require('crypto');

/**
 * 
 * @desc create User account
 * @route POST api/v1/users/register
 * @access Public
 */
exports.create = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;
    console.log(req.body)
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
 * @access Public
 */
exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    //Validate email & password
    if (!email && !password) {
      return next(new ErrorResponse('Please Provide an email and password', 400))
    }

    // Check for user
    const user = await User.findOne({ email: email }).select('+password');
    if (!user) {
      return next(new ErrorResponse('Invalid credentials User not found', 401));
    }

    // Check if password matches
    const isMatch = await user.matchPassword(password);

    if (!isMatch) {
      return next(new ErrorResponse('Invalid credentials', 401));
    }

    sendTokenResponse(user, 200, res, "login  successfully !");
  } catch (err) {
    next(err);
  }
}

/**
 * 
 * @desc get account
 * @route POST api/v1/auth/login
 * @access Private
 */
exports.getMyProfile = async (req, res, next) => {
  try {
    const user = await User.findById(req.user.id);
    res.status(200).json({
      success: true,
      data: user
    })
  } catch (err) {
    next(err);
  }
}

/**
 * 
 * @desc Log user out/ clear cookie
 * @route POST api/v1/users/logout
 * @access Private
 */
exports.logout = async (req, res, next) => {
  try {
    res.cookie('token', 'none', {
      expires: new Date(Date.now() + 10 * 1000),
      httpOnly: true
    })
    res.status(200).json({
      success: true,
      data: {},
      message: "User logout successfully !"
    })
  } catch (err) {
    next(err);
  }
}

/**
 * 
 * @desc list of all users
 * @route GET api/v1/users/list
 * @access Public
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
 * @access Public
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
 * @access Private
 */
exports.update = async (req, res, next) => {
  try {
    const feildToUpdate = {
      username: req.body.username,
      email: req.body.email
    }
    const user = await User.findByIdAndUpdate(req.params.id, feildToUpdate, {
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
 * @access Private
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

/**
 * 
 * @desc forgot password
 * @route POST api/v1/users/forgotPassword
 * @access Public
 */
exports.forgotPassword = async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.body.email });

    if (!user) {
      return next(new ErrorResponse('User not found', 401));
    }

    //Get Reset token
    const resetToken = user.getResetPasswordToken();

    //create reset url
    const resetUrl = `${req.protocol}://${req.get('host')}/api/v1/users/resetPassword/${resetToken}`;

    const message = `You are receiving this email because you or (someone else) has requested the reset of password. Please make a PUT request to: \n\n ${resetUrl}`
    try {
      await sendEmail({
        email: user.email,
        subject: 'Password Reset Token',
        message: message
      })
      res.status(200).json({
        success: true,
        data: 'Email has been sent to your registered email !'
      })
    } catch (err) {
      console.log('err', err)
      user.resetPasswordToken = undefined;
      user.resetPasswordExpire = undefined;
      await user.save({ validateBeforeSave: false })
      return next(new ErrorResponse('Email could not be sent', 500))
    }

    await user.save({ validateBeforeSave: false })

    res.status(200).json({
      success: true,
      data: user
    })
  } catch (err) {
    next(err);
  }
}

/**
* 
* @desc reset Password
* @route PUT api/v1/users/resetPassword
* @access Public
*/
exports.resetPassword = async (req, res, next) => {
  try {
    //Get hashed Token
    const resetPasswordToken = crypto.createHash('sha256').update(req.params.resetToken).digest('hex');

    const user = await User.findOne({
      resetPasswordToken,
      resetPasswordExpire: { $gt: Date.now() }
    });

    if (!user) {
      return next(new ErrorResponse('Invalid Token ', 400))
    }

    //Set password
    user.passord = req.body.passord;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;
    await user.save();

    sendTokenResponse(user, 200, res, "Password has been updated successfully !");
  } catch (err) {
    next(err);
  }
}

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
