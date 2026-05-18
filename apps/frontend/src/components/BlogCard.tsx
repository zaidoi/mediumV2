import { Avatar } from "@mui/material";

const BlogCard = ({ title, content, date, author }) => {
  const dateParse = new Date(date);
  return (
    <div className=" flex flex-col  h-full  md:flex md:flex-row p-4 max-w-5xl gap-5 md:gap-4">
      <div className="flex flex-col gap-4  md:w-7xl ">
        <h1 className="text-3xl font-bold">
          Taxing Laughter:The Joke Tax Chronicles
        </h1>
        <p className="text-gray-500 text-base ">Posted on August 24,2026</p>
        <p className="text-balance">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque
          delectus nulla, quidem ipsam culpa vel incidunt atque repellat tempora
          mollitia asperiores ullam aliquam reiciendis. Laborum velit quam
          temporibus ab facere explicabo et tenetur, quod illum esse sed
          inventore aperiam qui voluptatem vero quibusdam praesentium facilis
          atque pariatur in dolore. 
        </p>
        <div className="flex justify-between mt-1 ">
          <span className="text-right md:text-left">
            <button className="bg-red-600 p-2 rounded">Delete</button>
          </span>
          <span className="text-right">
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
            <h2 className="font-bold text-lg">Jokester</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe
              eaque aperiam autem quibusdam nulla voluptatum praesentium nisi
              non quod consectetur.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
