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
// Syntax: app.use(path, callback)
app.use('/api', api);
app.use('/', htmlRoutes)
// Middleware enabling clients to download static files from the server
app.use(express.static('public'));

// GET Route for homepage
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '../public/index.html'))
);



  // GET route
  app.get('/api/notes'), (req, res) => {
    res.json(notes);
  };

  // route to server to accept data to be used or stored server-side
  app.post('/api/notes', (req, res) => {
    // set id based on what the next index of the array will be
    req.body.id = notes.length.toString();
  })

  // LISTEN for requests
  app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);

// // Listener
// app.listen(PORT, () => {
//   console.log(`App is running on PORT: ${PORT}`);
//   });