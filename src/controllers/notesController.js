
// To get the Notes
export const getNotes = (req, res) => {
  res.status(200).send('You fetched your notes!');
};

// To create a Note
export const createNotes = (req, res) => {
  res.status(201).send('You created a note!');
};

// To update a Note
export const updateNotes = (req, res) => {
res.status(200).json({
    message: `You updated the note with id ${req.params.id}`
   }); 
};

// To delete a Note
export const deleteNotes = (req, res) => {
res.status(200).json({
    message: `You deleted the note with id ${req.params.id}`
   }); 
};