const Banner = require('../models/Banner.model');
const errorHandler =require('../helpers/dbErrorHandler');
const fs = require('fs');
const path = require('path');
  
const create = (req, res ) => {
    if(req.file == undefined){
      return res.status(400).json({
        message: "Image could not be uploaded"
      })
    }else{
      try {
        var fullPath = "public/files/"+req.file.filename;
        var imgPath = fs.readFileSync(fullPath , 'utf8');
        var encImg = imgPath.toString('base64');
      }
      catch (e) {
        console.log(e);
      }
      var banner = {
        image: {
          path:Buffer(encImg , 'base64'),
          contentType: req.file.mimetype,
          size: req.file.size
        }, 
        flag:req.body.flag
      };
      var addBanner = new Banner(banner); 
      addBanner.save((err, result) => {
        if (err) {
          return res.status(400).json({
            error: errorHandler.getErrorMessage(err)
          })
        }
        res.status(200).json(result);
      })
    }
  }

  const read = (req,res) =>{
    Banner.find().exec((err, BannerImage) => {
      if (err) {
        return res.status(400).json({
          error: errorHandler.getErrorMessage(err)
        })
      }
      res.status(200).json(BannerImage)
    })
  }

  const readById = (req,res) =>{
    Banner.findById({_id:req.params.id}).exec((err, BannerImage) => {
      if (err) {
        return res.status(400).json({
          error: "Banner of this id not found"
        })
      }
      res.status(200).json(BannerImage)
    })
  }  

  const update = (req,res) =>{
    if(req.file == undefined){
      return res.status(400).json({
        message: "Image could not be uploaded"
      })
    }else{
      var fullPath = "files/"+req.file.filename;
      var imgPath = fs.readFileSync(fullPath);
      var encImg = imgPath.toString('base64');
      var banner = {
        image: {
          path:Buffer(encImg, 'base64'),
          contentType: req.file.mimetype,
          size: req.file.size
        }, 
        flag:req.body.flag
      };
      var addBanner = new Banner(banner); 
      addBanner.save((err, result) => {
        if (err) {
          return res.status(400).json({
            error: errorHandler.getErrorMessage(err)
          })
        }
        res.status(200).json(result);
      })
    }
  }
  
  const remove = (req,res) =>{
    Banner.removeById({_id: req.params.id},(err, deletedBannerImage) => {
      if (err) {
        return res.status(400).json({
          error: errorHandler.getErrorMessage(err)
        })
      }
      res.json(deletedBannerImage)
    })
  }
  
 
  
  module.exports = {
    create,
    read,
    readById,
    update,
    remove,
  } 