import { useState } from "react";
import { Avatar } from "@mui/material";
import { Heart } from "lucide-react";
import Comment from "./Comment";
import axios from "axios";

type blogContent = {
  title: string;
  content: string;
  date: string;
  author: string;
  id: string | number;
};
const AllBlogCard = ({ title, content, date, author, id }: blogContent) => {
  const [isClickHeart, setIsClickHeart] = useState(false);
  const [isClickComment, setIsClickComment] = useState(false);
  const [commentInput, setCommentInput] = useState("");

  async function onLikeSubmit() {
    const token = localStorage.getItem("token");
    if (!token) return;

    try {
      await axios.post(
        "http://localhost:3000/like",
        {
          blogId: id,
        },
        {
          headers: {
            Authorization: token as string,
          },
        },
      );
      setIsClickHeart(!isClickHeart);
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message);
      }
    }
  }

  async function onCommentSubmit() {
    const token = localStorage.getItem("token");
    if (!token) return;
    try {
       await axios.post(
        "http://localhost:3000/comment",
        {
          text: commentInput,
          blogId: id,
        },
        {
          headers: {
            Authorization: token as string,
          },
        },
      );

      setIsClickComment(false);
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message);
      }
    }
  }

  const dateConverted = new Date(date).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  function calculateReadingTime(text: string) {
    const wordsPerMinute = 225;
    const words = text.trim().split(/\s+/).length;
    const minutes = Math.ceil(words / wordsPerMinute);

    return `${minutes}min read`;
  }

  return (
    <div className="border-b  border-gray-600 p-4 flex flex-col gap-3 md:min-w-2xl max-w-3xl">
      <div className="flex items-center gap-3">
        <Avatar>{author.charAt(0)}</Avatar>
        <h2 className="text-base">
          {author.charAt(0).toUpperCase() + author.slice(1)}
        </h2>
        <h3 className="text-base">{dateConverted}</h3>
      </div>

      <div className="flex flex-col  gap-1">
        <h1 className="text-xl font-bold">{title}</h1>
        <p className="text-balance font-light">{content.slice(1, 100)}...</p>
      </div>

      <div className="flex justify-between">
        <div className="flex gap-4">
          <span className="bg-amber-600 px-2 py-1 rounded-2xl">
            {calculateReadingTime(content)}
          </span>
          <button
            className="bg-black text-white rounded-lg px-2"
            onClick={() => setIsClickComment(!isClickComment)}
          >
            Add comment
          </button>
        </div>

        <div>
          <button onClick={() => onLikeSubmit()}>
            {" "}
            <Heart color="red" fill={isClickHeart ? "red" : "white"} />{" "}
          </button>
        </div>
      </div>

      {isClickComment ? (
        <Comment
          value={commentInput}
          onComment={setCommentInput}
          onSubmit={onCommentSubmit}
        />
      ) : null}
    </div>
  );
};

export default AllBlogCard;
