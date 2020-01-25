const mongoose = require('mongoose');
const debug = require('debug')('upgrade-media:db');

const DB_URI = process.env.DB_URI;

mongoose
  .connect(DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => debug(`Connected to DB: ${DB_URI}`))
  .catch(err => {
    debug(
      `There was an error when trying to connect to the database: ${DB_URI}`
    );
    debug(error);
  });
