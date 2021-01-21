const Banner = require('../models/Banner.model');
const errorHandler =require('../helpers/dbErrorHandler');
const fs = require('fs');
  
const create = (req, res ) => {
  console.log("req.file",req.files)
    if(!req.file || !req.body){
      return res.status(400).json({
        message: "Image could not be uploaded"
      })
    }else{
      let images = []
      try {
        const files = req.files;
        for(const file of files){
          var fullPath = "public/files/"+ file.filename;
          var imgPath = fs.readFileSync(fullPath , 'utf8');
          var encImg = imgPath.toString('base64');
          var image = {
            path:Buffer(encImg , 'base64'),
            contentType: file.mimetype,
            size: file.size
          }
          images.push(image)
        }
      }catch (e) {
        console.log(e);
      }

      const banner = {
        images:images,
        flag:req.body.flag
      }
     
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

  const update = (req,res) => {
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
    Banner.findByIdAndDelete({_id: req.params.id},(err, deletedBannerImage) => {
      if (err) {
        return res.status(400).json({
          error: errorHandler.getErrorMessage(err)
        })
      }
      res.json(deletedBannerImage)
    })
    // Banner.findByIdAndDelete({_id:req.params.id })
    // .then((deletedBannerImage) =>{
    //   res.json(deletedBannerImage)
    // })
    // .catch((err)=>{
    //   res.status(400).json({
    //     error: errorHandler.getErrorMessage(err)
    //   })
    // })
  }
   
 
  
  module.exports = {
    create,
    read,
    readById,
    update,
    remove,
  } 