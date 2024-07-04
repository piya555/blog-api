import { Request, Response } from "express";
import { AuthRequest } from "../middleware/authMiddleware";
import Post from "../models/Post";

export const createPost = async (req: AuthRequest, res: Response) => {
  try {
    const { title, content } = req.body;
    const post = new Post({
      title,
      content,
      author: req.userId,
    });
    await post.save();
    res.status(201).json(post);
  } catch (error) {
    res.status(500).json({ message: "Error creating post", error });
  }
};

export const getPosts = async (req: Request, res: Response) => {
  try {
    const posts = await Post.find().populate("author", "username");
    res.json(posts);
  } catch (error) {
    res.status(500).json({ message: "Error fetching posts", error });
  }
};

export const getPost = async (req: Request, res: Response) => {
  try {
    const post = await Post.findById(req.params.id).populate(
      "author",
      "username"
    );
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }
    res.json(post);
  } catch (error) {
    res.status(500).json({ message: "Error fetching post", error });
  }
};

export const updatePost = async (req: AuthRequest, res: Response) => {
  try {
    const { title, content } = req.body;
    const post = await Post.findOneAndUpdate(
      { _id: req.params.id, author: req.userId },
      { title, content },
      { new: true }
    );
    if (!post) {
      return res
        .status(404)
        .json({ message: "Post not found or unauthorized" });
    }
    res.json(post);
  } catch (error) {
    res.status(500).json({ message: "Error updating post", error });
  }
};

export const deletePost = async (req: AuthRequest, res: Response) => {
  try {
    const post = await Post.findOneAndDelete({
      _id: req.params.id,
      author: req.userId,
    });
    if (!post) {
      return res
        .status(404)
        .json({ message: "Post not found or unauthorized" });
    }
    res.json({ message: "Post deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting post", error });
  }
};
