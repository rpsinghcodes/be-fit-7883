import express from "express";
import { login, loginAdmin, postFood, signUp } from "../controllers/users.controller.js";

const userRouter = express.Router();


userRouter.post("/signup", signUp );

userRouter.post("/login", login);
userRouter.post("/loginadmin", loginAdmin);

userRouter.post("/postFood", postFood);


export default userRouter