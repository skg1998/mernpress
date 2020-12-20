const mongoose = require('mongoose')

const CategorySchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: 'Name is required'
  },
  image: {
    data: Buffer,
    contentType: String
  },
  child_Category:{
    type: [],
    default: undefined
  },
  parent_Category:{
    type: [],
    default: undefined
  },
  updated: Date,
  created: {
    type: Date,
    default: Date.now
  },
  catalog:{type: mongoose.Schema.ObjectId, ref: 'Catalog'}
})

module.exports =  mongoose.model('Category', CategorySchema); 
   

