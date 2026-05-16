import { useState } from "react";
import { Link } from "react-router-dom";
import type { SignupInput } from "@repo/common/src/zod/models";


type Props = {
  type: "signup" | "login";
  onSubmit: (data: SignupInput) => void;
};

const Form = ({ type, onSubmit }: Props) => {
  const [formDetail, setFormDetail] = useState<SignupInput>({
    name: "",
    email: "",
    password: "",
  });

const handleSubmit = (e:React.SubmitEvent) => {
  e.preventDefault();
  onSubmit(formDetail)
}

  return (
    <div className="flex flex-col max-w-4xl  gap-2  items-center justify-center p-15  shadow-2xs rounded">

      <div className="flex flex-col items-center gap-1">
        <h1 className="text-3xl md:text-4xl font-bold">
          {type === "signup" ? "Create an Account" : "Welcome Back"}
        </h1>
        <h4 className="text-balance font-normal">
          {type === "signup"
            ? "Already have an account?"
            : "Don't have an account"}{" "}
          <span className=" underline underline-offset-2">
            <Link to={"/login"}>{type === "signup" ? "Login" : "Signup"}</Link>
          </span>
        </h4>
      </div>

      <form
        className="flex flex-col gap-1.5"
        onSubmit={handleSubmit}
      >
        {type === "signup" && (
          <>
            <label htmlFor="" className="text-lg">
              Name
            </label>
            <input
              className="w-full border border-gray-500 p-2 focus:outline shadow  focus:border-black focus:outline-black text-md rounded"
              type="text"
              placeholder="Enter your Name"
              onChange={(e) =>
                setFormDetail({ ...formDetail, name: e.target.value })
              }
              value={formDetail.name}
              required
            />
          </>
        )}

        <label htmlFor="" className="text-lg">
          Email
        </label>
        <input
          type="text"
          className="w-full border border-gray-500 p-2 focus:outline shadow  focus:border-black focus:outline-black text-md rounded"
          placeholder="xyz@gmail.com"
          onChange={(e) =>
            setFormDetail({ ...formDetail, email: e.target.value })
          }
          value={formDetail.email}
          required
        />

        <label htmlFor="" className="text-lg">
          Password
        </label>
        <input
          type="password"
          className="w-full border border-gray-500 p-2 focus:outline shadow  focus:border-black focus:outline-black rounded"
          onChange={(e) =>
            setFormDetail({ ...formDetail, password: e.target.value })
          }
          value={formDetail.password}
          required
        />

        <button
          className="bg-amber-400  hover:bg-amber-500 px-2 py-2 rounded-lg w-auto  text-lg mt-2"
          type="submit"
        >
          {type === "signup" ? "Signup" : "Login"}
        </button>
      </form>

    </div>
  );
};

export default Form;
