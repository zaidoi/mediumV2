import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./db/dbconnect.js";
import { routerOfUser } from "./routes/user.routes.js";
import { routerOfBlog } from "./routes/blog.routes.js";
import { routerofComment } from "./routes/comment.routes.js";
import { routerofLike } from "./routes/like.routes.js";

dotenv.config()

const app = express();
app.use(express.json())
connectDB()

app.use("/user",routerOfUser)
app.use("/blogs",routerOfBlog)

app.use("/comment",routerofComment)
app.use("/like",routerofLike)



app.listen(3000, () => {
  console.log("server is running");
});
