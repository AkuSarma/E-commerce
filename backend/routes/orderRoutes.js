import { Router } from "express";
const router = Router();
import { createOrder, getOrderById, getUserOrders, updateOrderToPaid, updateOrderToDelivered } from "../controllers/orderController";

// Protected routes
router.post("/", createOrder); // Create a new order
router.get("/:id", getOrderById); // Get a specific order by ID
router.get("/", getUserOrders); // Get all orders for a logged-in user

// Admin routes
router.put("/:id/pay", updateOrderToPaid); // Mark order as paid
router.put("/:id/deliver", updateOrderToDelivered); // Mark order as delivered

export default router;
