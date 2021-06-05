const mongoose = require('mongoose');

const TitleSchema = new mongoose.Schema({
    tile: {
        type: String,
        trim: true,
        required: 'Name is required'
    },
    logo: {
        data: String,
    },
    updated: Date,
    created: {
        type: Date,
        default: Date.now
    }
})

const HeaderSchema = new mongoose.Schema({
    route: {},
    flag: {
        type: Boolean,
        default: false
    },
    updated: Date,
    created: {
        type: Date,
        default: Date.now
    }
})

const SlidderSchema = new mongoose.Schema({
    images: [Images],

    flag: {
        type: Boolean,
        default: false
    },
    updated: Date,

    created: {
        type: Date,
        default: Date.now
    }
})

const BannerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "name is required"]
    },
    images: [Images],
    flag: {
        type: Boolean,
        default: false
    },
    updated: Date,
    created: {
        type: Date,
        default: Date.now
    }
})

const Title = mongoose.model('Title', TitleSchema);
const Header = mongoose.model('Header', HeaderSchema);
const Slidder = mongoose.model('Slidder', SlidderSchema);
const Banner = mongoose.model('Banner', BannerSchema);

module.exports = { Title, Header, Slidder, Banner }

