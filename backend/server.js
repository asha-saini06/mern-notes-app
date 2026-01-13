import express from 'express'; 
// const express = require('express'); // Changed to CommonJS syntax
import notesRoutes from './src/routes/notesRoutes.js';

const app = express();

app.use("/api/notes", notesRoutes); // Use the notes routes for any requests to /api/notes

// Start the server and listen on port 5001
app.listen(5001, () => {
  console.log('Server is running on PORT: 5001');
});
