const AddTitle = require("../models/addTitle.model");
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

module.exports = {
    addTitle
}