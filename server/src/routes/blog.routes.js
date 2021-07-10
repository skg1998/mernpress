const express = require("express");
const { hasAuthorization, authorize } = require('../middleware/hasAuth');
const { createBlog, getAllBlog, getBlog, updateBlog, deleteBlog } = require('../controllers/blog.controller')

const router = express.Router();

router
    .route("/")
    .get(getAllBlog)
    .post(hasAuthorization, authorize('admin'), createBlog);

router.route('/:id')
    .get(getBlog)
    .put(hasAuthorization, authorize('admin'), updateBlog)
    .delete(hasAuthorization, authorize('admin'), deleteBlog)

module.exports = router;
