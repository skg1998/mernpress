const Admin = require("../models/admin.model");
const _ = require("lodash");
const errorHandler = require("../helpers/dbErrorHandler");
const jwt = require("jsonwebtoken");
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
  var NewAdmin = new Admin({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password
  });

  Admin.findOne({
    email: req.body.email
  })
    .then(admin => {
      if (!admin) {
        NewAdmin.setPassword(String(req.body.password));
        NewAdmin.save().then(user => {
          res.json({
            message: user.email + "Successfully signed up!",
            status: "1"
          });
        })
          .catch(err => {
            res.send('error: ' + err);
          })
      } else {
        errors.push({ msg: 'User already exists' });
        res.json({ errors });
      }

    })
    .catch(err => {
      res.send('error:' + err);
    })
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
      if (!user.validPassword(String(req.body.password))) {
        return res.status("401").send({
          error: "Email and password don't match."
        });
      }
      const token = jwt.sign(
        {
          _id: user._id
        },
        jwtSecret
      );
      res.cookie("t", token, {
        expire: new Date() + 9999
      });
      return res.json({
        message: "Successfully Login!",
        data: {
          token,
          user: {
            _id: user._id,
            name: user.name,
            email: user.email,
            created_At: user.created_At,
            updated_At: user.updated_At,
            isVerified: user.isVerified
          }
        },
        status: "1"
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
    message: "Successfully Logout!",
    status: "1"
  });
};

module.exports = {
  Adminsignup,
  AdminLogin,
  Adminsignout
};

