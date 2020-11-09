const AddTitle = require("../models/Title.model");
const _ = require("lodash");
const errorHandler = require("../helpers/dbErrorHandler");
const formidable = require("formidable");
const fs = require("fs");

const addTitle = (req, res, next) => {
  console.log("add title",req.body);
  let form = new formidable.IncomingForm();
  form.keepExtensions = true;
  form.parse(req, (err, fields, files) => {
    if (err) {
      res.status(400).json({
        message: "Image could not be uploaded"
      });
    }
    let addtitle = new AddTitle(fields);
    if (files.image) {
      addtitle.image.data = fs.readFileSync(files.image.path);
      addtitle.image.contentType = files.image.type;
    }
    addtitle.save((err, result) => {
      if (err) {
        return res.status(400).json({
          error: errorHandler.getErrorMessage(err)
        });
      }
      res.status(200).json(result);
    });
  });
};

const updateTitle = (req,res,next) =>{
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

const deleteTitle = (req,res,next) =>{
  let title = req.title
  title.remove((err, deletedtitle) => {
    if (err) {
      return res.status(400).json({
        error: errorHandler.getErrorMessage(err)
      })
    }
    res.json(deletedtitle)
  })
}

const readTitle = (req,res,next) =>{
  AddTitle.find().exec((err, title) => {
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

