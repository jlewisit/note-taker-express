// Import dependencies
const express = require('express');
const app = express();

const path = require('path');
const router = require('express').Router();

// GET Route for homepage
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '../public/index.html'))
);

// GET Route for notes
app.get('/', (req, res) =>
    res.sendFile(path.join(__dirname, '../public/notes.html'))
);

// Export
module.exports = router;