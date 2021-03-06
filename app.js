var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var { log } = require('./common/debug')
var sequelize = require('./config/sequelize')

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var rfs = require('rotating-file-stream')

var app = express();

// env log
if(app.get('env') == 'development') {
  log.info('NODE_ENV[development]')
} else if(app.get('env') == 'production') {
  log.info('NODE_ENV[production]')
} else {
  log.info('NODE_ENV[' + app.get('env'))
}

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// create a rotating write stream
var accessLogStream = rfs.createStream('access.log', {
  interval: '1d', // rotate daily
  path: path.join(__dirname, 'log')
})

//app.use(logger('dev', { stream: accessLogStream }))
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

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
  res.render('error');
});

// mysql orm
sequelize.authenticate()
  .then(function(err) {
    log.info('Connection has been established successfully.')
  })
  .catch(function (err) {
    log.error('Unable to connect to the database:', err)
  })

module.exports = app;