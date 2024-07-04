import express from "express";
import {
  deleteAccount,
  getProfile,
  getUsers,
  updateProfile,
  updateUserRole,
} from "../controllers/userController";
import { auth } from "../middleware/authMiddleware";
import { isAdmin } from "../middleware/roleMiddleware";
import { uploadAndProcessImage } from "../middleware/uploadMiddleware";

const router = express.Router();

router.get("/profile", auth, getProfile);
router.put(
  "/profile",
  auth,
  uploadAndProcessImage("avatar", 200, 200),
  updateProfile
);
router.delete("/delete-account", auth, deleteAccount);

// Admin routes
router.get("/users", auth, isAdmin, getUsers);
router.put("/users/:id/role", auth, isAdmin, updateUserRole);

export default router;
