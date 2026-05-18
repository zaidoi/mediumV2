import { useNavigate } from "react-router-dom"


const Navbar = ({display}:{display?:string}) => {
  const navigate = useNavigate()
  return (
    <div className='flex justify-between py-4 px-10 shadow'>
      <div onClick={()=>navigate('/blogs')}>
        <h1 className='font-bold text-xl '>Medium</h1>
      </div>
      <div>
       {display ?  <button  onClick={() => navigate('/create')} className='bg-green-700 text-white px-3 py-1 rounded'>Create</button> : null}
      </div>
    </div>
  )
}

export default Navbar