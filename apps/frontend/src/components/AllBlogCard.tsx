import { useState } from "react";
import { Avatar } from "@mui/material";
import { Heart } from "lucide-react";
import Comment from "./Comment";

type blogContent = {
  title: string;
  content: string;
  date: string;
};
const AllBlogCard = ({ title, content, date, name }: blogContent) => {

  const dateConverted = new Date(date);

  const [isClickHeart, setIsClickHeart] = useState(false);
  const [isClickComment,setIsClickComment] = useState(false)

  return (
    <div className="border-b  border-gray-600 p-4 flex flex-col gap-3 max-w-3xl">
      <div className="flex items-center gap-3">
        <Avatar>Z</Avatar>
        <h2 className="text-base">Zaid Badgujar</h2>
        <h3 className="text-base">Dec 3, 2023</h3>
      </div>

      <div className="flex flex-col  gap-1">
        <h1 className="text-xl font-bold">
          How an ugly Single-Page Website Makes $5000 a Month with Affiliate
          Marketing
        </h1>
        <p className="text-balance font-light">
          No need to create a fancy and modern website with hundreds of pages to
          make money online. <br />
          Making money online is the dream for man...
        </p>
      </div>

      <div className="flex justify-between">
        <div className="flex gap-4">
          <span className="bg-amber-600 px-2 py-1 rounded-2xl">3min read</span>
          <button className="bg-black text-white rounded-lg px-2"
          onClick={() => setIsClickComment(!isClickComment)}
          >
            Add comment
          </button>
        </div>

        <div>
          <button onClick={() => setIsClickHeart(!isClickHeart)}>
            {" "}
            <Heart color="red" fill={isClickHeart ? "red" : "white"} />{" "}
          </button>
        </div>
      </div>

      {isClickComment ? <Comment/> : null}

    </div>
  );
};

export default AllBlogCard;
