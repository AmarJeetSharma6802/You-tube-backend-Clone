import { User } from "../models/user.model.js";
import { ApiError } from "../utils/ApiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import jwt from 'jsonwebtoken'
export const verifyJWT = asyncHandler(async (req, _, next) => {
  try {
    const token = req.cookies?.accessToken || req.header("Authorization")?.replace("Bearer ", "");
    // console.log('co ',req.cookies) 
    if (!token) {
      throw new ApiError(401, "Unauthorized request");   
    }        

    const decodedToken = jwt.verify(token,  process.env.ACCESS_TOKEN_SECRET);
// console.log("decodedToken",decodedToken)
    const user = await User.findById(decodedToken?._id).select("-password -refreshToken");
  
    if (!user) {
      throw new ApiError(401, "Invalid Access Token");
    }
      
    req.user = user;
    // console.log("user",user)
    next();
  } catch (error) {
    throw new ApiError(401, error?.message || "Invalid access token");
  }  
});       
 
// यह लाइन कुकीज़ से accessToken नाम की कुकी को प्राप्त करने की कोशिश कर रही है।

// ?. (ऑप्शनल चेनिंग) का मतलब है कि अगर req.cookies undefined है, तो यह एरर नहीं फेंकेगा, बल्कि undefined लौटाएगा।

// 2. || (या ऑपरेटर):

// यह एक लॉजिकल या ऑपरेटर है। अगर पहला हिस्सा (req.cookies?.accessToken) undefined या फाल्स (जैसे null, 0, "", आदि) है, तो यह दूसरे हिस्से (req.header("Authorization")?.replace("bearer", "")) की ओर जाएगा।

// 3. req.header("Authorization")?.replace("bearer", ""):

// यह लाइन Authorization हेडर से टोकन प्राप्त करने की कोशिश कर रही है।

// replace("bearer", "") का मतलब है कि अगर हेडर में "Bearer" शब्द है, तो उसे हटा दिया जाएगा। यह आमतौर पर JWT (JSON Web Token) जैसे टोकन के साथ होता है, जहां टोकन के पहले "Bearer" शब्द होता है।

// इस लाइन का उद्देश्य यह सुनिश्चित करना है कि token में एक वैध टोकन हो, चाहे वह कुकीज़ से आए या HTTP हेडर से। यदि दोनों में से कोई भी उपलब्ध नहीं है, तो token undefined हो जाएगा।

// यह प्रक्रिया आमतौर पर ऑथेंटिकेशन और ऑथराइजेशन के लिए उपयोग की जाती है, ताकि यूजर की पहचान और अनुमति की जांच की जा सके।

 
  
// const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET) ka istemal JSON Web Tokens (JWT) ko verify karne ke liye hota hai. Chaliye is line ko detail me samjhte hain:
 
// Kya Karta Hai:

// jwt.verify: Ye method JWT ko verify karta hai. Agar token valid hai aur sahi secret key se sign kiya gaya hai, to ye method token ko decode karta hai aur usse ek JavaScript object me convert karta hai.

// token: Ye variable aapke pass ek JWT ko represent karta hai, jo ki usually client se aata hai (jaise HTTP headers me).

// process.env.ACCESS_TOKEN_SECRET: Ye aapke server environment se secret key ko access kar raha hai, jo ki token ko sign karne ke liye istemal kiya gaya tha. Iska istemal token ki authenticity check karne ke liye hota hai.

