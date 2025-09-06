import { Like } from "../models/like.model.js";
import { Video } from "../models/video.model.js";
import { Comment } from "../models/comment.model.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { ApiError } from "../utils/ApiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { isValidObjectId } from "mongoose";

const toggleVideoLike = asyncHandler(async (req, res) => {
  const { videoId } = req.params;
  const userId = req.user._id;

  if (!isValidObjectId(videoId)) {
    return res
      .status(400)
      .json(new ApiResponse(400, {}, "Invalid videoId"));
  }

  // Check if video exists
  const video = await Video.findById(videoId);
  if (!video) {
    throw new ApiError(404, "Video not found");
  }

  // check liked
  const existingLike = await Like.findOne({ video: videoId, likedBy: userId });

  if (existingLike) {
    // Unlike
    await existingLike.deleteOne(); // jab user ko unlike karn ho to iska use  karte hain
    return res
      .status(200)
      .json(new ApiResponse(200, {}, "Video unliked successfully"));
  }
  const like = await Like.create({ video: videoId, likedBy: userId });

  return res
    .status(201)
    .json(new ApiResponse(201, like, "Video liked successfully"));
});

const toggleCommentLike = asyncHandler(async (req, res) => {
  const { commentId } = req.params;
  const userId = req.user._id;

  if (!isValidObjectId(commentId)) {
    return res
      .status(400)
      .json(new ApiResponse(400, {}, "Invalid commentId"));
  }

  // Check if comment exists
  const comment = await Comment.findById(commentId);
  if (!comment) {
    throw new ApiError(404, "Comment not found");
  }

  const existingLike = await Like.findOne({
    comment: commentId,
    likedBy: userId,
  }); //likeByiD ka matlab konse user ne like kiya hain aur ye user se ref ke id le rha hain

  if (existingLike) {
    // Unlike
    await existingLike.deleteOne();
    return res
      .status(200)
      .json(new ApiResponse(200, {}, "Comment unliked successfully"));
  }

  const like = await Like.create({ comment: commentId, likedBy: userId });
  return res
    .status(201)
    .json(new ApiResponse(201, like, "Comment liked successfully"));
});

const getVideoLikes = asyncHandler(async (req, res) => {
  const { videoId } = req.params;

  if (!isValidObjectId(videoId)) {
    return res
      .status(400)
      .json(new ApiResponse(400, {}, "Invalid videoId"));
  }

  const likesCount = await Like.countDocuments({ video: videoId });
  return res
    .status(200)
    .json(new ApiResponse(200, { likesCount }, "Video likes count fetched"));
});

const getCommentLikes = asyncHandler(async (req, res) => {
  const { commentId } = req.params;

  if (!isValidObjectId(commentId)) {
    return res
      .status(400)
      .json(new ApiResponse(400, {}, "Invalid commentId"));
  }

  const likesCount = await Like.countDocuments({ comment: commentId });
  return res
    .status(200)
    .json(new ApiResponse(200, { likesCount }, "Comment likes count fetched"));
});
export {
   toggleVideoLike,
   toggleCommentLike, 
   getVideoLikes,
    getCommentLikes 
  };
