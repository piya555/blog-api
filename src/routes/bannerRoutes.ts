import express from "express";
import {
  createBanner,
  deleteBanner,
  getBanner,
  getBanners,
  updateBanner,
} from "../controllers/bannerController";
import { auth } from "../middleware/authMiddleware";
import { uploadAndProcessImage } from "../middleware/uploadMiddleware";

const router = express.Router();

router.post(
  "/",
  auth,
  uploadAndProcessImage("imageUrl", 1200, 400),
  createBanner
);
router.get("/", getBanners);
router.get("/:id", getBanner);
router.put(
  "/:id",
  auth,
  uploadAndProcessImage("imageUrl", 1200, 400),
  updateBanner
);
router.delete("/:id", auth, deleteBanner);

export default router;
