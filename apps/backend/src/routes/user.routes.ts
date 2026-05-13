import  express  from "express";
import { loginController, signupController } from "src/controllers/user.controller.js";

const routerOfUser = express.Router();

routerOfUser.post("/signup",signupController)

routerOfUser.post("/login",loginController)

export  {routerOfUser}