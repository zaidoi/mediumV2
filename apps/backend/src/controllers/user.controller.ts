import jwt from "jsonwebtoken";
import { hash, compare } from "bcrypt-ts";
import { User } from "../models/models.js";
import { signupSchema } from "@repo/common/src/zod/models.js";
import type { SignupInput } from "@repo/common/src/zod/models.js";
import type { Request, Response } from "express";

export async function signupController(req: Request, res: Response) {
  try {
    const parsedBody = signupSchema.safeParse(req.body);

    if (!parsedBody.success) {
      return res.status(400).json({
        msg: "Invalid Inputs",
        error: parsedBody.error,
      });
    }

    const body: SignupInput = req.body;
    const { name, email, password } = body;

    const hashedPassword = await hash(password, 10);

    const user = User.create({
      name,
      email,
      password: hashedPassword,
    });

    res.status(200).json({
      message: "User is created",
      user,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error while Signup",
      error: error,
    });
  }
}

export async function loginController(req:Request,res:Response){
    try {

        const {email,password} = req.body;

        const user = await User.findOne({email})
        if(!user){
            res.status(400).json({
                message:"User not found"
            })
        }
        const passwordMatch = await compare(password,user.password)
        if(!passwordMatch){
            return res.status(400).json({
                message:"Invalid password"
            })
        }
        const token = jwt.sign({id:user._id},process.env.JWT_SECRET as string)

        res.status(200).json({
            token
        })
        
    } catch (error) {
        res.status(500).json({
            message:"Error while login",
            error:error
        })
    }
}