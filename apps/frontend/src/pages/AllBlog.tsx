import React, { useEffect, useState } from "react";
import AllBlogCard from "../components/AllBlogCard";
import Navbar from "../components/Navbar";
import { data, useSearchParams } from "react-router-dom";
import axios from "axios";

const AllBlog = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [allBlogs,setAllBlogs] = useState([])

  const searchTerm = searchParams.get("search") || "";
  const sortTerm = searchParams.get("sort") || "latest";

  

  useEffect(() => {
     const fetchBlogs = async () => {
    try {
      const res = await axios.get("http://localhost:3000/blogs", {
        params: {
          search: searchTerm,
          sort: sortTerm,
        },
      });

      setAllBlogs(res.data.allBlogs);
      console.log(allBlogs)
    } catch (error) {
      console.log(error);
    }
  };

  fetchBlogs();
  },[searchTerm,sortTerm]);
  return (
    <>
      <Navbar display="true" />
      <div className="p-4  flex flex-col  items-center gap-2">
        <div className="max-w-xl flex gap-2">
          <input
            className="border p-2 rounded-md md:w-lg text-balance focus:ring-1"
            type="text"
            placeholder="Search...."
            onChange={(e) => {
              const value = e.target.value;
              if (value) {
                setSearchParams({ search: value, sort: sortTerm });
              } else {
                setSearchParams({ sort: sortTerm });
              }
            }}
            value={searchTerm}
          />
          <select
            name=""
            id=""
            value={sortTerm}
            onChange={(e) =>
              setSearchParams({
                search: searchTerm,
                sort: e.target.value,
              })
            }
          >
            <option value="latest">Latest</option>
            <option value="oldest">Oldest</option>
          </select>
        </div>
        <div>
          {allBlogs.map((blog) => (
            <AllBlogCard id={blog._id} title={blog.title} content={blog.content} author={blog.author.name} date={blog.createdAt}/>
          ))}
        </div>
      </div>
    </>
  );
};

export default AllBlog;
