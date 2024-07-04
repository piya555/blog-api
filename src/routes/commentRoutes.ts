import express from "express";
import {
  approveComment,
  createComment,
  deleteComment,
  getComment,
  getComments,
  updateComment,
} from "../controllers/commentController";
import { auth } from "../middleware/authMiddleware";
import { isAdmin } from "../middleware/roleMiddleware";

const router = express.Router();

router.post("/", auth, createComment);
router.get("/", getComments);
router.get("/:id", getComment);
router.put("/:id", auth, updateComment);
router.delete("/:id", auth, deleteComment);
router.patch("/:id/approve", auth, isAdmin, approveComment);

export default router;
