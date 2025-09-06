import express from "express";
import {
  getVideoComments,
  addComment,
  updateComment,
  deleteComment,
} from "../controllers/comment.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = express.Router();

// Comment Routes
router.route("/video/:videoId/comments").get(getVideoComments);
router.route("/video/:videoId/comments").post(verifyJWT, addComment);
router.route("/comment/:commentId").patch(verifyJWT, updateComment);
router.route("/comment/:commentId").delete(verifyJWT, deleteComment);

export default router;
