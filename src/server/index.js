const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const chalk = require('chalk');
const {join} = require('path');

// static middleware - sending distribution files(bundle, html)
const distFiles = join(__dirname, '../..', 'dist' );
app.use(express.static(distFiles));

// static middleware - sending public files(favicon, css)
const publicFiles = join(__dirname, '../..', 'public' );
app.use(express.static(publicFiles));

// logging middleware 
const morgan = require('morgan');
app.use(morgan('dev'));

// parsing middleware
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

/* handling 404 on the client side - will render the NotFound Component
when a route is not found. By catching all requests and sending each the 
index.html file react-router can implement routing */
app.get('*', (_, res) => {
  const HTML = join(__dirname, '../..', 'dist', 'index.html');
  res.sendFile(HTML);
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
  console.log(chalk.magenta(`Listening on port ${port}`));
});