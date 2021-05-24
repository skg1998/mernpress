const mongoose = require("mongoose");
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs');
const crypto = require('crypto')

// user sechema
const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Please add Username"]
    },
    email: {
        type: String,
        trim: true,
        unique: [true, "Email already exists"],
        match: [/.+\@.+\..+/, "Please fill a valid email address"],
        required: [true, "Email is required"]
    },
    password: {
        type: String,
        required: [true, 'Please add a passwoord'],
        minlength: 6,
        select: false
    },
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user',
    },
    resetPasswordToken: String,
    resetPasswordExpire: Date,
    updated_At: Date,
    created_At: {
        type: Date,
        default: Date.now
    }
});

//Encrypt Password using Bcrypt
UserSchema.pre('save', async function (next) {
    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt);
})

//Sign jWT and return 
UserSchema.methods.getSignedJwtToken = function () {
    return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRE
    })
}

// Match user entered password to hashed password in database
UserSchema.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
};

//Generate and hashed password token
UserSchema.methods.getResetPasswordToken = function () {
    // Generate token
    const resetToken = crypto.randomBytes(20).toString('hex');

    // Hash token and set to resetPasswordToken field
    this.resetPasswordToken = crypto
        .createHash('sha256')
        .update(resetToken)
        .digest('hex');

    // Set expire
    this.resetPasswordExpire = Date.now() + 10 * 60 * 1000;

    return resetToken;
}

module.exports = mongoose.model("User", UserSchema);
