import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import config from "../config/config";
import User from "../models/User";
import logger from "../utils/logger";

const JWT_SECRET = config.jwtSecret;

export const register = async (req: Request, res: Response) => {
  try {
    const { username, email, password } = req.body;
    const user = new User({ username, email, password });
    await user.save();
    logger.info(`User registered: ${email}`);
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    logger.error("Error registering user", { error });
    res.status(500).json({ message: "Error registering user", error });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      logger.warn(`Login attempt failed for non-existent user: ${email}`);
      return res.status(401).json({ message: "Authentication failed" });
    }
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      logger.warn(`Login attempt failed for user: ${email}`);
      return res.status(401).json({ message: "Authentication failed" });
    }
    const token = jwt.sign({ userId: user._id }, JWT_SECRET, {
      expiresIn: "1h",
    });
    logger.info(`User logged in: ${email}`);
    res.json({ token, userId: user._id });
  } catch (error) {
    logger.error("Error logging in", { error });
    res.status(500).json({ message: "Error logging in", error });
  }
};
