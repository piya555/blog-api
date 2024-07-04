import express from "express";
import {
  createPost,
  deletePost,
  getPost,
  getPosts,
  updatePost,
} from "../controllers/postController";
import { auth } from "../middleware/authMiddleware";
import { uploadAndProcessImage } from "../middleware/uploadMiddleware";

const router = express.Router();

router.post(
  "/",
  auth,
  uploadAndProcessImage("thumbnail", 800, 600),
  createPost
);
router.get("/", getPosts);
router.get("/:id", getPost);
router.put(
  "/:id",
  auth,
  uploadAndProcessImage("thumbnail", 800, 600),
  updatePost
);
router.delete("/:id", auth, deletePost);

export default router;
