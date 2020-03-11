//Check if we are in production environment
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

//import express
const express = require('express');

//import router file
const indexRouter = require('./routes/index');

//import mongoose
const mongoose = require('mongoose');

//  use express with app
const app = express();

//use express ejs layout
const expressLayouts = require('express-ejs-layouts');

// set our view engine (rending view to the user)
app.set('view engine', 'ejs');

// where will views comes from
app.set('views', __dirname + '/views');

// link express layout, layout will be same for all html components

app.set('layout', 'layouts/layout');

// tell express we will use layouts
app.use(expressLayouts);

// where public files will go (html, css and js)
app.use(express.static('public'));

//setup datanase connection
mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true
});
const db = mongoose.connection;
// show error if not connect to database
db.on('error', error => console.error(error));

// show if connected
db.once('open', () => console.log('Connected to Mongoose'));

// port for listening with environment variable and
//set 3000 to default

// tell which file use for route
app.use('/', indexRouter);

app.listen(process.env.PORT || 3000);
