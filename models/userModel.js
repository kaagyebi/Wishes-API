import { Schema, model } from "mongoose";

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  confirmPassword: {
    type: String,
    required: true,
  },
  orgainzerNumber: {
    type: String,
    required: true,
  },
  event: {
    type: String,
    required: true,
  },
  role: {
    enum: ["guest", "admin", "organizer"],
    default: "user",
  },
  profile: {
    image: {
      type: String,
      required: true,
    },
  }
});

const User = model("User", userSchema);

export default User;