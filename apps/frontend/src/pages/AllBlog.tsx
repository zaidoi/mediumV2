import React, { useState } from "react";
import AllBlogCard from "../components/AllBlogCard";

const AllBlog = () => {
  const [searchItem, setSearchItem] = useState("");
  return (
    <div className="p-4  flex flex-col  items-center gap-2">
      <div className="max-w-xl">
        <input 
        className="border p-2 rounded-md md:w-lg text-balance focus:ring-1"
          type="text"
          placeholder="Search...."
          onChange={(e) => setSearchItem(e.target.value)}
          value={searchItem}
        />
      </div>
      <div>
        <AllBlogCard />
        <AllBlogCard />
        <AllBlogCard />
        <AllBlogCard />
      </div>
    </div>
  );
};

export default AllBlog;
