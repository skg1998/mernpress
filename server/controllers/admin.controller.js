const User = require("../models/user.model");
const _ = require("lodash");
const errorHandler = require("../helpers/dbErrorHandler");
const config = require('../config/config');

const adminsignup = (req, res, next) => {
    const user = new User(req.body);
    user.save((err, result) => {
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

const adminLogin = (req,res,next) =>{
     const user = new User(req.body);
     user.find()
     if(user){
         return res.status(200).json({
             message : "Admin has Successfully Login"
         })
     }else{
         return res.status(400).json({
             error :  errorHandler.getErrorMessage(err)
         });
     }
}  

  module.exports = {
      adminsignup
  };