import express from 'express'; 
// const express = require('express'); // Changed to CommonJS syntax
import notesRoutes from './routes/notesRoutes.js';
import { connectDB } from './config/db.js';
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables from .env file

const app = express(); // Initialize Express app
const PORT = process.env.PORT || 5001; // Use PORT from environment variables or default to 5001

connectDB(); // Connect to the database

app.use("/api/notes", notesRoutes); // Use the notes routes for any requests to /api/notes

// Start the server and listen on port
app.listen(PORT, () => {
  console.log('Server is running on PORT:', PORT);
});
