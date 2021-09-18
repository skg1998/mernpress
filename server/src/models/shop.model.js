const mongoose = require('mongoose');
const slugify = require('slugify');

const ShopSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "please add a name of Store"],
        unique: true,
        trim: true,
        maxLength: [50, "Name can not be more than 50 character"]
    },
    image: {
        data: String,
        cloudnaryId: String
    },
    slug: String,
    description: {
        type: String,
        required: [true, "please add a description"],
        maxLength: [500, "Description can not be more than 500 character"]
    },
    admin: {
        type: mongoose.Schema.ObjectId,
        ref: 'Admin',
        required: true
    }
})

//create bootcamp slug from the name
ShopSchema.pre('save', function (next) {
    this.slug = slugify(this.name, { lower: true })
    next();
})

module.exports = mongoose.model('Shop', ShopSchema);