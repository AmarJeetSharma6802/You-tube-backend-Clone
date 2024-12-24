import {upload} from '../middlewares/multer.middlewares.js'
import {verifyJWT} from '../middlewares/auth.middleware.js'
import {getAllVideos,
    publishAVideo,getVideoById,updateVideo} from '../controllers/video.controllers.js'
import { Router } from 'express'

const router =Router()
router.use(verifyJWT); // Apply verifyJWT middleware to all routes in this file

// router.route("/").get(getAllVideos)
// router.route("/publishVideo").post(
//     upload.fields([
//         {name: 'video', maxCount: 1},
//         {name:"thumbnail",maxCount:1}
//     ]),
//     publishAVideo
// )

router
    .route("/")
    .get(getAllVideos)
    .post(
        upload.fields([
            {
                name: "videoFile",
                maxCount: 1,
            },
            {
                name: "thumbnail",
                maxCount: 1,
            },
            
        ]),
        publishAVideo
    );
    router.route("/:videoId").get(getVideoById)

   router.route('/update/:videoId').patch(
  upload.single('thumbnail'),  
  updateVideo                 
);
export default router    