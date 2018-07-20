// Get dependencies
const express = require('express'),
      path = require('path'),
      http = require('http'),
      bodyParser = require('body-parser'),
      compression = require('compression'),
      app = express();

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));

// compress all responses
app.use(compression());

app.get('/sitemap.xml', (req, res) => {
  res.redirect('https://sipi-rest-api.herokuapp.com/retrieve/sitemap.xml');
});

// Catch all other routes and return the index file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || '3000';
app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => console.log(`API running on localhost:${port}`));