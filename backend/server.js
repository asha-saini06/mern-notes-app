import express from 'express'; 
// const express = require('express'); // Changed to CommonJS syntax

const app = express();

app.get('/api/notes', (req, res) => {
    // send the notes as a response
  res.send('Notes is working');
});

app.post('/api/notes', (req, res) => {
    // add a new note
  res.send('Add a new note');
});

app.listen(5001, () => {
  console.log('Server is running on port 5001');
});
