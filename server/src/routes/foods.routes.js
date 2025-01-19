import express from "express";
import { getFood, postFood, getAll, updateFood, deleteFood } from "../controllers/foods.controller.js";

const foodRouter = express.Router();

foodRouter.get("/:foodName", getFood); // get one food -> /food/:foodName  (e.g: /food/burger)

foodRouter.get("/", getAll); // get all foods -> /food/

foodRouter.delete("/:id", deleteFood); // delete food -> /food/:id

foodRouter.put("/", updateFood); // update food -> /food/

foodRouter.post("/", postFood); // post food -> /food/



export default foodRouter;