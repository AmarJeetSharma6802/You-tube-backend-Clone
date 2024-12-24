class ApiError extends Error{
    constructor(
        statusCode, 
        message = "Something went wrong",
        errors = [],
        stack=""
    ){
        super(message)
        this.statusCode = statusCode
        this.data = null
        this.message = message
        this.success = false;
        this.errors = errors

        if (stack) {
            this.stack = stack
        } else{
            Error.captureStackTrace(this, this.constructor)
        }

    }
}
export {ApiError}

// this.data: Yeh property hai jo error ke saath additional information store kar sakti hai.
// = null: Iska matlab hai ki jab error create kiya jata hai, toh initially data me koi value nahi hoti, isliye use null set kiya gaya hai.

// this.data = null isliye set kiya gaya hai taki baad me agar zarurat ho, toh aap is property me kuch additional data store kar sakein. Is particular class me data ka use abhi nahi ho raha, lekin future me aap error se related extra information store kar sakte ho, jaise ki debugging ke liye additional details.

// error stack trace uss error ka detailed record provide karta hai, jismein bataya jata hai ke error kaise aur kahan hua.

// Jab aap super(message) likhte hain, to aap Error class ka constructor call kar rahe hain. Isse Error class ke properties, jaise message, initialize ho jate hain. Is tarah, aapko ApiError class ke instances mein message property milti hai, jo error message ko represent karti hai.

// 1. this.statusCode = statusCode
// Kya hai: Yeh property HTTP status code ko store karti hai (jaise 400, 404, 500).
// Istemal: Client ko batane ke liye ki error kis type ka hai. Jaise, 400 ka matlab bad request hai.

// this.message = message
// Kya hai: Yeh property error message ko store karti hai.
// Istemal: Client ko batane ke liye ki kya galat hua (jaise "User not found" ya "Invalid input").

// 4. this.success = false
// Kya hai: Yeh property request ke success status ko darshati hai.
// Istemal: Jab error hota hai, toh isse false set kiya jata hai, jo client ko yeh samajhne mein madad karta hai ki request successful nahi hui.

// 5. this.errors = errors
// Kya hai: Yeh property specific error details ko rakhne ke liye hoti hai.
// Istemal: Yeh validation errors ke liye useful hai, jahan ek se adhik issues ho sakte hain (jaise "Email is required," "Password must be at least 6 characters").