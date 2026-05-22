import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import UpdateEditor from "../components/UpdateEditor";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import type { BlogInput } from "@repo/common/src/zod/models";
 


const UpdateBlog = () => {
  const { id } = useParams();
  const [response, setResponse] = useState<string | null>(null);
  const navigate = useNavigate()
   
  const updateBlog = async(data:BlogInput) => {
    const token = localStorage.getItem('token')
    try {
       
        const res = await axios.put(`http://localhost:3000/blogs/${id}`,data,{
            headers:{
                Authorization : token as string
            }
        })
        setResponse(res.data.message)
        setTimeout(()=>{
            setResponse(null)
            navigate("/blogs")
        },1000)
    } catch (error) {
        if(error instanceof Error){
            console.log(error.message)
        }
    }
  }
 
  return (
    <>
      <Navbar />
      <div className="flex justify-center  p-3 ">
        {response ? (
          <div className="text-green-600">{response}</div>
        ) : (
          <UpdateEditor onSubmit={updateBlog}  />
        )}
      </div>
    </>
  );
};

export default UpdateBlog;
