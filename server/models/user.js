const mongoose = require("mongoose");
const crypto = require("crypto");

// user_address 
const UserAddressSchema = new mongoose.Schema({
    user_id: {
        type: mongoose.Schema.ObjectId,
        ref: "User"
    },
    address_line1: {
        type: String
    },
    address_line2: {
        type: String
    },
    city: {
        type: String
    },
    state: { type: String },
    postal_code: {
        type: String,
        required: "Zip code is required",
    },
    country: {
        type: String,
        required: "Country is required"
    },
    telephone: {
        type: Number
    },
    mobile: {
        type: Number
    }
})

const UserAddress = mongoose.model("UserAddress", UserAddressSchema);

// user_payment
const UserPaymentSchema = new mongoose.Schema({
    user_id: {
        type: mongoose.Schema.ObjectId,
        ref: "User"
    },
    payment_type: {
        type: String
    },
    provider: {
        type: String
    },
    account_no: {
        type: Number
    }
})

const UserPayment = mongoose.model("UserPayment", UserPaymentSchema);

// user sechema
const UserSchema = new mongoose.Schema({
    first_name: {
        type: String,
        trim: true
    },
    last_name: {
        type: String,
        trim: true
    },
    telephone: {
        type: Number
    },
    username: {
        type: String,
        trim: true,
        unique: "Email already exists",
        match: [/.+\@.+\..+/, "Please fill a valid email address"],
        required: "Email is required"
    },
    hash: String,
    salt: String,
    stripe_customer: {},
    stripe_seller: {},
    updated_At: {
        type: Date,
        default: Date.now
    },
    isVerified: {
        type: Boolean,
        default: false
    },
    resetPasswordToken: {
        type: String,
        required: false
    },

    resetPasswordExpires: {
        type: Date,
        required: false
    },
    created_At: {
        type: Date,
        default: Date.now
    }
});

UserSchema.methods.setPassword = function (password) {
    this.salt = crypto.randomBytes(16).toString('hex');
    this.hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha512').toString('hex');
};

UserSchema.methods.validPassword = function (password) {
    var hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha512').toString('hex');
    return this.hash === hash;
};

module.exports = mongoose.model("User", UserSchema);

