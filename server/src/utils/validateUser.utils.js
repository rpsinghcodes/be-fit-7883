import userModel from "../models/user.model.js";

async function validateUser (email){
    if(!email  || email.trim().length == 0){
    const error = new Error("Email is required");
    error.message = "Invalid email"
    error.statusCode = 400; // Bad Request
    throw error; // Pass the error to the catch block
    }
    const data = await userModel.findOne({email}); 
    if(!data){
        
    const error = new Error("User not found");
    error.message = "User not found"
    error.statusCode = 404; // Not Found
    throw error; // Pass the error to the catch block
    }
    return data;
}

export default validateUser