const mongoose = require('mongoose');

const DiscountSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: 'Name is required'
    },
    description: {
        type: String,
        trim: true,
        required: 'Name is required'
    },
    discount_percent: {
        type: Number,
        required: true
    },
    active: {
        type: Boolean,
        required: true
    },
    modified_at: {
        type: Date
    },
    created_at: {
        type: Date,
        default: Date.now
    },
    deleted_at: {
        type: Date
    }
})

module.exports = mongoose.model('Discount', DiscountSchema);


