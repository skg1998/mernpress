const Admin = require("../models/admin.model");
const _ = require("lodash");
const errorHandler = require("../helpers/dbErrorHandler");
const jwt = require("jsonwebtoken");
const expressJwt = require("express-jwt");
const config = require('../config/config');
const jwtSecret = "sdghjak82374ihury83yr3yr2u3h"

const Adminsignup = (req, res, next) => {
  var admin = new Admin({
      name:req.body.name,
      email:req.body.email,
      password:req.body.password
  });
  admin.save((err, result) => {
      if (err) {
        return res.status(400).json({
          error: errorHandler.getErrorMessage(err)
        });
      }
      res.status(200).json({
        message: "Successfully signed up!"
      });
    });
  };

const AdminLogin = (req, res) => {
  Admin.findOne(
    {
      email: req.body.email
    },
    (err, user) => {
      if (err || !user)
        return res.status("401").json({
          error: "User not found"
        });
      if (!user.authenticate(req.body.password)) {
        return res.status("401").send({
          error: "Email and password don't match."
        });
      }
      const token = jwt.sign(
        {
          _id: user._id
        },
        // config.jwtSecret
        jwtSecret
      );
      res.cookie("t", token, {
        expire: new Date() + 9999
      });
      return res.json({
        token,
        user: { _id: user._id, name: user.name, email: user.email }
      });
    }
  );
};


const Adminsignout = (req, res) => {
  res.clearCookie("t");
  return res.status("200").json({
    message: "signed out"
  });
};

  module.exports = {
    Adminsignup,
    AdminLogin,
    Adminsignout
  };

