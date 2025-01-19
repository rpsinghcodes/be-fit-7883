import userModel from "../models/user.model.js";
import validateUser from "../utils/validateUser.utils.js";

const signUp = async (req, res, next) => {
    try {
        const {email, userName} = req.body;
        if(!email  || email.trim().length == 0){
            const error = new Error("Email is required");
            error.message = "Invalid email"
            error.statusCode = 400; // Bad Request
            throw error; // Pass the error to the catch block
        }
        const data = await userModel.insertMany({email, userName, foodHistory:[]});
        res.status(200).json({message:"User created successfully."});
        
    } catch (error) {
        next(error);
    }
}


const login = async (req, res, next) => {
    try {
        const {email} = req.body;
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
        res.status(200).json({message:"User found successfully."});
    } catch (error) {
        next(error);
    }
}



// history;
const postFood = async (req, res, next) => {
    try {
        const {email} = req.body;
        // await validateUser(email);
        const {dishName, items} = req.body;
        console.log(dishName, items);
        const foodData = await userModel.updateOne({email}, {$push:{foodHistory: {dishName, items: items}}});
        if(foodData.modifiedCount == 1){
            res.status(200).json({message:"Food added successfully."});
        }else{
            throw Error("Something went wrong");
        }

    } catch (error) {
        if(error.statusCode != 404){
            console.log(error);
            error.statusCode = 500; // Internal Server Error
            error.message = "Something went wrong";
            next(error);
        }else{
            next(error);
        }
    }
}

const loginAdmin = async (req, res, next) => {
    try {
        console.log('req.body: ', req.body);
        const {email, password} = req.body;
        console.log(email, password)
        const data = await userModel.findOne({email, password}) || [];
        console.log(data);
        if(data==null ||  data.length == 0 || data.role != "admin") {
         return res.status(400).json({message:"Invalid email or password"});
        }
        return res.status(200).json({message:"Admin logged in successfully."});

    } catch (error) {
        next(error);
    }
}

const updateProifle = async (req, res, next) => {
    try {
        const {id} = req.params;
        await userModel.updateOne({id}, req.body);
        return res.status(200).json({message:"Profile updated successfully."});
    } catch (error) {
        next(error);
    }
}


export {signUp, login, postFood, loginAdmin, updateProifle};