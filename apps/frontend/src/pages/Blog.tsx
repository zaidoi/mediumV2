import BlogCard from "../components/BlogCard"
import Navbar from "../components/Navbar"


const Blog = () => {
  return (
    <>
    <Navbar display="true"/>
    <div className="flex justify-center mt-2.5 h-creen">
        <BlogCard/>
    </div>
    </>
  )
}

export default Blog