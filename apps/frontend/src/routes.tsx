import { createBrowserRouter } from "react-router-dom";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import AllBlog from "./pages/AllBlog";

const router = createBrowserRouter([
    {
        path:"/",
        element:<SignUp/>
    },
    {
        path:"/login",
        element:<Login/>
    },{
        path:"/blogs",
        element:<AllBlog/>
    }
])


export default router