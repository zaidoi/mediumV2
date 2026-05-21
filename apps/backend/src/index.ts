import dotenv from "dotenv";
dotenv.config()
import express from "express";
import cors from "cors";
import { connectDB } from "./db/dbconnect.js";
import { routerOfUser } from "./routes/user.routes.js";
import { routerOfBlog } from "./routes/blog.routes.js";
import { routerofComment } from "./routes/comment.routes.js";
import { routerofLike } from "./routes/like.routes.js";


const app = express();
app.use(cors())
app.use(express.json())
connectDB()

app.use("/user",routerOfUser)
app.use("/blogs",routerOfBlog)

app.use("/comment",routerofComment)
app.use("/like",routerofLike)


const PORT =  process.env.PORT || 3000

app.listen(PORT, () => {
  console.log("server is running");
});
