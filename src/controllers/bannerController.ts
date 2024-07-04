import { Request, Response } from "express";
import Banner, { IBanner } from "../models/Banner";

export const getBanners = async (req: Request, res: Response) => {
  try {
    const banners = await Banner.find();
    res.json(banners);
  } catch (error) {
    res.status(500).json({ message: "Error fetching banners", error });
  }
};

export const getBanner = async (req: Request, res: Response) => {
  try {
    const banner = await Banner.findById(req.params.id);
    if (!banner) {
      return res.status(404).json({ message: "Banner not found" });
    }
    res.json(banner);
  } catch (error) {
    res.status(500).json({ message: "Error fetching banner", error });
  }
};

export const createBanner = async (req: Request, res: Response) => {
  try {
    const banner = new Banner(req.body as IBanner);
    await banner.save();
    res.status(201).json(banner);
  } catch (error) {
    res.status(500).json({ message: "Error creating banner", error });
  }
};

export const updateBanner = async (req: Request, res: Response) => {
  try {
    const banner = (await Banner.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    })) as IBanner;
    if (!banner) {
      return res.status(404).json({ message: "Banner not found" });
    }
    res.json(banner);
  } catch (error) {
    res.status(500).json({ message: "Error updating banner", error });
  }
};

export const deleteBanner = async (req: Request, res: Response) => {
  try {
    const banner = await Banner.findOneAndDelete({ _id: req.params.id });
    if (!banner) {
      return res.status(404).json({ message: "Banner not found" });
    }
    res.json({ message: "Banner deleted" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting banner", error });
  }
};
