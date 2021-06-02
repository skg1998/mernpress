const Category = require('../models/Category.model');
const ErrorResponse = require('../util/errorResponse');
const Cloudnary = require('../util/cloudnary');

/**
 * @desc Create new category
 * @route POST api/v1/category/
 * @access Private
 */
exports.addCategory = async (req, res, next) => {
  try {
    if (!req.file) {
      return next(new ErrorResponse('Please upload image', 400))
    }

    const fileUrl = await Cloudnary.uploader.upload(req.file.path);

    let parent = req.body.parent ? req.body.parent : null;
    const category = new Category({
      name: req.body.name,
      image: { data: fileUrl.secure_url, cloudnaryId: fileUrl.public_id },
      parent
    })

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
 * @desc Get category by id
 * @route GET api/v1/category/:id
 * @access Public
 */
exports.getCategory = async (req, res, next) => {
  try {
    const result = await Category.findById(req.params.id)
    if (!result) {
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
    let category = await Category.findById(req.params.id)
    if (!category) {
      return next(new ErrorResponse('Given category id not found', 400))
    }
    await Cloudnary.uploader.destroy(category.image.cloudnaryId);

    const result = await Cloudnary.uploader.upload(req.file.path);

    const data = {
      name: req.body.name || category.name,
      image: {
        data: result.secure_url || category.image.data,
        cloudnaryId: result.public_id || category.image.cloudnaryId
      },
    }

    category = await Category.findByIdAndUpdate(req.params.id, data, {
      new: true,
      runValidators: true
    });

    res.status(200).json({
      success: true,
      data: category,
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
    let category = await Category.findById(req.params.id);

    if (!category) {
      return next(new ErrorResponse('Given category id not found', 400))
    }
    await Cloudnary.uploader.destroy(category.image.cloudnaryId);
    await Category.findByIdAndRemove(req.params.id);

    const result = await Category.deleteMany({ "ancestors._id": req.params.id });

    res.status(200).json({
      success: true,
      data: result,
      message: 'Delete category Successfully !'
    })
  } catch (err) {
    next(err);
  }
}
