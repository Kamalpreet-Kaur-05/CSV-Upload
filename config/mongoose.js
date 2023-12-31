//require the library
const mongoose = require('mongoose');
const DB = 'mongodb+srv://kkamalpreet847:df1oreNkuZ4O0Oe1@csvproject.si7etoe.mongodb.net/CSV-Upload?retryWrites=true&w=majority';
// mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/csvUploader');

// mongoose.connect(DB, {
// 	useNewUrlParser: true,
// 	useCreateIndex:true,
//  	useUnifiedTopology: true,
// 	useFindAndModify:false
// }).then(() => {
// 	console.log('connection successful');
// }).catch((err) => console.log('no connection',err));
// to run on local system
// const mongoose = require('mongoose');
// require('dotenv').config()

// // mongoose.connect(`mongodb://127.0.0.1:27017/CSV-Upload`);

// const db = mongoose.connection;

// db.on('error', console.error.bind(console, 'Error Connecting to Database!'));

// db.once('open', function() {
//   console.log("Successfully Connected to Database :: MongoDB");
// });

// module.exports = db;

mongoose.connect(DB, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Error in connecting to MongoDB'));

db.once('open', function () {
	console.log('Connected to Database :: Mongodb');
});

module.exports = db;

