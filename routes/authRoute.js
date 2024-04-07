import express from "express";
import { authRegister, authLoginUser } from "../controllers/authRegister.js";

const router = express.Router();

router.post("/reg", authRegister);
//login route
router.post("/login-post", authLoginUser);

export default router;
