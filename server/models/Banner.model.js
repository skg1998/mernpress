const mongoose = require('mongoose')

const BannerSchema = new mongoose.Schema({
  images: [{
    data: Buffer,
    contentType: String
     }],
  flag:{
    type: Boolean,
    default:false
  },   
  updated: Date,
  created: {
    type: Date,
    default: Date.now
  }
})

module.exports =  mongoose.model('Banner', BannerSchema);
