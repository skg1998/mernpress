const { Title, Header, Slidder, Banner } = require('../models/basicDesign.model');
const ErrorResponse = require('../util/errorResponse');

/**
 * 
 * @desc create Title
 * @route POST api/v1/basicdesign/title/
 * @access Public
 */
exports.createTitle = async (req, res, next) => {
    try {
        const title = await Title.create(req.body);
        res.status(200).json({
            success: true,
            data: title,
            message: 'successfully created your Project'
        })
    } catch (err) {
        next(err);
    }
}

/**
 * 
 * @desc get Title
 * @route GET api/v1/basicdesign/title/
 * @access Public
 */
exports.getTitle = async (req, res, next) => {
    try {
        const title = await Title.findOne();
        res.status(200).json({
            success: true,
            data: title,
            message: 'successfully get your Project'
        })
    } catch (err) {
        next(err);
    }
}

/**
 * 
 * @desc get Title
 * @route PUT api/v1/basicdesign/title/
 * @access Private
 */
exports.updateTitle = async (req, res, next) => {
    try {
        const title = await Title.findOneAndUpdate(req.body, { new: true, runValidators: true })

        if (!title) {
            return next(
                new ErrorResponse(`No title found`, 404)
            );
        }

        res.status(200).json({
            success: true,
            data: title,
            message: 'Successfully update Product title !'
        })
    } catch (err) {
        next(err);
    }
}

/**
 * 
 * @desc delete Title
 * @route DELETE api/v1/basicdesign/title/
 * @access Private
 */
exports.deleteTitle = async (req, res, next) => {
    try {
        const title = await Title.findOneAndDelete();

        if (!title) {
            return next(
                new ErrorResponse(`No title found`, 404)
            );
        }

        res.status(200).json({
            success: true,
            data: title,
            message: 'Successfully delete Product title !'
        })
    } catch (err) {
        next(err);
    }
}


/**
 * 
 * @desc create Header
 * @route POST api/v1/basicdesign/Header/
 * @access Public
 */
exports.createHeader = async (req, res, next) => {
    try {
        const header = await Header.create(req.body);
        res.status(200).json({
            success: true,
            data: header,
            message: 'successfully created your Project'
        })
    } catch (err) {
        next(err);
    }
}

/**
 * 
 * @desc get Header
 * @route GET api/v1/basicdesign/Header/
 * @access Public
 */
exports.getHeader = async (req, res, next) => {
    try {
        const header = await Header.findOne();
        res.status(200).json({
            success: true,
            data: header,
            message: 'successfully get your Project'
        })
    } catch (err) {
        next(err);
    }
}

/**
 * 
 * @desc get Header
 * @route PUT api/v1/basicdesign/Header/
 * @access Private
 */
exports.updateHeader = async (req, res, next) => {
    try {
        const header = await Header.findOneAndUpdate(req.body, { new: true, runValidators: true })

        if (!header) {
            return next(
                new ErrorResponse(`No Header found`, 404)
            );
        }

        res.status(200).json({
            success: true,
            data: header,
            message: 'Successfully update Product Header !'
        })
    } catch (err) {
        next(err);
    }
}

/**
 * 
 * @desc delete Header
 * @route DELETE api/v1/basicdesign/Header/
 * @access Private
 */
exports.deleteHeader = async (req, res, next) => {
    try {
        const header = await Header.findOneAndDelete();

        if (!header) {
            return next(
                new ErrorResponse(`No Header found`, 404)
            );
        }

        res.status(200).json({
            success: true,
            data: header,
            message: 'Successfully delete Product Header !'
        })
    } catch (err) {
        next(err);
    }
}


/**
 * 
 * @desc create Slidder
 * @route POST api/v1/basicdesign/slidder/
 * @access Public
 */
exports.createSlidder = async (req, res, next) => {
    try {
        const slidder = await Slidder.create(req.body);
        res.status(200).json({
            success: true,
            data: slidder,
            message: 'successfully created your Project'
        })
    } catch (err) {
        next(err);
    }
}

/**
 * 
 * @desc get Slidder
 * @route GET api/v1/basicdesign/slidder/
 * @access Public
 */
exports.getSlidder = async (req, res, next) => {
    try {
        const slidder = await Slidder.findOne();
        res.status(200).json({
            success: true,
            data: slidder,
            message: 'successfully get your Project'
        })
    } catch (err) {
        next(err);
    }
}

/**
 * 
 * @desc get Slidder
 * @route PUT api/v1/basicdesign/slidder/
 * @access Private
 */
exports.updateSlidder = async (req, res, next) => {
    try {
        const slidder = await Slidder.findOneAndUpdate(req.body, { new: true, runValidators: true })

        if (!slidder) {
            return next(
                new ErrorResponse(`No Slidder found`, 404)
            );
        }

        res.status(200).json({
            success: true,
            data: slidder,
            message: 'Successfully update Product slidder !'
        })
    } catch (err) {
        next(err);
    }
}

/**
 * 
 * @desc delete Slidder
 * @route DELETE api/v1/basicdesign/slidder/
 * @access Private
 */
exports.deleteSlidder = async (req, res, next) => {
    try {
        const slidder = await Slidder.findOneAndDelete();

        if (!slidder) {
            return next(
                new ErrorResponse(`No Slidder found`, 404)
            );
        }

        res.status(200).json({
            success: true,
            data: slidder,
            message: 'Successfully delete Product Slidder !'
        })
    } catch (err) {
        next(err);
    }
}


/**
 * 
 * @desc create Banner
 * @route POST api/v1/basicdesign/banner/
 * @access Public
 */
exports.createBanner = async (req, res, next) => {
    try {
        const banner = await Banner.create(req.body);
        res.status(200).json({
            success: true,
            data: banner,
            message: 'successfully created your Project'
        })
    } catch (err) {
        next(err);
    }
}

/**
 * 
 * @desc get Banner
 * @route GET api/v1/basicdesign/banner/
 * @access Public
 */
exports.getBanner = async (req, res, next) => {
    try {
        const banner = await Banner.findOne();
        res.status(200).json({
            success: true,
            data: banner,
            message: 'successfully get your Project'
        })
    } catch (err) {
        next(err);
    }
}

/**
 * 
 * @desc get Banner
 * @route PUT api/v1/basicdesign/banner/
 * @access Private
 */
exports.updateBanner = async (req, res, next) => {
    try {
        const banner = await Banner.findOneAndUpdate(req.body, { new: true, runValidators: true })

        if (!banner) {
            return next(
                new ErrorResponse(`No Banner found`, 404)
            );
        }

        res.status(200).json({
            success: true,
            data: banner,
            message: 'Successfully update Product Banner !'
        })
    } catch (err) {
        next(err);
    }
}

/**
 * 
 * @desc delete Banner
 * @route DELETE api/v1/basicdesign/banner/
 * @access Private
 */
exports.deleteBanner = async (req, res, next) => {
    try {
        const banner = await Banner.findOneAndDelete();

        if (!banner) {
            return next(
                new ErrorResponse(`No Banner found`, 404)
            );
        }

        res.status(200).json({
            success: true,
            data: banner,
            message: 'Successfully delete Product Banner !'
        })
    } catch (err) {
        next(err);
    }
}

