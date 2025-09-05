import express from 'express';
import { createNotes, deleteNotes, getNoteById, getNotes, updateNotes } from '../controllers/notesController.js';
const router = express.Router();
//To get notes 
router.get('/', getNotes);

//To get notes by id
router.get('/:id', getNoteById);

//To create a note
router.post('/', createNotes);

//To update a note
router.put('/:id',updateNotes);

//To delete a note
router.delete('/:id',deleteNotes);

export default router;