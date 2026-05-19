import { useEffect, useState } from "react"
import BlogCard from "../components/BlogCard"
import Navbar from "../components/Navbar"


const Blog = () => {
  const [loading,setLoading ] = useState(true)

  useEffect(()=>{})
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