const mongoose = require('mongoose')

const BannerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "name is required"]
  },
  images: {
    data: Buffer,
    contentType: String,
    size: Number
  },
  flag: {
    type: Boolean,
    default: false
  },
  targetPath: {
    type: String,
    required: [true, "target Path is required"]
  },
  updated: Date,
  created: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model('Banner', BannerSchema);

