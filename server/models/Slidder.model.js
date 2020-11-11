const mongoose = require('mongoose')

const SlidderSchema = new mongoose.Schema({
    images: [{
        url: String
     }],
  updated: Date,
  created: {
    type: Date,
    default: Date.now
  }
})

module.exports =  mongoose.model('Slidder', SlidderSchema)
