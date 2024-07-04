import express from "express";
import {
  createTag,
  deleteTag,
  getPopularTags,
  getPostsByTag,
  getTag,
  getTags,
  searchTags,
  updateTag,
} from "../controllers/tagController";
import { auth } from "../middleware/authMiddleware";
import { isAdmin } from "../middleware/roleMiddleware";

const router = express.Router();

router.post("/", auth, isAdmin, createTag);
router.get("/", getTags);
router.get("/search", searchTags);
router.get("/popular", getPopularTags);
router.get("/:slug", getTag);
router.put("/:slug", auth, isAdmin, updateTag);
router.delete("/:slug", auth, isAdmin, deleteTag);
router.get("/:slug/posts", getPostsByTag);

export default router;
