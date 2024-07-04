import express from "express";
import {
  createMenuItem,
  deleteMenuItem,
  getMenuItem,
  getMenuItems,
  getMenuStructure,
  reorderMenuItems,
  updateMenuItem,
} from "../controllers/menuController";
import { auth } from "../middleware/authMiddleware";
import { isAdmin } from "../middleware/roleMiddleware"; // Assuming you have a middleware to check admin role

const router = express.Router();

router.post("/", auth, isAdmin, createMenuItem);
router.get("/", getMenuItems);
router.get("/structure", getMenuStructure);
router.get("/:id", getMenuItem);
router.put("/:id", auth, isAdmin, updateMenuItem);
router.delete("/:id", auth, isAdmin, deleteMenuItem);
router.post("/reorder", auth, isAdmin, reorderMenuItems);

export default router;
