const Category = require("../models/Category.model")
const _ = require("lodash");
const errorHandler = require("../util/dbErrorHandler");
const formidable = require("formidable");
const fs = require("fs");


// create Category API
/**
 * @api {post} /api/v1/category/add-category Add Category API
 * @apiGroup Category
 * @apiHeader  Authorization
 * @apiParam (Request body)  name Category name
 * @apiParam (Request body)  parentInt Category  parentInt
 * @apiParam (Request body)  sortOrder Category sortOrder
 * @apiParam (Request body)  metaTagTitle Category metaTagTitle
 * @apiParam (Request body)  metaTagDescription Category metaTagDescription
 * @apiParam (Request body)  metaTagKeyword Category metaTagKeyword
 * @apiParam (Request body)  status Category status 1-> Active 0-> inactive
 * @apiParamExample {json} Input
 * {
 *      "name" : "",
 *      "parentInt" : "",
 *      "sortOrder" : "",
 *      "metaTagTitle" : "",
 *      "metaTagDescription" : "",
 *      "metaTagKeyword" : "",
 *      "status" : "",
 * }
 * @apiSuccessExample {json} Success
 * HTTP/1.1 200 OK
 * {
 *      "message": "Successfully created new Category.",
 *      "status": "1"
 * }
 * @apiSampleRequest /api/v1/category/add-category
 * @apiErrorExample {json} Category error
 * HTTP/1.1 500 Internal Server Error
 */
const addCategory = (req, res, next) => {
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

// Category List API
/**
 * @api {get} /api/v1/category/category-list Category List API
 * @apiGroup Category
 * @apiHeader Authorization
 * @apiParam (Request body) limit limit
 * @apiParam (Request body) offset offset
 * @apiParam (Request body) keyword keyword
 * @apiParam (Request body) sortOrder sortOrder
 * @apiParam (Request body) status status
 * @apiParam (Request body) count count in number or boolean
 * @apiSuccessExample {json} Success
 * HTTP/1.1 200 OK
 * {
 *      "message": "successfully got the complete category list.",
 *      "data":"{ }"
 *      "status": "1"
 * }
 * @apiSampleRequest /api/v1/category/category-list
 * @apiErrorExample {json} Category error
 * HTTP/1.1 500 Internal Server Error
 */
const categorylist = (req, res, next) => {
  Category.find({}).exec((err, category) => {
    if (err) {
      return res.status(400).json({
        error: errorHandler.getErrorMessage(err)
      })
    }
    console.log("category", category);
    res.json(category)
  })
}

const categorylistById = (req, res, next, id) => {
  Category.findById(id).exec((err, category) => {
    if (err || !category)
      return res.status(400).json({
        error: "Category not found"
      })
    res.json(category);
  })
}

// Category List Tree API
/**
//  * @api {get} /api/v1/category/category-list-intree Category List InTree API
 * @apiGroup Category
 * @apiHeader {String} Authorization
 * @apiParam (Request body) {Number} limit limit
 * @apiParam (Request body) {Number} offset offset
 * @apiParam (Request body) {String} keyword keyword
 * @apiParam (Request body) {Number} sortOrder sortOrder
 * @apiParam (Request body) {String} count count in number or boolean
 * @apiSuccessExample {json} Success
 * HTTP/1.1 200 OK
 * {
 *      "message": "successfully got the complete category list.",
 *      "data":"{}"
 *      "status": "1"
 * }
 * @apiSampleRequest /api/v1/category/category-list-intree
 * @apiErrorExample {json} Category error
 * HTTP/1.1 500 Internal Server Error
 */
const categoryListIntree = (req, res, next) => {

}

// Update Category API
/**
 * @api {put} /api/v1/category/update-category/:id Update Category API
 * @apiGroup Category
 * @apiHeader Authorization
 * @apiParam (Request body) categoryId Category categoryId
 * @apiParam (Request body) name Category name
 * @apiParam (Request body) parentInt Category  parentInt
 * @apiParam (Request body) sortOrder Category sortOrder
 * @apiParam (Request body) metaTagTitle Category metaTagTitle
 * @apiParam (Request body) metaTagDescription Category metaTagDescription
 * @apiParam (Request body) metaTagKeyword Category metaTagKeyword
 * @apiParam (Request body) status Category status 1-> Active 0-> inactive
 * @apiParamExample {json} Input
 * {
 *      "categoryId" : "",
 *      "name" : "",
 *      "parentInt" : "",
 *      "sortOrder" : "",
 *      "metaTagTitle" : "",
 *      "metaTagDescription" : "",
 *      "metaTagKeyword" : "",
 *      "status" : "",
 * }
 * @apiSuccessExample {json} Success
 * HTTP/1.1 200 OK
 * {
 *      "message": "Successfully updated Category.",
 *      "status": "1"
 * }
 * @apiSampleRequest /api/v1/category/update-category/:id
 * @apiErrorExample {json} Category error
 * HTTP/1.1 500 Internal Server Error
 */
const updateCategory = (req, res, id, next) => {
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
    if (files.image) {
      category.image.data = fs.readFileSync(files.image.path)
      category.image.contentType = files.image.type
    }
    category.updateById(req.params.id, (err, result) => {
      if (err) {
        return res.status(400).send({
          error: errorHandler.getErrorMessage(err)
        })
      }
      res.json(result)
    })
  })
}

// delete Category API
/**
 * @api {delete} /api/v1/category/delete-category/:id Delete Category API
 * @apiGroup Category
 * @apiHeader  Authorization
 * @apiParam (Request body) categoryId Category categoryId
 * @apiParamExample {json} Input
 * {
 *      "categoryId" : "",
 * }
 * @apiSuccessExample {json} Success
 * HTTP/1.1 200 OK
 * {
 *      "message": "Successfully deleted Category.",
 *      "status": "1"
 * }
 * @apiSampleRequest /api/v1/category/delete-category/:id
 * @apiErrorExample {json} Category error
 * HTTP/1.1 500 Internal Server Error
 */
const deleteCategory = (req, res, id, next) => {
  let category = req.category
  category.removeById({ _id: req.params.id }, (err, deletedCategory) => {
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
  addCategory,
  categorylist,
  categorylistById,
  categoryListIntree,
  updateCategory,
  deleteCategory
}


