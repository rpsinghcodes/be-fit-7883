import express from "express";
import mongoose from "mongoose";
import 'dotenv/config'
import foodRouter from "./routes/foods.routes.js";
import userRouter from "./routes/users.routes.js";
import ErrorHandler from "./middlewares/handleError.middleware.js";

const app = express();

mongoose.connect(process.env.MONGO_URL)
.then(() => console.log("connected"))
.catch(err => console.log(err));

app.use(express.json());

app.use("/food", foodRouter);
app.use("/user", userRouter);


app.use(ErrorHandler);


app.listen(process.env.PORT, () => {
    console.log(`App is running on port ${process.env.PORT}`);
})