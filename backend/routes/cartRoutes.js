import { Router } from "express";
const router = Router();
import { getCart, addToCart, updateCartItem, removeCartItem, clearCart } from "../controllers/cartController";

// Protected routes
router.get("/", getCart); // Fetch the user's cart
router.post("/add", addToCart); // Add an item to the cart
router.put("/update/:itemId", updateCartItem); // Update quantity of a cart item
router.delete("/remove/:itemId", removeCartItem); // Remove an item from the cart
router.delete("/clear", clearCart); // Clear the entire cart

export default router;
