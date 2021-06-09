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


const html = `
<html lang="en">
<head>
    <meta http-equiv="Content-Security-Policy" content="default-src *; style-src 'self' 'unsafe-inline'; script-src 'self' 'unsafe-inline' 'unsafe-eval' http://www.google.com">
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>VisBlue Services App</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div id="menu">
        <img src="graphics/Visblue logo.png" alt="VisBlue logo">
        <h2>VisBlue service app</h2>
        <!--
        <button id="menuBtn">knap 1</button>
        <button id="menuBtn">knap 2</button>
        <button id="menuBtn">knap 3</button> 
        -->
    </div>

    <hr>

    <main>
    <div id="data">
        <p>Her skal data vises</p>
    </div>
    </main>
    
    <script src="script.js"></script>
</body>
</html>`;




app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
//app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

app.get('/', (req, res) => {
  
  res.sendFile(__filename, index.html);
});

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
    message: err.message,
    error: err
  });
});

module.exports = app;

