const ErrorResponse = require("../util/errorResponse");

const errorHandler = (err, req, res, next) => {
    let error = { ...err };
    error.message = err.message;

    //Log to console for dev
    console.log(err.stack);

    //Mongo bad ObjectId
    if (err.name === 'CastError') {
        const message = `Not found with id of ${err.value}`;
        error = new ErrorResponse(message, 404)
    }

    //Mongo dublicate Object
    if (err.code === 11000) {
        const message = `Dublicate field value entered`;
        error = new ErrorResponse(message, 400)
    }

    //Mongoose validation error
    if (err.name === 'ValidationError') {
        const message = Object.values(err.errors).map(val => val.message);
        error = new ErrorResponse(message, 404)
    }

    res.status(error.statusCode || 500).json({
        status: false,
        message: error.message || 'Server Error'
    })
}

module.exports = errorHandler