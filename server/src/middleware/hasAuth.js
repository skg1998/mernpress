const jwt = require('jsonwebtoken')
const User = require('../models/auth.model');
const Admin = require('../models/admin.model');
const ErrorResponse = require('../util/errorResponse');

exports.hasAuthorization = async (req, res, next) => {
    let token;
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        token = req.headers.authorization.split(" ")[1]
    }

    //Make sure token exist
    if (!token) {
        return next(new ErrorResponse('Not Authorized to access this route', 401))
    }

    try {
        //verify token
        const decode = jwt.verify(token, process.env.JWT_SECRET);
        req.user = await User.find(decode.id)
    } catch (err) {
        return next(new ErrorResponse('Not Authorized to access this route', 401))
    }
}

//Grant access to role
exports.authorize = (...roles) => {
    return (req, res, next) => {
        if (!roles.includes(req.admin.role)) {
            return next(new ErrorResponse(`User role ${req.user.role} is Not Authorized to access this route`, 403))
        }
        next();
    }
}

