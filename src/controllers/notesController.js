import Note from "../model/NotesDB.js"; 

// To get the Notes
export async function  getNotes( _, res){
    try {
        const notes = await Note.find().sort({createdAt: -1});
        res.status(200).json(notes);
    } catch (error) {
        console.error("You have error in the getNotes Controller!!!!:", error);
        res.status(500).json({message: "Internal Server Error" });
    }  
};

//To get Note by ID
export async function getNoteById(req, res) {
    try {
        const notesbyID = await Note.findById(req.params.id);
        if(!notesbyID) return res.status(404).json({message:"Note was not found!"});
        res.status(200).json(notesbyID);
    } catch (error) {
         console.error("You have error in the getNoteById Controller!!!!:", error);
        res.status(500).json({message: "Internal Server Error" });
    }
}

// To create a Note
export async function createNotes  (req, res){
    try{
        const { title, content } = req.body;
        const note = new Note({title, content });
        const SavedNote = await note.save();
        res.status(201).json({SavedNote});
    }catch(error){
        console.error("You have error in the createNotes Controller!!!!:", error);
        res.status(500).json({message: "Internal Server Error" });
    }

};
 
// To update a Note
export async function updateNotes (req, res) {
    try {
        const {title,content} = req.body;
        const UpdatedNote = await Note.findByIdAndUpdate(req.params.id, {title,content},  {
            new:true
        });
        res.status(201).json({UpdatedNote});
        if(!UpdatedNote){
            return res.status(404).json({message:"Note was not found!"});
        }
        
    } catch (error) {
         console.error("You have error in the updateNotes Controller!!!!:", error);
        res.status(500).json({message: "Internal Server Error" });
    }
};

// To delete a Note
export async function deleteNotes  (req, res)  {
try {
    const deleteNote = await Note.findByIdAndDelete(req.params.id);
    if(!deleteNote) return res.status(404).json({message:"Note was not found!"});
    res.status(200).json({message:"Note deleted successfully!"});
} catch (error) {
     console.error("You have error in the deleteNotes Controller!!!!:", error);
        res.status(500).json({message: "Internal Server Error" });
    }
};