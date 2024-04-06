import mongoose from "mongoose";
import validator from "validator";

const useSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "name is require"],
    },
    lastname: {
      type: String,
    },
    email: {
      type: String,
      required: [true, "email is requires"],
      unique: true,
      validate: validator.isEmail,
    },
    password: {
      type: String,
      required: [true, "password is required"],
      minlength: [6, "the length of the password should be greater then 6"],
    },
    location: {
      type: String,
      default: "noida",
    },
  },

  { timestamps: true }
);

export default mongoose.model("user", useSchema);
