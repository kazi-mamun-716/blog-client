import { createBrowserRouter } from "react-router";
import Home from "../pages/Home/Home";
import MainTemplate from "../Template/MainTemplate";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import Post from "../pages/Post/Post";
import SinglePost from "../pages/Post/SinglePost";
import Login from "../pages/Login/Login";
import ProtectedRoute from "../components/ProtectedRoute/ProtectedRoute";
import Dashboard from "../pages/Dashboard/Dashboard";
import Register from "../pages/Register/Register";
import NotFound from "../pages/NotFound/NotFound";

export const MainRouter = createBrowserRouter([
    {
    path: "/",
    element: <MainTemplate/>,
    children: [
        { 
            index: true,
            element: <Home />
        },
        {
            path: "about",
            element: <About />
        },
        {
            path: "contact",
            element: <Contact />
        },
        {
            path: "posts",
            element: <Post />
        },
        {
            path: "posts/:id",
            element: <SinglePost />
        },
        {
            path: 'dashboard',
            element: <ProtectedRoute><Dashboard/></ProtectedRoute>
        },
        {
            path: "login",
            element: <Login />
        },
        {
            path: "register",
            element: <Register />
        },
        {
            path: "*",
            element: <NotFound />
        }
    ]
  },

])