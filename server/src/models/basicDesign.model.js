const mongoose = require('mongoose');

let Images = new mongoose.Schema({
    targetPath: {
        type: String
    },
    flag: {
        type: Boolean,
        default: false
    },
    url: { type: String, required: true }
});

const TitleSchema = new mongoose.Schema({
    tile: {
        type: String,
        trim: true,
        required: 'Name is required'
    },
    logo: { type: String, required: true },
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
    images: Images,
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
    images: Images,
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

