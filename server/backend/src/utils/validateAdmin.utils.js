import userModel from "../models/user.model.js";

async function validateAdmin(email) {
    const data  = await userModel.find({email, role: "admin"});
    console.log('data: ', data);
    if(data?.length == 0) {
        const error = new Error("Admin not found");
        error.message = "Admin not found";
        error.statusCode = 404; // Not Found
        throw error;
    }else{
        return data;
    }
}


export default validateAdmin;