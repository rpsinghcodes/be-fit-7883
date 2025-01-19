import express from "express";
import { login, loginAdmin, postFood, signUp, updateProifle } from "../controllers/users.controller.js";

const userRouter = express.Router();


userRouter.post("/signup", signUp );  // user signup -> user/signup

userRouter.put("/updateProfile/:id", updateProifle); // for updating user proile;

userRouter.post("/login", login); // user login -> user/login
userRouter.post("/loginadmin", loginAdmin); // admin login -> user/loginadmin

userRouter.post("/postFood", postFood); // post food -> user/postFood


export default userRouter