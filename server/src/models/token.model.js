const mongoose = require('mongoose');

const tokenSchema = new mongoose.Schema({
    adminId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Admin'
    },

    token: {
        type: String,
        required: true
    },

    createdAt: {
        type: Date,
        required: true,
        default: Date.now,
        expires: 43200
    }

}, {timestamps: true});

module.exports = mongoose.model('Tokens', tokenSchema);