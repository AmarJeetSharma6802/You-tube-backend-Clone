// import mongoose from "mongoose";
// import { DB_NAME } from "./constants";

import connectDB from "./db/indexDb.js";
import dotenv from "dotenv"
import {app} from './app.js'

dotenv.config({
    path: './.env'
})

connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`⚙️  Server is running at port : ${process.env.PORT}`);
    })
})
.catch((err) => {
    console.log("MONGO db connection failed !!! ", err);
}) 






// first methods

// import express from 'express'
// const app = express()
// (async ()=>{
//     try {
//      await  mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//      app.on("error",(error)=>{
//         console.log("ERRR", error)
//         throw error
//      })
//      app.listen(process.env.PORT,()=>{
//         console.log(`App iss listening on port ${process.env.PORT}`)
//      })
//     } catch (error) {
//         console.error("ERROR",error)
//         throw err
//     }
// })()

// Backend me, "app.on" ek event listener ko define karta hai jo kisi specific event ka response handle karta hai. Ye JavaScript frameworks jaise Node.js me commonly use hota hai. Jab koi specific event trigger hota hai (jaise HTTP request ya user action), "app.on" method us event ke liye ek callback function ko execute karta hai. Iska use server-side logic ko define karne, events ko handle karne, aur responses generate karne ke liye hota hai. Yadi aap web server ya application server develop kar rahe hain, to "app.on" aapko events ko efficiently manage karne me madad karta hai.