import mongoose ,{Schema} from "mongoose";

const subscriptionSchema = new Schema({
    subscriber: {
        type: Schema.Types.ObjectId, // one who is subscribing
        ref: "User"
    },
    channel: {
        type: Schema.Types.ObjectId, // one to whom 'subscriber' is subscribing
        ref: "User"
    }
}, {timestamps: true})


export const Subscription = mongoose.model("Subscription", subscriptionSchema)
 
// Aapka subscriptionSchema MongoDB me ek subscription relationship ko dikhane ke liye use ho raha hai. Iska maqsad hai:

// Subscriber: Ye field us user ka ID rakhti hai jo kisi channel ko subscribe kar raha hai. Isme ref: "User" use hone se ye confirm hota hai ki ye User model se linked hai.

// Channel: Ye field us user ka ID rakhti hai jise subscribe kiya ja raha hai. Ye bhi User model se linked hai.

// Timestamps: { timestamps: true } option se schema ko createdAt aur updatedAt fields automatically milte hain. Ye fields aapko ye track karne me madad karti hain ki subscription kab create hui aur kab update hui.

// Agar aapko is schema me aur features add karne hain, jaise validations ya methods, to aap pooch sakte hain!

// type: Schema.Types.ObjectId ka matlab hai ki aap us field me MongoDB me object IDs store karna chahte hain. Ye IDs kisi document ka unique identifier hota hai jo aapko collections (jaise User collection) me specific documents ko reference karne me madad karta hai.