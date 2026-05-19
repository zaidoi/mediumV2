
import Form from '../components/Form'
import axios from 'axios'
import type { SignupInput } from '@repo/common/src/zod/models'
import { useNavigate } from 'react-router-dom'

const Login = () => {

  
const navigate  = useNavigate()
  const onSubmit = async (data:SignupInput) => {
   
    try {
      const res = await axios.post("http://localhost:3000/user/login",data);

      localStorage.setItem('token',res.data.token)
      navigate('/blogs')
    } catch (error) {
      if(error instanceof Error){
        console.log(error.message)
      }
    }
  }



  return (
    <div className='grid md:grid-cols-2 h-screen'>

      <div className='flex justify-center items-center'>
        <Form type='login' onSubmit={onSubmit}/>
      </div>

      <div className='flex justify-center items-center'>

       <div className='hidden md:block'>
         <h1 className='text-4xl font-bold'>Ready to connect to the <span className='text-amber-600'>WORLD!</span></h1>
        <p>--Medium</p>
       </div>

      </div>

    </div>
  )
}

export default Login