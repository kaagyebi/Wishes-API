import express from "express";
import multer from "multer";
import { storage } from "../config/cloudinary.js";
import { uploadPicture, getAllPictures, getPictureById, deletePicture } from "../controllers/pictureController.js";

const pictureRouter = express.Router();
const upload = multer({ storage });


// Upload a picture
pictureRouter.post("/upload", upload.single("image"), uploadPicture);

// Get all pictures
pictureRouter.get("/", getAllPictures);

// Get a specific picture by ID
pictureRouter.get("/:id", getPictureById);

// Delete a picture
pictureRouter.delete("/:id", deletePicture);

export default pictureRouter;
