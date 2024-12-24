class ApiResponse {
    constructor(statusCode, data, message = "Success"){
        this.statusCode = statusCode
        this.data = data
        this.message = message
        this.success = statusCode < 400
    }
}

export { ApiResponse } 

// Yeh property check karti hai ki status code 400 se chhota hai ya nahi. Agar hai, toh true set hota hai (indicating success); nahi toh false (indicating error).