const Category = require("../models/Category.model");
const _ = require("lodash");
const errorHandler = require("../helpers/dbErrorHandler");
const formidable = require("formidable");
const fs = require("fs");

const create = (req, res, next) => {
  let form = new formidable.IncomingForm();
  form.keepExtensions = true;
  form.parse(req, (err, fields, files) => {
    if (err) {
      res.status(400).json({
        message: "Image could not be uploaded"
      });
    }
    let category = new Category(fields);
    if (files.image) {
      category.image.data = fs.readFileSync(files.image.path);
      category.image.contentType = files.image.type;
    }
    category.save((err, result) => {
      if (err) {
        return res.status(400).json({
          error: errorHandler.getErrorMessage(err)
        });
      }
      res.status(200).json(result);
    });
  });
};

const read = (req,res,next) =>{
    Category.find().exec((err, category) => {
      if (err) {
        return res.status(400).json({
          error: errorHandler.getErrorMessage(err)
        })
      }
      res.json(category)
    })
}

const readById = (req,res,next,id) =>{
    Category.findById(id).exec((err, category) => {
        if (err || !category)
          return res.status(400).json({
            error: "Category not found"
          })
        res.json(category);
      })
}

const update = (req,res,id,next) =>{
  let form = new formidable.IncomingForm()
  form.keepExtensions = true
  form.parse(req, (err, fields, files) => {
    if (err) {
      return res.status(400).json({
        message: "Photo could not be uploaded"
      })
    }
    let category = req.category
    category = _.extend(category, fields)
    category.updated = Date.now()
    if(files.image){
      category.image.data = fs.readFileSync(files.image.path)
      category.image.contentType = files.image.type
    }
    category.updateById(req.params.id,(err, result) => {
      if (err) {
        return res.status(400).send({
          error: errorHandler.getErrorMessage(err)
        })
      }
      res.json(result)
    })
  })
}

const remove = (req,res,id,next) =>{
  let category = req.category
  category.removeById({_id: req.params.id},(err, deletedCategory) => {
    if (err) {
      return res.status(400).json({
        error: errorHandler.getErrorMessage(err),
        id: req.params.id
      })
    }
    res.json(deletedCategory)
  })
}

module.exports = {
    create,
    read,
    readById,
    update,
    remove
}

