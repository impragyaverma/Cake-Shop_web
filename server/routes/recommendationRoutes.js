import express from "express";
import { getRecommendations } from "../controllers/recommendationController.js";
import { protect } from "../middleware/authMiddleware.js"; // if using auth

const router = express.Router();

router.get("/", protect, getRecommendations); // protect middleware if authentication is required

export default router;
