const express = require('express');
const path = require('path');
const app = express();
const api = require('./Develop/public/assets/js/index.js');


app.listen("3001", () =>
console.log(`App is running now`)
);

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/api', api);

app.use(express.static('public'));

// GET Route for homepage
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, './Develop/public/index.html'))
);

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);