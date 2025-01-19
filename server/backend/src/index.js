import express from "express";
import mongoose from "mongoose";
import cors from "cors"; // Import the CORS middleware
import 'dotenv/config';
import foodRouter from "./routes/foods.routes.js";
import userRouter from "./routes/users.routes.js";
import ErrorHandler from "./middlewares/handleError.middleware.js";

const app = express();

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.log("MongoDB connection error:", err.message));

// CORS Configuration
app.use(cors({
  origin: "http://localhost:5173", // Allow requests from your frontend
  credentials: true, // Allow cookies or authorization headers
}));

// Middleware to Parse JSON
app.use(express.json());

// Routes
app.use("/food", foodRouter);
app.use("/user", userRouter);

// Error Handling Middleware
app.use(ErrorHandler);

// Start the Server
app.listen(process.env.PORT, () => {
  console.log(`App is running on port ${process.env.PORT}`);
});
