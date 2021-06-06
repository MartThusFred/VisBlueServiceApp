var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

//view engine setup
//app.set('views', path.join(__dirname, 'views'));
//app.set('view enpm app.jsngine', 'jade');


//const http = require('http')
//const fs = require('fs')
//
//const server = http.createServer((req, res) => {
//  res.writeHead(200, { 'content-type': 'text/html' })
//  fs.createReadStream('./client/index.html').pipe(res)
//})
// hej
//server.listen(process.env.PORT || 3000)



app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
//app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

app.use('/', indexRouter);
app.use('/users', usersRouter);

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
  res.json({
    message: "Halloooooooooooooooooooooooooooooo!!",
    message: err.message,
    error: err
  });
  console.log(err.message);
});

module.exports = app;
