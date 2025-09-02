import {Wishes} from "../models/wishesModel.js";

// Create a new note
export const createWish = async (req, res) => {
    try {
       
        const { senderName, message, eventIdentifier } = req.body;

        // Use the new Wishes model
        const newWish = new Wishes({ senderName, message, eventIdentifier });
        await newWish.save();
        res.status(201).json(newWish);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update an existing note
export const updateWish = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedNote = await Wishes.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedNote) {
            return res.status(404).json({ message: "Wish not found" });
        }
        res.status(200).json(updatedNote);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Delete an existing note
export const deleteWish = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedNote = await Wishes.findByIdAndDelete(id);
        if (!deletedNote) {
            return res.status(404).json({ message: "Note not found" });
        }
        res.status(200).json({ message: "Note deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get all notes
export const getAllWishes = async (req, res) => {
    try {
        const notes = await Wishes.find();
        res.status(200).json(notes);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get a specific note by ID
export const getWishById = async (req, res) => {
    try {
        const { id } = req.params;
        const note = await Wishes.findById(id);
        if (!note) {return res.status(404).json({ message: "Note not found" });
        } res.status(200).json(note);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};