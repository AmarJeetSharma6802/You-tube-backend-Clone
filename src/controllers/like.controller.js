import { Like } from "../models/like.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";


const toggleVideoLike  =asyncHandler (async(req,res)=>{

    const{videoId} = req.params
    const userId = req.user._id

    // check liked
     const existingLike = await Like.findOne({ video: videoId, likedBy: userId });

     if (existingLike) {
    // Unlike
    await existingLike.deleteOne();  // jab user ko unlike karn ho to iska use hota karte hain
    return res
      .status(200)
      .json(new ApiResponse(200, {}, "Video unliked successfully"));
  }
   const like = await Like.create({ video: videoId, likedBy: userId });

   return res
    .status(201)
    .json(new ApiResponse(201, like, "Video liked successfully"));
})