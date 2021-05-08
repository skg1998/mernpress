const Title = require("../models/Title.model");
const errorHandler = require("../helpers/dbErrorHandler");
const fs = require("fs");

const addTitle = (req, res) => {
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

    const title = {
      name: req.body.name,
      images: images
    }

    var newtitle = new Title(title);
    newtitle.save((err, result) => {
      if (err) {
        return res.status(400).json({
          error: errorHandler.getErrorMessage(err)
        })
      }
      res.status(200).json(result);
    })
  }
};

const updateTitle = (req, res) => {
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

    const title = {
      name: req.body.name,
      images: images
    }

    var newtitle = new Title(title);
    newtitle.save((err, result) => {
      if (err) {
        return res.status(400).json({
          error: errorHandler.getErrorMessage(err)
        })
      }
      res.status(200).json(result);
    })
  }
}

const deleteTitle = (req, res, next) => {
  Title.remove((err, deletedtitle) => {
    if (err) {
      return res.status(400).json({
        error: errorHandler.getErrorMessage(err)
      })
    }
    res.json(deletedtitle)
  })
}

const readTitle = (req, res, next) => {
  Title.find().exec((err, title) => {
    if (err) {
      return res.status(400).json({
        error: errorHandler.getErrorMessage(err)
      })
    }
    res.json(title)
  })
}

module.exports = {
  addTitle,
  updateTitle,
  deleteTitle,
  readTitle
}

