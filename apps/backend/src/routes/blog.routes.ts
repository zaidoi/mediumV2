import express from "express";
import {
  allBlogs,
  createBlog,
  deleteBlog,
  getBlog,
  updateBlog,
} from "src/controllers/blog.controller.js";
import { authMiddleware } from "src/middleware/auth.middleware.js";

const routerOfBlog = express.Router();

routerOfBlog.post("/", authMiddleware, createBlog);
routerOfBlog.get("/", allBlogs);
routerOfBlog.get("/:id", getBlog);
routerOfBlog.put("/:id", authMiddleware, updateBlog);
routerOfBlog.delete("/:id", authMiddleware, deleteBlog);

export { routerOfBlog };
