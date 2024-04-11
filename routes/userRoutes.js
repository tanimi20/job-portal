import express from "express";
import userAuth from "../middelwares/authMiddelware.js";
import { updateUser } from "../controllers/userController.js";

const router = express.Router();

//routes

//update user || PUT
router.put("/update-user", userAuth, updateUser);
export default router;
