require('dotenv').config()
var createError = require('http-errors');
var express = require('express');
var path = require('path');

var mlRouter = require('./routes/ml');
var uploadRouter = require('./routes/upload');
var signmedialibRouter = require('./routes/signml');
var signuploadRouter = require('./routes/signupload');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// index route renders the media library component
app.use('/ml', mlRouter);
// upload route renders the upload library component
app.use('/upload', uploadRouter);

// media lib signing API
app.use('/api/signml',signmedialibRouter);

// upload signing API
app.use('/api/signupload', signuploadRouter);

// static files 
app.use(express.static('public'))

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// module.exports = app;
var port = process.env.PORT || 3000;

app.listen(port, () => console.info(`Server is up on http://localhost:${port}`));

