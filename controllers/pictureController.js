import { Picture } from "../models/pictureModel.js";
import { cloudinary } from "../config/cloudinary.js";

// Upload picture
const uploadPicture = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    const picture = await Picture.create({
      image: req.file.path,        // Cloudinary secure_url
      public_id: req.file.filename // Cloudinary public_id
    });

    res.status(201).json(picture);
  } catch (error) {
    console.error("Upload Error:", error);
    res.status(500).json({ message: "Image upload failed" });
  }
};

// Get all pictures
const getAllPictures = async (req, res) => {
  try {
    const pictures = await Picture.find();
    res.status(200).json(pictures);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get one picture by ID
const getPictureById = async (req, res) => {
  try {
    const picture = await Picture.findById(req.params.id);
    if (!picture) return res.status(404).json({ message: "Picture not found" });
    res.status(200).json(picture);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete picture (DB + Cloudinary)
const deletePicture = async (req, res) => {
  try {
    const picture = await Picture.findById(req.params.id);
    if (!picture) return res.status(404).json({ message: "Picture not found" });

    // Delete from Cloudinary
    await cloudinary.uploader.destroy(picture.public_id);

    // Delete from MongoDB
    await picture.deleteOne();

    res.status(200).json({ message: "Picture deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export { uploadPicture, getAllPictures, getPictureById, deletePicture };
