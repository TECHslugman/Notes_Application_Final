import express from 'express';
import { createNotes, deleteNotes, getNotes, updateNotes } from '../controllers/notesController.js';
const router = express.Router();
//To get notes 
router.get('/get', getNotes);

//To create a note
router.post('/', createNotes);

//To update a note
router.put('/:id',updateNotes);

//To delete a note
router.delete('/:id',deleteNotes);

export default router;