import express from "express";
import {
  createPost,
  deletePost,
  getPost,
  getPosts,
  updatePost,
} from "../controllers/postController";
import { auth } from "../middleware/authMiddleware";

const router = express.Router();

router.post("/", auth, createPost);
router.get("/", getPosts);
router.get("/:id", getPost);
router.put("/:id", auth, updatePost);
router.delete("/:id", auth, deletePost);

export default router;
