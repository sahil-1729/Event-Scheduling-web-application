require('dotenv').config();

var express = require('express');
// var cookieParser = require('cookie-parser');
var logger = require('morgan');
// var session = require('express-session');

const PORT = process.env.PORT || 3000;

var authRouter = require('./routes/auth');

var app = express();

// app.locals.pluralize = require('pluralize');

app.use(logger('dev'));
app.use(express.json());

app.use('/', authRouter);

app.listen(PORT, ()=>{
    console.log('listening on port 3000');
})