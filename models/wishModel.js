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
  eventIdentifier: {
    type:String,
  }
}, {timestamps: true,});

export const Wishes = model("Wishes", wishSchema);