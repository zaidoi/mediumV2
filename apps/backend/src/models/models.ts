import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:String,
    email:{
        type:String,
        unique:true
    },
    password:String
})

const blogSchema = new mongoose.Schema({
    title:String,
    content:String,
    author:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:"true"
    },
    createdAt:{
        type:Date,
        default:Date.now()
    }
})
export const User = mongoose.model('User',userSchema);
export const Blog = mongoose.model("Blog",blogSchema)