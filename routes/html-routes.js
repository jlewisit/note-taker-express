// Import dependencies
const express = require('express');
const path = require('path');
const router = require('express').Router();

// Instantiate Server
const app = express();

// Get Route for Notes
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'));
})

// Get Route for Root
router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

module.exports = router;