import express from "express";
import userAuth from "../middelwares/authMiddelware.js";
import { createJobController } from "../controllers/jobsController.js";
const router = express.Router();

router.post("/create-job", userAuth, createJobController);

export default router;
