const mongoose = require('mongoose')

const ReviewSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.ObjectId, ref: 'User' },
  comment: { type: String, required: true },
  rating: { type: Number, required: true }
},
  { timestamps: true }
);

module.exports = mongoose.model("Review", ReviewSchema);
