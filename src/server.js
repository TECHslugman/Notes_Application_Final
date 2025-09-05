import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import notesRoutes from '../src/routes/notesRoutes.js';

dotenv.config();
const app = express();

//Middleware
app.use(express.json());

//Routes 
app.use('/api/notes', notesRoutes);

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI, {
  })
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));


const PORT = 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


//