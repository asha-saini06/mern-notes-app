import express from 'express'; 
// const express = require('express'); // Changed to CommonJS syntax

const app = express();

// Endpoint : An endpoint is a combination of a URL and an HTTP method that allows clients to interact with a server.
// Here, we are defining a GET endpoint at the path '/api/notes'
app.get('/api/notes', (req, res) => {
    // send the notes as a response
  res.status(200).send('Notes is working!!');
});

app.post('/api/notes', (req, res) => {
    // handle POST request to create a new note
  res.status(201).json('Note created successfully!');
});

app.put('/api/notes/:id', (req, res) => {
    // handle PUT request to update an existing note
  res.status(200).json('Note updated successfully!');
});

app.delete('/api/notes/:id', (req, res) => {
    // handle DELETE request to delete a note
  res.status(200).json('Note deleted successfully!');
});

// Start the server and listen on port 5001
app.listen(5001, () => {
  console.log('Server is running on PORT: 5001');
});
