import axios from "axios"
import { useEffect, useState } from "react"

const AllComment = ({blogId}:{blogId:string}) => {
   const [allCommentsForBlog,setCommentsForBlog] = useState<[]>([])

   useEffect(() => {
    async function fetchAllComments () {
        try {
            const res = await axios.get(`http://localhost:3000/comment/${blogId}`)
            setCommentsForBlog(res.data.comments)
        } catch (error) {
            if(error instanceof Error){
                console.log(error.message)
            }
        }
    }
    fetchAllComments()
   }, [blogId])

return (
  <>
    {allCommentsForBlog
      ? allCommentsForBlog.map((comment) => (
          <div className="border-b mt-1" key={comment._id}>
            <h2 className="font-medium">{comment?.userId.name.charAt(0).toUpperCase() + comment?.userId.name.slice(1)}</h2>

            <p className="mt-1.5">
              {comment.text}
            </p>
          </div>
        ))
      : null}
  </>
)
}

export default AllComment