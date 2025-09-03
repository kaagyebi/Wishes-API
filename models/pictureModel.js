import { Schema, model } from "mongoose";

const pictureSchema = new Schema({
    image: {
        type: String, 
        required: true,
    },
    public_id: {
        type: String, // Cloudinary public_id for management
    },
}, { timestamps: true });

export const Picture = model("Picture", pictureSchema);
