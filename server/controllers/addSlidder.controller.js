const Slidder =( '../models/addSlidder.model')
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
      let addSlidder = new Slidder(fields)
      if(files.image){
        addSlidder.image.data = fs.readFileSync(files.image.path)
        addSlidder.image.contentType = files.image.type
      }
      addSlidder.save((err, result) => {
        if (err) {
          return res.status(400).json({
            error: errorHandler.getErrorMessage(err)
          })
        }
        res.status(200).json(result)

      })
    })
  }

  const update = (req,res,next) =>{
    let form = new formidable.IncomingForm()
    form.keepExtensions = true
    form.parse(req, (err, fields, files) => {
      if (err) {
        return res.status(400).json({
          message: "Photo could not be uploaded"
        })
      }
      let addtitle = req.addtitle
      addtitle = _.extend(addtitle, fields)
      addtitle.updated = Date.now()
      if(files.image){
        addtitle.image.data = fs.readFileSync(files.image.path)
        addtitle.image.contentType = files.image.type
      }
      addtitle.save((err, result) => {
        if (err) {
          return res.status(400).send({
            error: errorHandler.getErrorMessage(err)
          })
        }
        res.json(result)
      })
    })
  }
  
  const remove = (req,res,next) =>{
    let title = req.title
    title.remove((err, deletedslidderImage) => {
      if (err) {
        return res.status(400).json({
          error: errorHandler.getErrorMessage(err)
        })
      }
      res.json(deletedslidderImage)
    })
  }
  
  const read = (req,res,next) =>{
    Slidder.find().exec((err, slidderImage) => {
      if (err) {
        return res.status(400).json({
          error: errorHandler.getErrorMessage(err)
        })
      }
      res.json(slidderImage)
    })
  }
  
  module.exports = {
    create,
    update,
    remove,
    read
  }