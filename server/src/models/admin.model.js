const mongoose = require("mongoose");
const crypto = require("crypto");

const AdminSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: "Name is required"
  },
  email: {
    type: String,
    trim: true,
    unique: "Email already exists",
    match: [/.+\@.+\..+/, "Please fill a valid email address"],
    required: "Email is required"
  },
  hash: String,
  salt: String,
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

AdminSchema.methods.setPassword = function (password) {
  this.salt = crypto.randomBytes(16).toString('hex');
  this.hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha512').toString('hex');
};

AdminSchema.methods.validPassword = function (password) {
  var hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha512').toString('hex');
  return this.hash === hash;
};

module.exports = mongoose.model("Admin", AdminSchema);



