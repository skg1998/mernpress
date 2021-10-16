const mongoose = require("mongoose");

const ImageSchema = new mongoose.Schema({
    data: { type: String },
    cloudnaryId: { type: String }
},
    { timestamps: true }
);

const Image = mongoose.model("Image", ImageSchema);

module.exports = { Image }