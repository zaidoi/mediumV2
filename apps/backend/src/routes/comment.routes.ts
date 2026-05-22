import express from "express";
import { addComment, getComments } from "../controllers/features.controller.js";
import { authMiddleware } from "../middleware/auth.middleware.js";


const routerofComment = express.Router()

routerofComment.post("/",authMiddleware,addComment);
routerofComment.get("/:id",getComments)

export {routerofComment}
