import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser';
const app = express()

app.use(cors({
    origin: "*" ,
    Credential:true
}))
app.use(express.json({limit:"16kb"})) 
app.use(express.urlencoded({extended:true , limit:"16kb"}))
app.use(express.static("public"))
app.use(cookieParser())

// routes import
import userRoutes from './routes/user.routes.js'
import VideoRoutes from './routes/video.router.js'
import LikeRoutes from "./routes/like.routes.js"

//routes declaration
app.use("/api/v1/users", userRoutes)
app.use("/api/v1/videos",VideoRoutes)
app.use("/api/v1/videos",LikeRoutes)
// http://Localhost:8000/api/v1/users/register esa route hum bana rhe hain

export {app} 
 