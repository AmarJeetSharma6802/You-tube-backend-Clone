import mongoose, {Schema} from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const videoFileSchema = new Schema({
    public_id: { type: String, required: true },
    url: { type: String, required: true }
}, { _id: false });

const thumbnailSchema = new Schema({
    public_id: { type: String, required: true },
    url: { type: String, required: true }
}, { _id: false });


const videoSchema = new Schema(
    
    {
        videoFile: {
            // type: String, //cloudinary url
            type: videoFileSchema, //cloudinary url
            required: true
        },
        thumbnail: {
            // type: String, //cloudinary url
            type: thumbnailSchema, //cloudinary url
            required: true
        },
        title: {
            type: String, 
            required: true
        },
        description: {
            type: String, 
            required: true
        },
        duration: {
            type: Number, 
            required: true
        },
        views: {
            type: Number,
            default: 0
        },
        isPublished: {
            type: Boolean,
            default: true
        },
        owner: {
            type: Schema.Types.ObjectId,
            ref: "User"
        }
    }
    ,{
        timestamps:true
    }
)

videoSchema.plugin(mongooseAggregatePaginate)

export const Video = mongoose.model('Video', videoSchema);

// videoSchema.plugin(mongooseAggregatePaginate) ka istemal aapke Mongoose schema ko pagination support dene ke liye kiya jata hai, jab aap aggregate queries ka istemal kar rahe hote hain.

// Kya Karta Hai:
// Aggregation: Mongoose me aggregation pipelines ko istemal karke aap complex queries kar sakte hain, jaise filtering, grouping, aur sorting. Ye powerful hota hai jab aapko data ko specific tarike se manipulate karna ho.

// Pagination: mongooseAggregatePaginate plugin ka istemal aapko aggregate queries ke result ko paginate karne ki suvidha deta hai. Iska matlab hai ki aap results ko chhote chhote pages me dikhane ki koshish kar rahe hain, jaise ki 10 results per page.