import express from "express";
import testPostController from "../controllers/testController.js";

const router = express.Router();

router.post("/user-post", testPostController);

export default router;
