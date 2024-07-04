import express from "express";
import {
  changePassword,
  getProfile,
  updateProfile,
} from "../controllers/userController";
import { auth } from "../middleware/authMiddleware";

const router = express.Router();

router.get("/profile", auth, getProfile);
router.put("/profile", auth, updateProfile);
router.put("/change-password", auth, changePassword);

export default router;
