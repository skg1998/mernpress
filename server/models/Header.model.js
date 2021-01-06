const mongoose = require('mongoose')

const HeaderSchema = new mongoose.Schema({
  route:{},
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

module.exports =  mongoose.model('Header', HeaderSchema)
