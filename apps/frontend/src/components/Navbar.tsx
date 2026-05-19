import { useNavigate } from "react-router-dom"


const Navbar = ({display}:{display?:string}) => {
  const navigate = useNavigate()
  return (
    <div className='flex justify-between py-4 px-10 shadow'>
      <div onClick={() => navigate('/blogs')}>
        <h1 className='font-bold text-xl '>Medium</h1>
      </div>
      <div className="flex gap-4">
       {display ?  <button  onClick={() => navigate('/create')} className='bg-green-700 text-white px-3 py-1 rounded'>Create</button> : null}
       <button className="bg-red-600 py-1 rounded px-3 text-white">Logout</button>
      </div>
    </div>
  )
}

export default Navbar