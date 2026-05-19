import type { BlogInput } from "@repo/common/src/zod/models";
import { useState } from "react";

type dataType = {
    onCreatePost(data:BlogInput):void
}

const Editor = ({ onCreatePost }:dataType) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  return (
    <div className="flex flex-col  h-full p-2 bg-gray-100  w-md md:w-4xl max-w-4xl md:p-4 shadow">
      <input
        type="text"
        className=" p-2 text-lg md:p-6 md:text-2xl font-semibold border-none outline-none"
        placeholder="Title.."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        className=" py-4 px-2 outline-none min-h-90"
        placeholder="Tell your Story..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <span className="text-right mt-2">
        <button
          className="bg-green-600 text-white px-2 py-1 rounded"
          onClick={()=>onCreatePost({title,content})}
        >
          Upload
        </button>
      </span>
    </div>
  );
};

export default Editor;
