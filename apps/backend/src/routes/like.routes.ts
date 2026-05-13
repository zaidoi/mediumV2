import express from "express"
import { toggleLike } from "src/controllers/features.controller.js";
import { authMiddleware } from "src/middleware/auth.middleware.js";

const routerofLike = express.Router();

routerofLike.post("/",authMiddleware,toggleLike)

export {routerofLike}