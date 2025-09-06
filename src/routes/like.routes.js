import express from "express";
import {
  toggleVideoLike,
  toggleCommentLike,
  getVideoLikes,
  getCommentLikes,
} from "../controllers/like.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = express.Router();

//  Video Like Routes
router.post("/video/:videoId/toggle", verifyJWT, toggleVideoLike);
router.get("/video/:videoId/likes", getVideoLikes);

//  Comment Like Routes
router.post("/comment/:commentId/toggle", verifyJWT, toggleCommentLike);
router.get("/comment/:commentId/likes", getCommentLikes);

export default router;

// Like/Unlike Comment (Toggle)
// POST /api/likes/video/66cfcf23c88d0a1a2833b981/toggle
// Authorization: Bearer <token> 


