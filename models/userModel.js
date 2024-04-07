import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcrypt";
import JWT from "jsonwebtoken";

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
      minlength: [6, "the length of the password should be greater than 6"],
    },
    location: {
      type: String,
      default: "noida",
    },
  },
  { timestamps: true }
);

// Middleware for hashing the password
useSchema.pre("save", async function () {
  const salt = await bcrypt.genSalt(10);

  // Hash the password with the salt
  this.password = await bcrypt.hash(this.password, salt);
});

//compare password method in the jobportal
useSchema.methods.comparepassword = async function (password) {
  const isMatch = await bcrypt.compare(password, this.password);
  return isMatch;
};

useSchema.methods.createJWT = function () {
  return JWT.sign({ userID: this._id }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });
};

export default mongoose.model("user", useSchema);
