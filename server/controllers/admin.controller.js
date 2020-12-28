const Admin = require("../models/admin.model");
const _ = require("lodash");
const errorHandler = require("../helpers/dbErrorHandler");
const jwt = require("jsonwebtoken");
const expressJwt = require("express-jwt");
const config = require('../config/config');
//const jwtSecret = "sdghjak82374ihury83yr3yr2u3h"
const jwtSecret = process.env.JWT_SECRET

//Admin Signup API
/**
 * @api {get} /api/v1/admin/signup Admin Register API
 * @apiGroup Admin
 * @apiHeader  Authorization
 * @apiParam (Request body)  name Admin name
 * @apiParam (Request body)  email Admin  email
 * @apiParam (Request body)  password Admin password
 * @apiParamExample {json} Input
 * {
 *      "name" : "",
 *      "email" : "",
 *      "password" : ""
 * }
 * @apiSuccessExample {json} Success
 * HTTP/1.1 200 OK
 * {
 *      "message": "Successfully signed up!",
 *      "status": "1"
 * }
 * @apiSampleRequest /api/v1/admin/signup
 * @apiErrorExample {json} Admin error
 * HTTP/1.1 500 Internal Server Error
 */
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

//Admin Login API
/**
 * @api {get} /api/v1/admin/Login Admin Login API
 * @apiGroup Admin
 * @apiHeader  Authorization
 * @apiParam (Request body)  email Admin  email
 * @apiParam (Request body)  password Admin password
 * @apiParamExample {json} Input
 * {
 *      "email" : "",
 *      "password" : ""
 * }
 * @apiSuccessExample {json} Success
 * HTTP/1.1 200 OK
 * {
 *      "message": "Successfully Login!",
 *      "data":{},
 *      "status": "1"
 * }
 * @apiSampleRequest /api/v1/admin/Login
 * @apiErrorExample {json} Admin error
 * HTTP/1.1 500 Internal Server Error
 */  
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

//Admin Logout API
/**
 * @api {get} /api/v1/admin/logout Admin Logout API
 * @apiGroup Admin
 * @apiHeader  Authorization
 * @apiSuccessExample {json} Success
 * HTTP/1.1 200 OK
 * {
 *      "message": "Successfully Logout!",
 *      "status": "1"
 * }
 * @apiSampleRequest /api/v1/admin/logout
 * @apiErrorExample {json} Admin error
 * HTTP/1.1 500 Internal Server Error
 */
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

