// Import dependencies
const express = require('express');
const path = require('path');
const app = express();
const routes = require('./routes/html-routes')

const api = require('./public/assets/js/index.js');

// PORT
const PORT = process.env.PORT || 3001;

// Listener
app.listen(PORT, () => {
console.log(`App is running on PORT: ${PORT}`);
});

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/api', api);

app.use(express.static('public'));



app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);