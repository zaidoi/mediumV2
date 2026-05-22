import express from "express"
import { toggleLike } from "../controllers/features.controller.js";
import { authMiddleware } from "../middleware/auth.middleware.js";

const routerofLike = express.Router();

routerofLike.post("/",authMiddleware,toggleLike)

export {routerofLike}