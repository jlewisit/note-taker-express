// Import dependencies
const express = require('express');
const path = require('path');
const router = require('express').Router();
const util = require('util');
const fs = require('fs');
const readFileAsynch = util.promisify(fs.readFile);
const writeFileAsynch = util.promisify(fs.writeFile);
const {v4:uuidv4} = require('uuid');

// Instantiate Server
const app = express();

class Save {
    // Return file from db.json
    read() {
        return readFileAsynch('db/db.json', 'utf8');
    }
    // Stringify new note for writing to the db
    write(note) {
        return writeFileAsynch('db/db.json', JSON.stringify(note));  
    };
    // Retrieve notes returned from the db, then concatinate and parse in an array (creating a new array if none exist)
    getNotes() {
        return this.read().then((notes) => {
            let parsedNotes;
            try {
                parsedNotes = [].concat(JSON.parse(notes));
            } catch (err) {
                parsedNotes = [];
            }
            return parsedNotes;
        })
    };
    // Create new note and include a UUID
    addNote(note) {
        const {title, text} = note;
        if (!title || !text) {
            throw new Error ('Notes cannot be blank.  Please enter text');
        } else {
            const newNote = {title, text, id: uuidv4()};
            return this.getNotes()
            .then((notes) => [...notes, newNote])
            .then((updatedNotes) => this.write(updatedNotes))
            .then(() => newNote);
        }
    }
}

module.exports = new Save();