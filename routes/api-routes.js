// Import dependencies
const express = require('express');
const app = express();

const path = require('path');
const router = require('express').Router();

// Get Route
router.get('/notes', (req, res) => {
    save.getNotes()
    .then(parsedNotes) => {
        return res.json(parsedNotes);
    })
.catch((err) => res.status(500).json(err));
})




// Export
module.exports = router;