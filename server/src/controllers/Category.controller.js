const Category = require('../models/Category.model');
const ErrorResponse = require('../util/errorResponse');

/**
 * @desc Create new category
 * @route POST api/v1/category/
 * @access Private
 */
exports.addCategory = async (req, res, next) => {
  let parent = req.body.parent ? req.body.parent : null;
  const category = new Category({ name: req.body.name, image: req.file.path, parent })
  try {
    let newCategory = await category.save();
    buildAncestors(newCategory._id, parent)
    res.status(200).json({
      success: true,
      data: newCategory,
      message: 'Add new category Successfully !'
    })
  } catch (err) {
    next(err);
  }
}

//build ancestors
const buildAncestors = async (id, parent_id) => {
  try {
    let parent_category = await Category.findOne(
      { "_id": parent_id },
      { "name": 1, "slug": 1, "ancestors": 1 }
    ).exec();
    console.log()
    if (parent_category) {
      const { _id, name, slug } = parent_category;
      const ancest = [...parent_category.ancestors];
      ancest.unshift({ _id, name, slug })
      await Category.findByIdAndUpdate(id, { $set: { "ancestors": ancest } });
    }
  } catch (err) {
    console.log(err);
  }
}

/**
 * @desc Get All category
 * @route GET api/v1/category/
 * @access Public
 */
exports.getCategories = async (req, res, next) => {
  try {
    const result = await Category.find()

    res.status(200).json({
      success: true,
      data: result,
      message: 'Get all categories Successfully !'
    })
  } catch (err) {
    next(err);
  }
}

/**
 * @desc Get All category
 * @route GET api/v1/category/
 * @access Public
 */
exports.descendants = async (req, res, next) => {
  try {
    const result = await Category.find({ "ancestors._id": req.query.category_id })
      .select({ "_id": false, "name": true })
      .exec();

    if (!result) {
      return next(new ErrorResponse('Given category id not found', 400))
    }

    res.status(200).json({
      success: true,
      data: result,
      message: `Get All descendants of given ${req.query.category_id}`
    })
  } catch (err) {
    next(err);
  }
}


/**
 * @desc Update category
 * @route PUT api/v1/category/id
 * @access Private
 */
exports.updateCategories = async (req, res, next) => {
  try {
    const category = await Category.findByIdAndRemove(req.params.id, req.body, {
      new: true,
      runValidators: true
    });

    if (category) {
      return next(new ErrorResponse('Given category id not found', 400))
    }

    res.status(200).json({
      success: true,
      data: result,
      message: 'Get all categories Successfully !'
    })
  } catch (err) {
    next(err);
  }
}

/**
 * @desc Delete All category
 * @route DELETE api/v1/category/id
 * @access Private
 */
exports.deleteCategories = async (req, res, next) => {
  try {
    const err = await Category.findByIdAndRemove(category_id);
    if (err) {
      return next(new ErrorResponse('Given category id not found', 400))
    }
    const result = await Category.deleteMany({ "ancestors._id": category_id });

    res.status(200).json({
      success: true,
      data: result,
      message: 'Get all categories Successfully !'
    })
  } catch (err) {
    next(err);
  }
}
