import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./db/dbconnect.js";
dotenv.config()

const app = express();
app.use(express.json())
connectDB()

app.use('/user')
app.use('/blogs')


app.get("/", (req, res) => {
  res.send("Hello from Js");
});

app.listen(3000, () => {
  console.log("server is running");
});
