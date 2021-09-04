const express = require("express");
const { hasAuthentication, authorize } = require('../middleware/hasAuth');
const { createBlog, getAllBlog, getBlog, updateBlog, deleteBlog } = require('../controllers/blog.controller')

const router = express.Router();

router
    .route("/")
    .get(getAllBlog)
    .post(hasAuthentication(['admin']), authorize('admin'), createBlog);

router.route('/:id')
    .get(getBlog)
    .put(hasAuthentication(['admin']), authorize('admin'), updateBlog)
    .delete(hasAuthentication(['admin']), authorize('admin'), deleteBlog)

module.exports = router;
