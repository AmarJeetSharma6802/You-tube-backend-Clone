import mongoose from "mongoose";
import { Comment } from "../models/comment.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import {Like} from "../models/like.model.js"

const getVideoComments = asyncHandler(async (req, res) => {
  //TODO: get all comments for a video
  const { videoId } = req.params;
  const { page = 1, limit = 10 } = req.query;

  const options = {
    page: parseInt(page),
    limit: parseInt(limit),
  };
  const comments = await Comment.find({ video: videoId })
    .limit(options.limit)
    .skip((options.page - 1) * options.limit)
    // .populate('likedBy')
    .populate("owner", "username email")
    .exec();

    // like count 
  let commentsWithLikes = [];

  for (let comment of comments) {
    const likesCount = await Like.countDocuments({ comment: comment._id });

    commentsWithLikes.push({
      ...comment.toObject(),
      likesCount,
    });
  }

  res.status(200).json(new ApiResponse(200, commentsWithLikes, "Comments fetched successfully"));
});

const addComment = asyncHandler(async (req, res) => {
  // TODO: add a comment to a video

  const { videoId } = req.params;
  const { content } = req.body;

  const newComment = await Comment.create({
    video: videoId,
    content: content,
    owner: req.user._id,
  });

  res.status(201).json(new ApiResponse(newComment));
});

const updateComment = asyncHandler(async (req, res) => {
  
  const { commentId } = req.params; // Assume the comment ID is passed in the URL
  const { content } = req.body;

  // Find and update the comment
  const updatedComment = await Comment.findByIdAndUpdate(
    commentId,
    { content },
    { new: true, runValidators: true } // Return the updated document
  );

  if (!updatedComment) {
    throw new ApiError(404, "Comment not found");
  }

  res.status(200).json(new ApiResponse(updatedComment));
});

const deleteComment = asyncHandler(async (req, res) => {
  // TODO: delete a comment
  const { commentId } = req.params;

  // Find and delete the comment
  const deletedComment = await Comment.findByIdAndDelete(commentId);

  if (!deletedComment) {
    throw new ApiError(404, "Comment not found");
  }

  res.status(204).send(); // No content to send back
});

export { getVideoComments, addComment, updateComment, deleteComment };
