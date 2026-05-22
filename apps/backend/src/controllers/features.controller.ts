import type { Request, Response } from "express";
import { Comment,Like } from "../models/models.js";

export const addComment = async (req: Request, res: Response) => {
  try {
    const { text, blogId } = req.body;
    const userId = req.userId;

    if (!userId) {
      return res.status(400).json({
        message: "Unauthorized",
      });
    }
    const comment = await Comment.create({
      text,
      blogId,
      userId,
    });
    res.status(200).json({
      message: "Comment added",
      comment,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Error adding comment",
      error: error,
    });
  }
};

export const getComments = async (req: Request, res: Response) => {
  const blogId = req.params.id as string;

  const comments = await Comment.find({ blogId }).populate("userId", "name");
  res.json({
    comments,
  });
};

export const toggleLike = async (req: Request, res: Response) => {
  const userId = req.userId;
  const { blogId } = req.body;

  if (!userId) {
    return res.status(400).json({
      message: "Unauthorized",
    });
  }

  const existingLike = await Like.findOne({ blogId, userId });
  if (existingLike) {
    await Like.deleteOne({ _id: existingLike._id });
    return res.json({ message: "Unliked" });
  }

  await Like.create({ blogId, userId });
  res.json({ message: "Liked" });
};
