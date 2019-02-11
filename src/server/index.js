const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const path = require('path');
const chalk = require('chalk');

// static middleware - sending html
app.use(express.static(path.join(__dirname, '../..', 'public' )));

// logging middleware 
const morgan = require('morgan');
app.use(morgan('dev'));

// parsing middleware
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// 404 error handling
app.get('*', (req, res, next) => {
  const err = new Error('Page Not Found');
  err.statusCode = 404;
  next(err);
});

// internal error handling 
app.use((err, req, res, next) => {
  // eslint-disable-next-line no-console
  console.error(err);
  // eslint-disable-next-line no-console
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || 'Internal server error.');
});

// starting the server
app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(chalk.cyan.bold(`Listening on port ${port}`));
});