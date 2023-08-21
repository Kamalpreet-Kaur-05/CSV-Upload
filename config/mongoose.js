//require the library
const mongoose = require('mongoose');
require('dotenv').config()
//connect to the db
mongoose.connect(`mongodb://127.0.0.1:27017/CSV-Upload`);
//require connection
const db = mongoose.connection;

// if error
db.on('error', console.error.bind(console, 'Error Connecting to Database!'));
//if server up then print this meassage
db.once('open', function() {
  console.log("Successfully Connected to Database :: MongoDB");
});

module.exports = db;

