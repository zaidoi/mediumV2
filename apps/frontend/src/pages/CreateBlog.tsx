import Editor from "../components/Editor"
import Navbar from "../components/Navbar"


const MakeBlog = () => {
  return (
    <>
    <Navbar />
    <div className="flex justify-center  p-3 ">
      <Editor/>
    </div>
    </>
  )
}

export default MakeBlog