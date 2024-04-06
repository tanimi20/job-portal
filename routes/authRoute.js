import express from "express";
import authRegister from "../controllers/authRegister.js";

const router = express.Router();

router.post("/reg", authRegister);

export default router;
