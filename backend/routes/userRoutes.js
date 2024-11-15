import express from "express";
import {
  loginControllers,
  registerControllers,
} from "../controllers/userController.js";

const router = express.Router();

router.route("/signup").post(registerControllers);

router.route("/login").post(loginControllers);

export default router;