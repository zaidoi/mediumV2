import { useEffect, useState } from "react";
import BlogCard from "../components/BlogCard";
import Navbar from "../components/Navbar";
import { useParams } from "react-router-dom";
import axios from "axios";

type blogContent = {
  title: string;
  content: string;
  _id: string;
  author: {
    _id: string;
    name: string;
  };
  createdAt: string;
};

const Blog = () => {
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const [blog, setBlog] = useState<blogContent>();

  useEffect(() => {
    async function fetchBlog() {
      try {
        const res = await axios.get(`http://localhost:3000/blogs/${id}`);
        setBlog(res.data.blog);
        setLoading(!loading);
        console.log(blog);
      } catch (error) {
        if (error instanceof Error) {
          console.log(error.message);
        }
      }
    }
    fetchBlog();
  }, []);
  return (
    <>
      <Navbar display="true" />
      <div className="flex justify-center mt-2.5 h-creen">
        <BlogCard
          title={blog?.title}
          content={blog?.content}
          author={blog?.author.name}
          date={blog?.createdAt}
          id={blog?._id}
        />
      </div>
    </>
  );
};

export default Blog;
