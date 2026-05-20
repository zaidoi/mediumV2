import { Avatar } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface getBlog {
  title : string,
  content:string,
  author:string,
  id:string
  date:string
}

const BlogCard = ({ title, content, date, author, id }:getBlog) => {
  const navigate = useNavigate()
  const [deleteRes, setDeleteRes] = useState<string |null>();

  const deleteBlog = async () => {
    const token = localStorage.getItem("token");
    if (!token) return;
    try {
      const res = await axios.delete(`http://localhost:3000/blogs/${id}`, {
        headers: {
          Authorization: token as string,
        },
      });
      setDeleteRes(res.data.message);
      setTimeout(() => {
        navigate('/blogs')
        setDeleteRes(null)

      },1000)
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message);
      }
    }
  };

  const dateParse = new Date(date).toLocaleDateString("en-GB", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
  return deleteRes ? (
    <div className="text-xl text-red-600">{deleteRes}</div>
  ) : (
    <div className=" flex flex-col  h-full  md:flex md:flex-row p-4 max-w-4xl gap-5 md:gap-4">
      <div className="flex flex-col gap-3  md:w-auto shadow p-2 rounded">
        <h1 className="text-3xl font-bold">{title}</h1>
        <p className="text-gray-500 text-base ">Posted on {dateParse}</p>
        <p className="text-balance">{content}</p>
        <div className="flex justify-between mt-1 ">
          <span className="text-right md:text-left">
            <button className="bg-red-600 p-2 rounded" onClick={deleteBlog}>Delete</button>
          </span>
          <span className="text-left">
            <button className="bg-amber-600 p-2 rounded">Update</button>
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <div>
          <h2>Author</h2>
        </div>

        <div className="flex gap-4 ">
          <div>
            <Avatar />
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="font-bold text-lg">
              {author?.charAt(0).toUpperCase() + author?.slice(1)}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
