const Banner =( '../models/Banner.model')
const _ =( 'lodash')
const errorHandler =( '../helpers/dbErrorHandler')
const formidable =( 'formidable')
const fs =( 'fs')

const create = (req, res, next) => {
    let form = new formidable.IncomingForm()
    form.keepExtensions = true
    form.parse(req, (err, fields, files) => {
      if (err) {
        return res.status(400).json({
          message: "Image could not be uploaded"
        })
      }
      let addBanner = new Banner(fields)
      if(files.image){
        addBanner.image.data = fs.readFileSync(files.image.path)
        addBanner.image.contentType = files.image.type
      }
      addBanner.save((err, result) => {
        if (err) {
          return res.status(400).json({
            error: errorHandler.getErrorMessage(err)
          })
        }
        res.status(200).json(result)

      })
    })
  }

  const update = (req,res,next,id) =>{
    let form = new formidable.IncomingForm()
    form.keepExtensions = true
    form.parse(req, (err, fields, files) => {
      if (err) {
        return res.status(400).json({
          message: "Photo could not be uploaded"
        })
      }
      let addbanner = req.addbanner
      addbanner = _.extend(addbanner, fields)
      addbanner.updated = Date.now()
      if(files.image){
        addbanner.image.data = fs.readFileSync(files.image.path)
        addbanner.image.contentType = files.image.type
      }
      addbanner.save((err, result) => {
        if (err) {
          return res.status(400).send({
            error: errorHandler.getErrorMessage(err)
          })
        }
        res.json(result)
      })
    })
  }
  
  const remove = (req,res,next,id) =>{
    Banner.removeById({_id: req.params.id},(err, deletedBannerImage) => {
      if (err) {
        return res.status(400).json({
          error: errorHandler.getErrorMessage(err)
        })
      }
      res.json(deletedBannerImage)
    })
  }
  
  const read = (req,res,next) =>{
    Banner.find().exec((err, BannerImage) => {
      if (err) {
        return res.status(400).json({
          error: errorHandler.getErrorMessage(err)
        })
      }
      res.status(200).json(BannerImage)
    })
  }

  const readById = (req,res,next,id) =>{
    Banner.findById(id).exec((err, BannerImage) => {
      if (err) {
        return res.status(400).json({
          error: "Banner of this id not found"
        })
      }
      res.status(200).json(BannerImage)
    })
  }  
  
  module.exports = {
    create,
    update,
    remove,
    read,
    readById
  }