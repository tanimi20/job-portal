import express from "express";
import dotenv from "dotenv";
import color from "colors";
import "express-async-errors";

import connectDB from "./config/db.js";
import userModel from "./models/userModel.js";
//imports the routes
import testroute from "./routes/testroutes.js";
import authRoute from "./routes/authRoute.js";
import cors from "cors";
import morgan from "morgan";
import middelwares from "./middelwares/middelwares.js";

//config the dotenv
dotenv.config();

//connection
connectDB();

const app = express();
//midelwares
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

//creating the routes
app.use("/api/v1/user", testroute);
app.use("/api/v1/auth", authRoute);

app.use(middelwares);

//here we are making the get method
app.get("/user", (req, res) => {
  res.send("<h1>hi there im making job portal api</h1>");
});

//grtting the enviremental variable from the env file

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(
    `Server started at mode ${process.env.DEV_MODE} in port ${PORT}`.bgCyan
      .white
  );
});
