const mongoose = require('mongoose');
const slugify = require('slugify')

const CategorySchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: [true, 'Name is required']
  },
  slug: { type: String, index: true },
  image: {
    data: Buffer,
    contentType: String
  },
  parent: {
    type: mongoose.Schema.Types.ObjectId,
    default: null,
    ref: 'Category'
  },
  ancestors: [{
    _id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      index: true
    },
    name: String,
    slug: String
  }],
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



