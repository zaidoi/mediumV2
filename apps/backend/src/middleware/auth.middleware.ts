import type { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import  type {JwtPayload} from 'jsonwebtoken'


export const authMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({
      message: "Token not provided",
    });
  }

  try {
    interface MyPayload extends JwtPayload {
      userId:string
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as MyPayload
    req.userId = decoded.userId;
    next();
  } catch (error) {
    return res.status(400).json({
      message: "Invalid token",
    });
  }
};
