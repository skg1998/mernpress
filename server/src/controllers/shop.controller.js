const Shop = require('../models/shop.model');
const ErrorResponse = require('../util/errorResponse');

/**
 * @desc Create new shop
 * @route POST api/v1/shop/
 * @access Private
 */
exports.addShop = async (req, res, next) => {
    try {
        const shop = new Shop({
            name: req.body.name,
            description: req.body.description,
            user: req.user.id
        })
        await shop.save();
        res.status(200).json({
            success: true,
            data: shop,
            message: 'Add new shop Successfully !'
        })
    } catch (err) {
        next(err);
    }
}

/**
 * @desc Get All shop
 * @route GET api/v1/shop/
 * @access Public
 */
exports.getShops = async (req, res, next) => {
    try {
        const result = await Shop.find().populate('user');

        res.status(200).json({
            success: true,
            data: result,
            message: 'Get all shop Successfully !'
        })
    } catch (err) {
        next(err);
    }
}

/**
 * @desc Get shop by id
 * @route GET api/v1/shop/:id
 * @access Public
 */
exports.getShop = async (req, res, next) => {
    try {
        const result = await Shop.findById(req.params.id)
        if (!result) {
            return next(new ErrorResponse('Given Shop id not found', 400))
        }
        res.status(200).json({
            success: true,
            data: result,
            message: 'Get shop Successfully !'
        })
    } catch (err) {
        next(err);
    }
}


/**
 * @desc Update shop
 * @route PUT api/v1/shop/:id
 * @access Private
 */
exports.updateShop = async (req, res, next) => {
    try {
        const shop = await Shop.findByIdAndUpdate(req.params.id, data, {
            new: true,
            runValidators: true
        });


        if (!shop) {
            return next(new ErrorResponse('Given shop id not found', 400))
        }

        res.status(200).json({
            success: true,
            data: shop,
            message: 'Update shop Successfully !'
        })
    } catch (err) {
        next(err);
    }
}

/**
 * @desc Delete shop
 * @route DELETE api/v1/shop/:id
 * @access Private
 */
exports.deleteShop = async (req, res, next) => {
    try {
        let shop = await Shop.findById(req.params.id);

        if (!shop) {
            return next(new ErrorResponse('Given shop id not found', 400))
        }
        await shop.remove();
        res.status(200).json({
            success: true,
            data: result,
            message: 'Delete shop Successfully !'
        })
    } catch (err) {
        next(err);
    }
}
