import express from "express";
import {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
  addProductReview,
} from "../controllers/productController.js";

const router = express.Router();

// Public routes
router.get("/", getAllProducts); // Fetch all products
router.get("/:id", getProductById); // Fetch a single product by ID

// Protected/Admin routes
router.post("/", createProduct); // Create a new product (Admin only)
router.put("/:id", updateProduct); // Update a product (Admin only)
router.delete("/:id", deleteProduct); // Delete a product (Admin only)

// Add a review to a product
router.post("/:id/reviews", addProductReview);

export default router;
