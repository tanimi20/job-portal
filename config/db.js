import { mongoose } from "mongoose";
import colors from "colors";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL);
    console.log(`connected the database ${mongoose.connection.host}`);
  } catch (error) {
    console.log(`mongoose error ${error}`.bgRed.white);
  }
};

export default connectDB;
