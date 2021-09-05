const Admin = require("../models/admin.model");
const User = require("../models/user.model");
const ErrorResponse = require('../util/errorResponse');
const sendEmail = require('../util/sendMail');
const crypto = require('crypto');

/**
 * 
 * @desc create Admin account
 * @route POST api/v1/admin/register
 * @access Public
 */
exports.create = async (req, res, next) => {
    try {
        console.log(req.body);
        const { username, email, password } = req.body;
        const admin = await Admin.create({ username, email, password });
        sendTokenResponse(admin, 200, res, "account has been created successfully !");
    } catch (err) {
        next(err);
    }
}

/** 
 * 
 * @desc login to account
 * @route POST api/v1/admin/login
 * @access Public
 */
exports.login = async (req, res, next) => {
    try {
        const { email, password } = req.body;

        //Validate email & password
        if (!email && !password) {
            return next(new ErrorResponse('Please Provide an email and password', 400))
        }

        // Check for admin
        const admin = await Admin.findOne({ email: email }).select('+password');
        if (!admin) {
            return next(new ErrorResponse('Invalid credentials admin not found', 401));
        }

        // Check if password matches
        const isMatch = await admin.matchPassword(password);

        if (!isMatch) {
            return next(new ErrorResponse('Invalid credentials', 401));
        }

        sendTokenResponse(admin, 200, res, "login  successfully !");
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
        const admin = await Admin.findById(req.admin.id);
        res.status(200).json({
            success: true,
            data: admin
        })
    } catch (err) {
        next(err);
    }
}

/**
 * 
 * @desc Log admin out/ clear cookie
 * @route POST api/v1/admin/logout
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
            message: "Admin logout successfully !"
        })
    } catch (err) {
        next(err);
    }
}

/**
 * 
 * @desc list of all admin
 * @route GET api/v1/admin/list
 * @access Public
 */
exports.list = async (req, res, next) => {
    try {
        const admin = await Admin.find();
        res.status(201).json({
            status: false,
            count: admin.length,
            data: admin,
            message: `All admin found succesfully`
        })
    } catch (err) {
        next(err);
    }
};


/**
 * 
 * @desc list of all user
 * @route GET api/v1/admin/userlist
 * @access Public
 */
exports.userlist = async (req, res, next) => {
    try {
        const user = await User.find();
        res.status(201).json({
            status: false,
            count: user.length,
            data: user,
            message: `All user found succesfully`
        })
    } catch (err) {
        next(err);
    }
};

/**
 * 
 * @desc list of user by id
 * @route GET api/v1/admin/userlist/:id
 * @access Public
 */
exports.userlistById = async (req, res, next) => {
    try {
        const user = await User.findById(req.params.id);
        res.status(201).json({
            status: false,
            count: user.length,
            data: user,
            message: `User found with given id:${req.params.id}  succesfully`
        })
    } catch (err) {
        next(err);
    }
};


/**
 * 
 * @desc list of admin by id
 * @route POST api/v1/admin/adminbyid
 * @access Public
 */
exports.adminByID = async (req, res, next) => {
    try {
        const admin = await Admin.findById(req.params.id);

        if (!admin) {
            return res.status(404).json({
                status: false,
                message: `Admin not found by given id: ${req.params.id}`
            })
        }

        res.status(201).json({
            status: true,
            data: admin,
            message: `All admin found succesfully !`
        })

    } catch (err) {
        next(err)
    }
}

/**
 * 
 * @desc Update account
 * @route PUT api/v1/admin/:id
 * @access Private
 */
exports.update = async (req, res, next) => {
    try {
        const feildToUpdate = {
            username: req.body.username,
            email: req.body.email,
            role: req.body.role
        }
        const admin = await Admin.findByIdAndUpdate(req.params.id, feildToUpdate, {
            new: true,
            runValidators: true
        })

        if (!admin) {
            return res.status(404).json({
                status: false,
                data: admin,
                message: `Admin profile of given id: ${req.params.id} not found`
            })
        }

        res.status(200).json({
            status: true,
            data: admin,
            message: `Admin profile Update succesfull!`
        })

    } catch (err) {
        next(err);
    }
}

/**
 * 
 * @desc delete account
 * @route DELETE api/v1/admin/:id
 * @access Private
 */
exports.remove = async (req, res, next) => {
    try {
        const admin = await Admin.findByIdAndDelete(req.params.id)

        if (!admin) {
            return res.status(404).json({
                status: false,
                message: `Admin profile of given id: ${req.params.id} not found`
            })
        }

        res.status(200).json({
            status: true,
            data: admin,
            message: `Admin profile Deleted succesfull!`
        })

    } catch (err) {
        next(err)
    }
}

/**
 * 
 * @desc forgot password
 * @route POST api/v1/admin/forgotPassword
 * @access Public
 */
exports.forgotPassword = async (req, res, next) => {
    try {
        const admin = await Admin.findOne({ email: req.body.email });

        if (!admin) {
            return next(new ErrorResponse('Admin not found', 401));
        }

        //Get Reset token
        const resetToken = admin.getResetPasswordToken();

        //create reset url
        const resetUrl = `${req.protocol}://${req.get('host')}/api/v1/admin/resetPassword/${resetToken}`;

        const message = `You are receiving this email because you or (someone else) has requested the reset of password. Please make a PUT request to: \n\n ${resetUrl}`
        try {
            await sendEmail({
                email: admin.email,
                subject: 'Password Reset Token',
                message: message
            })
            res.status(200).json({
                success: true,
                data: 'Email has been sent to your registered email !'
            })
        } catch (err) {
            console.log('err', err)
            admin.resetPasswordToken = undefined;
            admin.resetPasswordExpire = undefined;
            await admin.save({ validateBeforeSave: false })
            return next(new ErrorResponse('Email could not be sent', 500))
        }

        await admin.save({ validateBeforeSave: false })

        res.status(200).json({
            success: true,
            data: admin
        })
    } catch (err) {
        next(err);
    }
}

/**
* 
* @desc reset Password
* @route PUT api/v1/admin/resetPassword
* @access Public
*/
exports.resetPassword = async (req, res, next) => {
    try {
        //Get hashed Token
        const resetPasswordToken = crypto.createHash('sha256').update(req.params.resetToken).digest('hex');

        const admin = await Admin.findOne({
            resetPasswordToken,
            resetPasswordExpire: { $gt: Date.now() }
        });

        if (!admin) {
            return next(new ErrorResponse('Invalid Token ', 400))
        }

        //Set password
        admin.passord = req.body.passord;
        admin.resetPasswordToken = undefined;
        admin.resetPasswordExpire = undefined;
        await admin.save();

        sendTokenResponse(admin, 200, res, "Password has been updated successfully !");
    } catch (err) {
        next(err);
    }
}

//get token from model, create cookie and send response
const sendTokenResponse = (admin, statusCode, res, message) => {
    //Create Token
    const token = admin.getSignedJwtToken();
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
