import FoodModel from "../models/foods.model.js";
import validateAdmin from "../utils/validateAdmin.utils.js";

const getFood = async (req, res, next) => {
    try {
        const {foodName} = req.params;
        const data = await FoodModel.findOne({dishName: foodName});
        if(!data) {
            const error = new Error("Food not found");
            error.message = "Food not found";
            error.statusCode = 404; // Not Found
            throw error;
        }
        res.status(200).json({message:"Food found successfully.", data});

    } catch (error) {
        next(error);
    }
}

const updateFood = async (req, res, next) => {
    try {
        const {_id, items, dishName } = req.body;
        const response = await FoodModel.updateOne({_id}, {items, dishName});
        return res.status(200).json({message:"Food updated successfully.", response});
    } catch (error) {
        next(error);        
    }
}


const getAll = async (req, res, next) => {
    try {
        const response = await FoodModel.find();
        res.status(200).json({message:"Foods found successfully.", response});
    } catch (error) {
        next(error);
    }
}


const postFood = async (req, res, next) => {
    try {
        const {email} = req.body;
      //  await validateAdmin(email); // checking if it is admin or not;
        const {dishName, items} = req.body;
        console.log(dishName, items);
        
        await FoodModel.insertMany({dishName, items});
        
        return res.status(200).json({message:"Food added successfully."});
    } catch (error) {
        next(error);
    }
}

const deleteFood = async (req, res, next) => {
    try {
        const {id} = req.params;
        // const {email} = req.body;
        // await validateAdmin(email);
        await FoodModel.deleteOne({_id: id});
        
        res.status(200).json({message:"Food deleted successfully."});
    } catch (error) {
        next(error);
    }
}

export { getFood, postFood, getAll, updateFood, deleteFood };

