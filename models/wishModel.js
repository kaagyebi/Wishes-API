import { Schema, model } from "mongoose";


const wishSchema = new Schema({
  from: {
    type: String,
    required: true,
  },
  wish: {
    type: String,
    required: true,
  },
  createdAt: {
    type:String,
  }
}, {timestamps: true,});

export const Notes = model("Wish", wishSchema);