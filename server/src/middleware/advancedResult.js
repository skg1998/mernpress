const advancedResult = (model, populate) => async (req, res, next) => {
    let query;

    //copy query Request
    const reqQuery = { ...req.query };

    //Feilds to exclude
    const removeFeilds = ['select', 'sort', 'page', 'limit'];

    //Loop over removeFeilds and delete them reqQuery
    removeFeilds.forEach(param => delete reqQuery[param])

    //create query String 
    let queryStr = JSON.stringify(reqQuery)

    //create operators ($gt, $gte, $lt, $lte, $in) 
    queryStr = queryStr.replace(/\b(gt|gte|lt|lte|in)\b/g, match => `$${match}`)

    //Finding resource
    query = model.find(JSON.parse(queryStr));

    //SELECT query
    if (req.query.select) {
        const feilds = req.query.select.split(',').join(' ');
        query = query.select(feilds)
    }

    //SORT query
    if (req.query.sort) {
        const sortBy = req.query.sort.split(',').join(' ');
        query = query.sort(sortBy)
    } else {
        query = query.sort('-created_At')
    }

    //PAGINATION query
    const page = parseInt(req.query.page, 10) || 1;
    const limit = parseInt(req.query.limit, 10) || 10;
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    const total = await model.countDocuments();
    query = query.skip(startIndex).limit(limit)

    //POPULATE
    if (populate) {
        query = query.populate(populate);
    }

    //Existing Query
    const result = await query;

    //PAGINATION result
    const pagination = {};
    if (endIndex < total) {
        pagination.next = {
            page: page + 1,
            limit: limit
        }
    }

    if (startIndex > 0) {
        pagination.prev = {
            page: page - 1,
            limit: limit
        }
    }

    res.advancedResult = {
        status: true,
        count: result.length,
        data: result,
        pagination: pagination
    }
    next();
}

module.exports = advancedResult;