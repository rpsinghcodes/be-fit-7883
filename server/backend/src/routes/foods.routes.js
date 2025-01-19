import express from "express";
import { getFood, postFood, getAll, updateFood ,deleteFood} from "../controllers/foods.controller.js";

const foodRouter = express.Router();

foodRouter.get("/:foodName", getFood);

foodRouter.get("/", getAll);

foodRouter.put("/", updateFood);

foodRouter.post("/", postFood);

foodRouter.delete("/:id", deleteFood);

export default foodRouter;

