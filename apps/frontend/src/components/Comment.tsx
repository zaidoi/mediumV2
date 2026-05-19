

const Comment = ({value,onComment,onSubmit}) => {
  return (
    <div className="bg-gray-300 p-4 flex justify-between gap-3 items-center">
        <textarea type="text" className="bg-white shadow-2xl rounded-lg w-full p-2 outline-none"
        placeholder="Add Comment.."
        value={value}
        onChange={(e) => onComment(e.target.value)} />
        <button className="bg-green-600 text-white px-2 py-1 rounded-md max-h-10 " onClick={onSubmit}>Submit</button>
    </div>
  )
}

export default Comment