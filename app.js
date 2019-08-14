const createError = require('http-errors');
const express = require('express');
const session = require('express-session');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const passport = require('passport');
const compression = require('compression');
const media = require('./routes/media');
const admin = require('./routes/admin/index');
const home = require('./routes/index');
const events = require('./routes/events');
const ddPreview = require('./routes/ddPreview');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(compression());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.set('port', process.env.PORT || 3000);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(session({
  secret: 'secret',
  saveUninitialized: true,
  resave: true
}));

app.use(passport.initialize());
app.use(passport.session());

app.use('/', home);
app.use('/events', events);
app.use('/media', media);
app.use('/admin', admin);
app.use('/dd-preview', ddPreview);

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
  console.log("Got error:");
  console.log(err);
  res.render('error');
});

module.exports = app;
