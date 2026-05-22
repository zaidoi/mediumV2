import { createBrowserRouter } from "react-router-dom";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import AllBlog from "./pages/AllBlog";
import Blog from "./pages/Blog";
import CreateBlog from "./pages/CreateBlog";
import UpdateBlog from "./pages/UpdateBlog";

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
    },{
        path:"/blog/:id",
        element:<Blog/>
    },{
        path:"/create",
        element:<CreateBlog/>
    },{
        path:"/update/:id",
        element:<UpdateBlog/>
    }
])


export default router