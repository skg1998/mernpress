const mongoose = require('mongoose');
const slugify = require('slugify')

const CategorySchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: [true, 'Name is required']
  },
  slug: String,
  image: {
    data: Buffer,
    contentType: String
  },
  child_Category: {
    type: [String],
    default: undefined
  },
  parent_Category: {
    type: [String],
    default: undefined
  },
  modified_at: Date,
  created_at: {
    type: Date,
    default: Date.now
  }
})

CategorySchema.pre('save', function (next) {
  this.slug = slugify(this.name, { lower: true })
  next();
})

module.exports = mongoose.model('Category', CategorySchema);



