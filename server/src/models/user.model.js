const mongoose = require("mongoose");
const geocoder = require('../util/geoCoder');
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs');

// user_address 
const UserAddressSchema = new mongoose.Schema({
    user_id: {
        type: mongoose.Schema.ObjectId,
        ref: "User"
    },
    address: {
        type: String,
        required: [true, "Please add an valid address"]
    },
    location: {
        //GeoJSON Point
        type: {
            type: String, // Don't do `{ location: { type: String } }`
            enum: ['Point'], // 'location.type' must be 'Point'
        },
        coordinates: {
            type: [Number],
            index: '2dsphere'
        },
        formattedAddress: String,
        street: String,
        city: String,
        state: String,
        zipcode: String,
        country: String,
    },
    telephone: {
        type: Number
    },
    updated_At: {
        type: Date
    },
    created_At: {
        type: Date,
        default: Date.now
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
    },
    updated_At: {
        type: Date
    },
    created_At: {
        type: Date,
        default: Date.now
    }
})

const UserPayment = mongoose.model("UserPayment", UserPaymentSchema);

// user sechema
const UserSchema = new mongoose.Schema({
    UserName: {
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
    resetPasswordToken: String,
    resetPasswordExpire: Date,
    isVerified: {
        type: Boolean,
        default: false
    },
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

//Match user entered Password to hashed password in database
UserSchema.methods.matchedPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
}


//Create Location Field
UserSchema.pre('save', async function (next) {
    const loc = await geocoder.geocode(this.address);
    this.location = {
        type: 'Point',
        coordinates: [loc[0].longitude, loc[0].latitude],
        formattedAddress: loc[0].formattedAddress,
        street: loc[0].streetName,
        city: loc[0].city,
        state: loc[0].state,
        zipcode: loc[0].zipcode,
        country: loc[0].country
    }
    //Do not save address in DB
    this.address = undefined;
    next();
})

module.exports = mongoose.model("User", UserSchema);
