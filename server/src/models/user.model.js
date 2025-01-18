import mongoose from "mongoose";


// for users 
const UserSchema = new mongoose.Schema({
    userName: {type:String, required:true}, // this can be email,
    password: String,
    email:{type:String, required: true},
    role:{type:String, required:true, enum: ['admin', 'user']},
    foodHistory: [{dishName:{type:String, required:true}, items:[{name:{type:String, required:true}, quantity:{type:Number, required:true}, calories:{type:Number, required:true}}]}],
});


const userModel = mongoose.model("User", UserSchema);

export default userModel;