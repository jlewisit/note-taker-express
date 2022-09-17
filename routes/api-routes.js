// Import dependencies
const express = require('express');
const path = require('path');
const router = require('express').Router();
const save = require('../db/save-note.js');

// Instantiate Server
const app = express();

// Get route
router.get('/notes', (req, res) => {
    save.getNotes()
    .then((parsedNotes) => {
        return res.json(parsedNotes);
    })
    .catch((err) => res.status(500).json(err));
})

// Post route
router.post('/notes', (req, res) => {
    save.addNote(req.body)
    .then((newNote) => res.json(newNote))
    .catch((err) => res.status(500).json(err));
})

// Delete route
router.delete('/notes/:id', (req, res) => {
    save.removeNote(req.params.id)
    .then(() => res.json({ok: true}))
    .catch((err) => res.status(500).json(err));
})

module.exports = router;