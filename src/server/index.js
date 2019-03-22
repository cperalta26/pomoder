const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const chalk = require('chalk');
const {join} = require('path');

// static middleware - sending distribution files(bundle)
const distFiles = join(__dirname, '../..', 'dist' );
app.use(express.static(distFiles));

// static middleware - sending public files(html, favicon, css)
const publicFiles = join(__dirname, '../..', 'public' );
app.use(express.static(publicFiles));

// logging middleware
const morgan = require('morgan');
app.use(morgan('dev'));

/* handling 404 on the client side */
app.get('*', (_, res) => {
  const html = join(__dirname, '../..', 'public', 'index.html');
  res.sendFile(html);
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
