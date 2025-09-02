import { Router } from "express";
import { createWish, deleteWish, getAllWishes, getWishById, updateWish } from "../controllers/wishControllers.js";

const wishRouter = Router();

// Create a new wish
wishRouter.post("/", createWish);

// Get all wishes
wishRouter.get("/", getAllWishes);

// Get a specific wishes by ID
wishRouter.get("/:id", getWishById);

// Update a wish by ID
wishRouter.patch("/:id", updateWish);

// Delete a wish by ID
wishRouter.delete("/:id", deleteWish);

export default wishRouter;