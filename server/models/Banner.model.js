const mongoose = require('mongoose')

const BannerSchema = new mongoose.Schema({
  images: {
    type: [],
    path: Buffer,
    contentType: String,
    size: Number
  },
  flag: {
    type: Boolean,
    default: false
  },
  targetPath: {
    type: String
  },
  updated: Date,
  created: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model('Banner', BannerSchema);

