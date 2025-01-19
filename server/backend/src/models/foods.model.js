import mongoose from "mongoose";



// only admin can access the data from this model
const FoodSchema = new mongoose.Schema({
    dishName: String,
    items: [{ name: { type: String, required: true }, quantity: { type: Number, require: true }, calories: { type: Number, require: true, min: 0 } }],
})


const FoodModel = mongoose.model("Food", FoodSchema);

export default FoodModel;