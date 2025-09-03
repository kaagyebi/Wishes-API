import express from "express";
import dotenv from "dotenv"
import mongoose from "mongoose";
import wishRouter from "./routes/wishRoute.js";
import pictureRouter from "./routes/pictureRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5200;

// Middleware
app.use(express.json());

// Routes
app.use("/api/wishes", wishRouter);
app.use("/api/pictures", pictureRouter);

// MongoDb Setup
const MONGO_URL = process.env.MONGO_URI;
await mongoose.connect(MONGO_URL);
console.log("Connected to MongoDB");

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
