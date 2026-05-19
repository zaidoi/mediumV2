import type { BlogInput } from "@repo/common/src/zod/models";
import Editor from "../components/Editor";
import Navbar from "../components/Navbar";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateBlog = () => {
  const [response, setResponse] = useState<string | null>(null);
  const navigate = useNavigate();


  const createPost = async (data: BlogInput) => {
    const token = localStorage.getItem("token");

    try {
      const res = await axios.post("http://localhost:3000/blogs", data, {
        headers: {
          Authorization: token as string,
        },
      });

      setResponse(res.data.message);
      setTimeout(() => {
        setResponse(null);
        navigate("/blogs");
      }, 2000);

    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message);
      }
    }
  };
  return (
    <>
      <Navbar />
      <div className="flex justify-center  p-3 ">
        {response ? (
          <div className="text-green-600">{response}</div>
        ) : (
          <Editor onCreatePost={createPost} />
        )}
      </div>
    </>
  );
};

export default CreateBlog;
