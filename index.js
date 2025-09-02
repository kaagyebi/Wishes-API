import express from "express";
import dotenv from "dotenv"
import mongoose from "mongoose";
import noteRouter from "./routes/wishRoute.js";


dotenv.config();

// Sever Setup & Configuration
const app = express();
const PORT = process.env.PORT || 5100;

// Routes
app.use(express.json());
app.use("/api/wish", wishRouter);

// MongoDb Setup
const MONGO_URL = process.env.MONGO_URI;
await mongoose.connect(MONGO_URL);
console.log("Connected to MongoDB");

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});