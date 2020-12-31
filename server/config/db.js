const Mongoose = require('mongoose');
const debug = require('debug')('myapp:db');
const config = require('./config');

// Use native ES6 promises
Mongoose.Promise = global.Promise;

// Exit application on error
Mongoose.connection.on('error', () => {
  debug(`MongoDB connection error ${config.mongoUri} \nPlease make sure MongoDB is running.`);
  process.exit();
});

Mongoose.connection.once('open', () => {
  debug('MongoDB connection with database succeeded.');
});

process.on('SIGINT', () => {
  db.close(() => {
    debug('MongoDB connection disconnected through app termination.');
    process.exit();
  });
});

/**
 * Connect to mongo db
 * @returns {object} Mongoose connection
 * @public
 */
const connectDB = () => {
    Mongoose.connect(config.development.database.url, {useUnifiedTopology: true, useNewUrlParser: true , useCreateIndex:true})
    .then(() => console.log('mongoDB connected...'));
    return Mongoose.connection;
}
module.exports = connectDB;
