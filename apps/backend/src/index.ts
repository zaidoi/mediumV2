import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./db/dbconnect.js";
import { routerOfUser } from "./routes/user.routes.js";
import { routerOfBlog } from "./routes/blog.routes.js";
dotenv.config()

const app = express();
app.use(express.json())
connectDB()

app.use('/user',routerOfUser)
app.use('/blogs',routerOfBlog)



app.listen(3000, () => {
  console.log("server is running");
});
