const Banner = require('../models/Banner.model');
const errorHandler = require('../helpers/dbErrorHandler');
const fs = require('fs');

//Banner Create API
/**
 * @api {post} /api/v1/banner/create Banner Create API
 * @apiGroup Banner
 * @apiHeader  Authorization
 * @apiParam (Request body)  images Banner images
 * @apiParam (Request body)  flag Banner  flag
 * @apiParam (Request body)  targetPath Banner targetPath
 * @apiParamExample {json} Input
 * {
 *      "name": ""
 *      "images" : "",
 *      "flag" : "",
 *      "targetPath" : "" 
 * }
 * @apiSuccessExample {json} Success
 * HTTP/1.1 200 OK
 * {
 *      "message": "Successfully created a banner!",
 *      "status": true
 * }
 * @apiSampleRequest /api/v1/banner/create
 * @apiErrorExample {json} Banner error
 * HTTP/1.1 500 Internal Server Error
 */
const create = (req, res) => {
  if (!req.file || !req.body) {
    return res.status(400).json({
      message: "Image could not be uploaded"
    })
  } else {
    let images = []
    try {
      const files = req.files;
      for (const file of files) {
        var fullPath = "public/files/" + file.filename;
        var imgPath = fs.readFileSync(fullPath, 'utf8');
        var encImg = imgPath.toString('base64');
        var image = {
          path: Buffer(encImg, 'base64'),
          contentType: file.mimetype,
          size: file.size
        }
        images.push(image)
      }
    } catch (e) {
      console.log(e);
    }

    const banner = {
      images: images,
      flag: req.body.flag,
      targetPath: req.body.targetPath
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

//Banner read API
/**
 * @api {get} /api/v1/banner/create Banner Create API
 * @apiGroup Banner
 * @apiHeader  Authorization
 * @apiSuccessExample {json} Success
 * HTTP/1.1 200 OK
 * {
 *      "message": "Successfully get all banner!",
 *      "data": "{}"
 *      "status": "1"
 * }
 * @apiSampleRequest /api/v1/banner/read
 * @apiErrorExample {json} Banner error
 * HTTP/1.1 500 Internal Server Error
 */
const read = async (req, res, next) => {
  try {
    const banner = await Banner.find();
    res.status(201).json({
      succes: true,
      length: banner.length,
      data: banner,
      message: `All Banner has been find succesfully !`
    })
  } catch (err) {
    res.status(400).json({
      status: false,
      message: "Sometihng went wrong, Try after someTime"
    })
  }
}

const readById = async (req, res, next) => {
  try {
    const banner = await Banner.findById(req.params.id)
    if (!banner) {
      return res.status(200).json({
        succes: false,
        length: banner.length,
        data: banner,
        message: `Banner of given id: ${req.params.id} not found`
      })
    }
    res.status(200).json({
      succes: true,
      length: banner.length,
      data: banner,
      message: `Banner of given id: ${req.params.id} has been find succesfully`
    })
  } catch (err) {
    res.status(400).json({
      status: false,
      message: "Sometihng went wrong, Try after someTime"
    })
  }
}

const update = async (req, res) => {
  try {
    const banner = await Banner.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    })
    if (!banner) {
      return res.status(401).json({
        status: false,
        length: banner.length,
        data: banner,
        message: `Banner of given id: ${req.params.id} not found`
      })
    }
    res.status(201).json({
      status: true,
      length: banner.length,
      data: banner,
      message: `Banner of given id: ${req.params.id} has been updated succesfully`
    })
  } catch (err) {
    res.status(400).json({
      status: false,
      message: "Sometihng went wrong, Try after someTime"
    })
  }
}

const remove = async (req, res, next) => {
  try {
    const banner = await Banner.findByIdAndDelete(req.params.id);
    if (!banner) {
      return res.status(401).json({
        status: false,
        length: banner.length,
        data: banner,
        message: `Banner of given id: ${req.params.id} not found`
      })
    }
    res.status(201).json({
      status: true,
      length: banner.length,
      data: banner,
      message: `Banner of given id: ${req.params.id} has been deleted succesfully !`
    })
  } catch (err) {
    res.status(400).json({
      status: false,
      message: "Sometihng went wrong, Try after someTime"
    })
  }
}

module.exports = {
  create,
  read,
  readById,
  update,
  remove,
}