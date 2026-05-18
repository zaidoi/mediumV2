

const Comment = () => {
  return (
    <div className="bg-gray-300 p-4 flex justify-between gap-3 items-center">
        <textarea type="text" className="bg-white shadow-2xl rounded-lg w-full p-2"
        placeholder="Add Comment.." />
        <button className="bg-green-600 text-white px-2 py-1 rounded-md max-h-10 ">Submit</button>
    </div>
  )
}

export default Comment