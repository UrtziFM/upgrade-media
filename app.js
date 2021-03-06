require('dotenv').config();
require('./config/db');

const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const booksRouter = require('./routes/book');
const songsRouter = require('./routes/songs');
const authorsRouter = require('./routes/authors');

const { headerKeyMiddleware } = require('./middlewares/header-key');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Routes middleware entrypoint
app.use('/', indexRouter);
app.use('/books', [headerKeyMiddleware], booksRouter);
app.use('/songs', [headerKeyMiddleware], songsRouter);
app.use('/authors', [headerKeyMiddleware], authorsRouter);


// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
  const errorMessages = {
    404: 'Page not found',
  };

  res.status(err.status || 500).json(errorMessages[err.status] || err.message);
});

module.exports = app;
