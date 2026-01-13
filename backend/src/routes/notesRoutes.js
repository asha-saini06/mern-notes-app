import express from "express";
import { createNote, updateNote, deleteNote, getAllNotes } from "../controllers/notesController.js";

const router = express.Router();

// Define routes for notes
router.get("/", getAllNotes);
router.post("/", createNote);
router.put("/:id", updateNote);
router.delete("/:id", deleteNote);

export default router;

