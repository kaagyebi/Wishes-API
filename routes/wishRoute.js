import { Router } from "express";
import { createWish, deleteWish, getAllWishes, getWishById, updateWish } from "../controllers/wishControllers.js";

const wishRouter = Router();

// Create a new note
wishRouter.post("/", createWish);

// Get all notes
wishRouter.get("/", getAllWishes);

// Get a specific note by ID
wishRouter.get("/:id", getWishById);

// Update a note by ID
wishRouter.patch("/:id", updateWish);

// Delete a note by ID
wishRouter.delete("/:id", deleteWish);

export default wishRouter;