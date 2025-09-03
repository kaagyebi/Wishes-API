import { v2 as cloudinary } from "cloudinary";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import dotenv from "dotenv";

dotenv.config();

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Setup Multer Storage
const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "wishes_api_uploads", // organize files under one folder
    allowed_formats: ["jpg", "png", "jpeg", "pdf"], // restrict formats
    // transformation: [{ width: 800, height: 800, crop: "limit" }], // optional resize
  },
});

export { cloudinary, storage };
