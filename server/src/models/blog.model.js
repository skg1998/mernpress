const mongoose = require("mongoose");

const BlogCategorySchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
);

const BlogCategory = mongoose.model("BlogCategory", BlogCategorySchema);

const BlogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true,
    },
    desc: {
        type: String,
        required: true,
    },
    photo: {
        type: String,
        required: false,
    },
    user: {
        type: mongoose.Schema.ObjectId,
        ref: 'User'
    },
    categories: {
        type: mongoose.Schema.ObjectId,
        ref: 'BlogCategory'
    },
},
    { timestamps: true }
);

const Blog = mongoose.model("Blog", BlogSchema);

module.exports = { BlogCategory, Blog }