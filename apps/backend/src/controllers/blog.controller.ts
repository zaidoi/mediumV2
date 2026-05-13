import { type Request, type Response } from "express";
import { Blog } from "src/models/models.js";
import { blogSchema } from "@repo/common/src/zod/models.js";
import type { BlogInput } from "@repo/common/src/zod/models.js";


export async function createBlog(req: Request, res: Response) {
  try {
    const userId = req.userId;
    if (!userId) {
      return res.status(400).json({
        message: "Unauthorized",
      });
    }

    const parsedBody = blogSchema.safeParse(req.body);
    if (!parsedBody.success) {
      return res.status(400).json({
        message: "Invalid inputs",
      });
    }
    const { title, content } = parsedBody.data;

    const blog = await Blog.create({
      title,
      content,
      author: userId,
    });

    res.status(200).json({
      message: "Post Created Succesfully",
      blog,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Error while creating post",
      error: error,
    });
  }
}

export async function allBlogs(req: Request, res: Response) {
  try {
    const allBlogs = Blog.find({}).populate("author","name email");

    res.status(200).json({
      allBlogs,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error while fetching blogs",
      error: error,
    });
  }
}

export async function getBlog(req: Request, res: Response) {
  try {
    const id = req.params.id;
    const blog = await Blog.findById(id).populate("author","name");
    if (!blog) {
      return res.status(400).json({
        message: "Blog not found",
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Error while fetching blog",
      error: error,
    });
  }
}

export async function updateBlog(req: Request, res: Response) {
  try {
    const blogId = req.params.id as string;
    const userId = req.userId as string;

    if (!userId) {
      return res.status(400).json({
        message: "Unauthorized",
      });
    }

    const blog = await Blog.findOne({ _id: blogId, author: userId });

    if (!blog) {
      return res.status(400).json({
        message: "Blog not found",
      });
    }

    blog.title = req.body.title || blog.title;
    blog.content = req.body.content || blog.content;

    await blog.save();

    res.status(200).json({
      message: "Blog Updated",
    });
  } catch (error) {
    res.status(500).json({
      message: "Error while updating blog",
      error: error,
    });
  }
}

export async function deleteBlog(req: Request, res: Response) {
  try {
    const blogId = req.params.id;
    const userId = req.userId;

    if (!userId) {
      return res.status(400).json({
        message: "Unauthorized",
      });
    }

    const blog = await Blog.findOneAndDelete({
      _id: blogId,
      author: userId,
    });

    if (!blog) {
      return res.status(400).json({
        message: "Not allowed to Delete or not found",
      });
    }

    res.status(200).json({
      message: "Blog deleted",
    });
  } catch (error) {
    res.status(500).json({
      message: "Error while deleting",
      error: error,
    });
  }
}
