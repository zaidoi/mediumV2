import  express  from "express";
import { loginController, signupController } from "src/controllers/user.controller.js";

const router = express.Router();

router.post("/signup",signupController)

router.post("/login",loginController)