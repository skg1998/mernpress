const mongoose = require('mongoose')

const BannerSchema = new mongoose.Schema({
  images: [{
    path: Buffer,
    contentType: String,
    size:Number
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
