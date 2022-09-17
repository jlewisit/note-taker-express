// Import dependencies
const express = require('express');
const path = require('path');
const api = require('./routes/api-routes');
const htmlRoutes = require('./routes/html-routes');

// Instantiate Server
const PORT = process.env.PORT || 3001;
const app = express();

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({extended: true}));
// Middleware enabling clients to download static files from the server
app.use(express.static('public'));

// Syntax: app.use(path, callback)
app.use('/api', api);
app.use('/', htmlRoutes)

  // LISTEN for requests
  app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);

