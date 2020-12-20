const mongoose = require('mongoose')

const BannerSchema = new mongoose.Schema({
    images: [{
        url: String
     }],
  flag:{
    default:false
  },   
  updated: Date,
  created: {
    type: Date,
    default: Date.now
  }
})

module.exports =  mongoose.model('Banner', BannerSchema);
