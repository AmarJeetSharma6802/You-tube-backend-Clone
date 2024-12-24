import { v2 as cloudinary } from "cloudinary";
import fs from 'fs'

cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
    api_key: process.env.CLOUDINARY_API_KEY, 
    api_secret: process.env.CLOUDINARY_API_SECRET 
});


const uploadOnCloudinary = async (localFilePath) => {
    try {
        if (!localFilePath) return null
        //upload the file on cloudinary
        const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto"
        })
        // file has been uploaded successfull
        // console.log("file is uploaded on cloudinary ", response.url);
        fs.unlinkSync(localFilePath)

        return response;  
    } catch (error) {
        fs.unlinkSync(localFilePath) // remove the locally saved temporary file as the upload operation got failed
        return null; 
    }
}

export {uploadOnCloudinary}

// localFilePath ko aapke local system me file ke specific location ko represent karne ke liye use kiya jata hai. Jab aap kisi file ko Cloudinary par upload karte ho, to sabse pehle aapko us file ka path dena padta hai, jisse Cloudinary us file ko access karke upload process complete kar sake.

// Aapke code me localFilePath wo argument hai jo uploadOnCloudinary function ko diya jata hai, taaki ye function us file ko pehle Cloudinary par upload kare, aur phir local system se us temporary file ko delete kar de (fs.unlinkSync(localFilePath)).