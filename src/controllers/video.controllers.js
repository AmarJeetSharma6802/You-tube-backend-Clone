import { isValidObjectId } from "mongoose";
import { User } from "../models/user.model.js";
import { Video } from "../models/video.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";


const getAllVideos =asyncHandler(async(req,res)=>{
    const{page = 1, limit = 10, query, sortBy, sortType,userId}= req.query;

    const pipeline =[]
     
    if(query){
        pipeline.push({
            $search:{
                indexName:"search-videos",
                // search:query,
                // path:"title",
                // wildcard:"*"
                text:{
                    query:query,
                    path:["title","description"]
                }
            }
        })
    }
    if(userId){
        if(!isValidObjectId(userId)){
            throw new ApiError(400,"Invalid user id")
        }
    }

    pipeline.push({$match:{isPublished:true}})

    if(sortBy && sortType){
        pipeline.push({
            $sort:{
                [sortBy]:sortType === "asc" ? 1: -1 

            }
        })
    }
    else{
        pipeline.push({$sort:{createdAt :-1}})
    }

    const options = {
        page:parseInt(page ,10),
        limit:parseInt(limit,10)
    }
    const videoAggregate = Video.aggregatePaginate(videoAggregate ,options)
    return res.status(200)
    .json(new ApiResponse(200,Video,"Videos Fetched successfully"))
})

const publishAVideo = asyncHandler(async (req, res) => {
    const { title, description } = req.body;

    if (!title || !description) {
        throw new ApiError(400, "All fields are required");
    }

    const videoFileLocalPath = req.files?.videoFile[0].path;
    const thumbnailLocalPath = req.files?.thumbnail[0].path;
    console.log("videoFileLocalPath",videoFileLocalPath)
    console.log("thumbnailLocalPath",thumbnailLocalPath)

    if (!videoFileLocalPath) {
        throw new ApiError(400, "Video file is required");
    }

    if (!thumbnailLocalPath) {
        throw new ApiError(400, "Thumbnail file is required");
    }

    const videoFile = await uploadOnCloudinary(videoFileLocalPath);
    const thumbnail = await uploadOnCloudinary(thumbnailLocalPath);
console.log("videoFile", videoFile)
    if (!videoFile) {
        throw new ApiError(400, "Video file not found");
    } 
    if (!thumbnail) {
        throw new ApiError(400, "Thumbnail file not found");
    } 

    const video = await Video.create({
        title,
        description,
        duration: videoFile.duration,
        videoFile: {
            public_id: videoFile.public_id,
            url: videoFile.url,
        },
        thumbnail: { 
            public_id: thumbnail.public_id,
            url: thumbnail.url,
        },
        owner: req.user?._id,
        isPublished: true
    });

   

    const videoUploaded = await Video.findById(video._id);
    console.log("videoUploaded",videoUploaded)
    if (!videoUploaded) {
        throw new ApiError(500, "Video upload failed. Please try again!");
    }

    return res.status(200)
        .json(new ApiResponse(200, video, "Video uploaded successfully"));
});

const getVideoById = asyncHandler(async (req, res) => {
    const { videoId } = req.params;

    // console.log("videoId:", videoId);  

    if (!isValidObjectId(videoId)) {
        throw new ApiError(400, "Invalid video ID");
    }

    const video = await Video.findById(videoId).populate('owner', 'name email');

    if (!video) {
        throw new ApiError(404, "Video not found");
    }

    return res.status(200).json(new ApiResponse(200, video, "Video fetched successfully"));
});



const updateVideo = asyncHandler(async (req, res) => {
    const { videoId } = req.params;
    const { title, description } = req.body;
  
    // Validate video ID
    if (!isValidObjectId(videoId)) {
      throw new ApiError(400, 'Invalid video id');
    }
  
    // Find the video to update
    const video = await Video.findById(videoId);
    if (!video) {
      throw new ApiError(404, 'Video not found');
    }
  
    // Update the fields if provided
    if (title) video.title = title;
    if (description) video.description = description;
  
    // Handle thumbnail update if provided
    if (req.file?.path) {
      const thumbnailLocalPath = req.file.path;
      const thumbnail = await uploadOnCloudinary(thumbnailLocalPath);
      if (thumbnail) {
        video.thumbnail = {
          public_id: thumbnail.public_id,
          url: thumbnail.url,
        };
      }
    }
  
    // Save the updated video
    await video.save();
  
    return res.status(200).json(new ApiResponse(200, video, 'Video updated successfully'));
  });
  


export{
    getAllVideos,
    publishAVideo,
    getVideoById,
    updateVideo
}