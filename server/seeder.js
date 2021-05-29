const fs = require('fs');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

//Load ENV vars
dotenv.config();

//Load DB
const Product = require('./src/models/product.model');
const Category = require('./src/models/Category.model');
const Admin = require('./src/models/auth.model');

//connect to DB 
mongoose.connect(process.env.MONGO_URI_LOCAL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
})

//Read Json Files
const product = JSON.parse(fs.readFileSync(`${__dirname}/_data/product.json`, 'utf-8'))
const category = JSON.parse(fs.readFileSync(`${__dirname}/_data/category.json`, 'utf-8'))
const admin = JSON.parse(fs.readFileSync(`${__dirname}/_data/admin.json`, 'utf-8'))

//Import into DB
const ImportDB = async () => {
    try {
        await Product.create(product);
        await Category.create(category);
        await Admin.create(admin);
        console.log('Data Imported')
        process.exit();
    } catch (err) {
        console.error(err);
    }
}

//Delete data from DB
const DeleteDB = async () => {
    try {
        await Product.deleteMany();
        await Category.deleteMany();
        await Admin.deleteMany();
        console.log('Data Destroyed...')
        process.exit();
    } catch (err) {
        console.error(err);
    }
}


if (process.argv[2] === '-i') {
    ImportDB();
} else if (process.argv[2] === '-d') {
    DeleteDB();
}