import express, { json } from "express";
import cors from "cors";
import userRoutes from "./routes/userRoutes.js";
import dotenv from "dotenv";
import connectDB from "./db/connectDB.js";
import productRoutes from "./routes/productRoutes.js";
import cartRoutes from "./routes/cartRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;

// Middleware
app.use(cors());
app.use(json());

// MongoDB Connection
connectDB()

// Routes
app.use("/user", userRoutes);
app.use("/product", productRoutes);
app.use("/cart", cartRoutes);

// Start Server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
