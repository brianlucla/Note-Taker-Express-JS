const express = require('express');
const router = express.Router();
const notesClass = require('../db/db.js');

router.get('/notes', (req, res) => {
  // store notes and return them
  notesClass.getNotes().then((notes) =>{
    return res.json(notes);
  });
})

router.post('/notes', (req, res) =>{
  console.log(req.body);
  notesClass.addNote(req.body).then((err, notes)=>{
    res.json(notes);
  })
})

module.exports = router;