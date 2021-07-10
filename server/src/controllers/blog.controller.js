const Blog = require('../models/blog.model');
const ErrorResponse = require('../util/errorResponse');


/**
 * @desc Create new Blog
 * @route POST api/v1/blog/
 * @access private
 */
exports.createBlog = async (req, res, next) => {
    try {
        const blog = await Blog.create(req.body);
        res.status(200).json({
            success: true,
            data: blog,
            message: 'Add new blog Successfully !'
        })
    } catch (err) {
        next(err);
    }
}

/**
 * @desc Get All Blog
 * @route GET api/v1/blog/
 * @access Public 
 */
exports.getAllBlog = async (req, res, next) => {
    try {
        const result = await Blog.find().populate('user');
        res.status(200).json({
            success: true,
            data: result,
            message: 'Get all Blog Successfully !'
        })
    } catch (err) {
        next(err);
    }
}

/**
 * @desc Get blog by id
 * @route GET api/v1/blog/:id
 * @access Public
 */
exports.getBlog = async (req, res, next) => {
    try {
        const result = await Blog.findById(req.params.id)
        if (!result) {
            return next(new ErrorResponse('Given blog id not found', 400))
        }
        res.status(200).json({
            success: true,
            data: result,
            message: 'Get Blog Successfully !'
        })
    } catch (err) {
        next(err);
    }
}


/**
 * @desc Update blog
 * @route PUT api/v1/blog/:id
 * @access Private
 */
exports.updateBlog = async (req, res, next) => {
    try {
        const blog = await Blog.findByIdAndUpdate(req.params.id, data, {
            new: true,
            runValidators: true
        });


        if (!blog) {
            return next(new ErrorResponse('Given Blog id not found', 400))
        }

        res.status(200).json({
            success: true,
            data: blog,
            message: 'Update Blog Successfully !'
        })
    } catch (err) {
        next(err);
    }
}

/**
 * @desc Delete blog
 * @route DELETE api/v1/blog/:id
 * @access Private
 */
exports.deleteBlog = async (req, res, next) => {
    try {
        let blog = await Blog.findById(req.params.id);

        if (!blog) {
            return next(new ErrorResponse('Given blog id not found', 400))
        }
        await blog.remove();
        res.status(200).json({
            success: true,
            data: result,
            message: 'Delete blog Successfully !'
        })
    } catch (err) {
        next(err);
    }
}
