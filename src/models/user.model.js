import mongoose, {Schema} from "mongoose";
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true, 
            index: true
        }, 
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true, 
        },
        fullName: {
            type: String,
            required: true,
            trim: true, 
            index: true
        },
        avatar: {
            type: String, // cloudinary url
            required: true,
        },
        coverImage: {
            type: String, // cloudinary url
        },
        watchHistory: [
            {
                type: Schema.Types.ObjectId,
                ref: "Video"
            }
        ],
        password: {
            type: String,
            required: [true, 'Password is required']
        },
        refreshToken: {
            type: String
        }

    },
    {
        timestamps: true 
    }
)

userSchema.pre("save", async function (next) {
    if(!this.isModified("password")) return next();

    this.password = await bcrypt.hash(this.password, 10)
    next()
}) 
 
userSchema.methods.isPasswordCorrect = async function(password){
    return await bcrypt.compare(password, this.password)
}   

userSchema.methods.generateAccessToken = function(){
    return jwt.sign(
        {
            _id: this._id,
            email: this.email,
            username: this.username,
            fullName: this.fullName
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY
        }
    )
}
// In sab fields ka istemal token me isliye hota hai taaki jab bhi aapko user ki identity verify karni ho ya unki information access karni ho, to aap easily kar saken. Ye information aapko application ke context me user ko manage karne me madad karti hai.

userSchema.methods.generateRefreshToken = function(){
    return jwt.sign(
        {
            _id: this._id,
            
        },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn: process.env.REFRESH_TOKEN_EXPIRY
        }
    )
}

export const User = mongoose.model("User", userSchema)


// Ye code ek Mongoose middleware function hai jo userSchema par apply kiya gaya hai. Jab bhi koi document save kiya jata hai, ye function chalata hai. Yahan par kya ho raha hai:

//1. Pre-save Hook: Ye middleware pre("save") event par trigger hota hai, matlab jab document ko save kiya ja raha hota hai.

//2. Password Modification Check: if (!this.isModified("password")) return next(); line check karti hai agar password modify hua hai ya nahi. Agar password nahi badla, to next() function ko call karke aage badh jaata hai.

//3. Password Hashing: Agar password modify hua hai, to bcrypt.hash ka use karke password ko hash karta hai. Ye hashed password fir document me save hota hai.

//4. Next Function: next() ko call karke middleware ko finish karta hai, jisse Mongoose ko batata hai ki wo aage badh sakta hai.