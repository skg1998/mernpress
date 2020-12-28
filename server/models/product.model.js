const mongoose = require('mongoose')
const ProductSchema = new mongoose.Schema({
  productName: {
    type: String,
    trim: true,
    required: 'Product Name is required'
  },
  image: {
    data: Buffer,
    contentType: String,
  },
  productDescription: {
    type: String,
    trim: true
  },
  sku:{
     type:String
  },
  metaTagTitle:{
    type:String
  },
  upc:{
    type:String
  },
  modal:{
   type:String
  },
  category: {
    type: mongoose.Schema.ObjectId,
    ref:'Category'
  },
  quantity: {
    type: Number,
    required: "Quantity is required"
  },
  price: {
    type: Number,
    required: "Price is required"
  },
  outOfStockStatus:{
    type:Number
  },
  requiredShipping:{
    type:Number
  },
  dateAvailable:{
    type:String
  },
  condition:[{
    type:String
  }],
  status:{
    type:Number
  },
  sortOrder:{
    type:Number
  },
  updated: Date,
  created: {
    type: Date,
    default: Date.now
  },
  shop : {type: mongoose.Schema.ObjectId, ref: 'Shop'},
  review:{type:mongoose.Schema.ObjectId, ref:'Review'}
})

module.exports =  mongoose.model('Product', ProductSchema) 

  