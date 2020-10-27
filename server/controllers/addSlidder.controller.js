const Slidder =( '../models/addSlidder.model')
const _ =( 'lodash')
const errorHandler =( '../helpers/dbErrorHandler')
const formidable =( 'formidable')
const fs =( 'fs')

const addImageSlidder = (req, res, next) => {
//     const obj = JSON.parse(JSON.stringify(req.body)); 
//     console.log(obj);
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

  module.exports = {addImageSlidder}  