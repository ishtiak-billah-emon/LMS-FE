
import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home/Home";
import Blogs from "@/pages/Blogs/Blogs";
import Register from "@/pages/Auth/Register/Register";
import AuthLayout from "@/layouts/AuthLayout";
import Login from "@/pages/Auth/Login/Login";
export const Router = createBrowserRouter([
  {
    path: '/',
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home
      },
      {
        path: 'blogs',
        Component: Blogs
      },

    ]
  },
  { 
    path: '/',
    Component: AuthLayout,
    children: [
      {
        path: 'login',
        Component: Login
      },
      {
        path: 'register',
        Component: Register
      }
    ]
  }
]);
