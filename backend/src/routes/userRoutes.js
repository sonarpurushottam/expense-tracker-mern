import express from "express";
import * as userController from "../controllers/userController.js";

const router = express.Router();

router.post("/users", userController.createUser);
router.get("/users/:id", userController.getUserById);
router.put("/users/:id", userController.updateUser);
router.delete("/users/:id", userController.deleteUser);

// Add other user-related routes as needed

export default router;
