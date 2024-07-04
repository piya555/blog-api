import express from "express";
import {
  createPage,
  deletePage,
  getPage,
  getPages,
  searchPages,
  togglePagePublish,
  updatePage,
} from "../controllers/pageController";
import { auth } from "../middleware/authMiddleware";
import { isAdmin } from "../middleware/roleMiddleware";
import { uploadAndProcessImage } from "../middleware/uploadMiddleware";

const router = express.Router();

router.post(
  "/",
  auth,
  isAdmin,
  uploadAndProcessImage("thumbnail", 1200, 630),
  createPage
);
router.get("/", getPages);
router.get("/search", searchPages);
router.get("/:slug", getPage);
router.put(
  "/:slug",
  auth,
  isAdmin,
  uploadAndProcessImage("thumbnail", 1200, 630),
  updatePage
);
router.delete("/:slug", auth, isAdmin, deletePage);
router.patch("/:slug/toggle-publish", auth, isAdmin, togglePagePublish);

export default router;
