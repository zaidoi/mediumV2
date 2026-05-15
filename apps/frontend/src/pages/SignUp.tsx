
import axios from "axios";
import { useNavigate } from "react-router-dom";
import type {SignupInput} from "@repo/common/src/zod/models"
import Form from "../components/Form";

const SignUp = () => {
 
  const navigate = useNavigate()

  const formCall = async (data:SignupInput) => {
    try {
      const res = await axios.post("http://localhost:3000/user/signup",data)

      console.log(res.data)
      
      navigate("/login")

    } catch (error) {
      if(error instanceof Error){
        console.log(error.message)
      }
    }
  };
  return (
    <div className="grid md:grid-cols-2 h-screen">
      <div className="flex justify-center items-center ">
        <Form type="signup" onSubmit={formCall} />
      </div>
      <div className="hidden md:flex justify-center items-center">
        <div className=" w-auto flex  flex-col gap-1.5" >
        <h1 className="text-3xl font-bold max-w-lg">"Share your thoughts with people around the world."</h1>
        <p className="font-baseline ">-- Zaid Badgujar</p>
      </div>
      </div>
    </div>
  );
};

export default SignUp;
