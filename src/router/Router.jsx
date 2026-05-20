
import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home/Home";
import Blogs from "@/pages/Blogs/Blogs";
import Register from "@/pages/Auth/Register/Register";
import AuthLayout from "@/layouts/AuthLayout";
import Login from "@/pages/Auth/Login/Login";
import Courses from "@/pages/Courses/Courses";
import CourseDetails from "@/pages/Courses/CourseDetails";
import Learn from "@/pages/Learn/Learn";

export const Router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "blogs",
        Component: Blogs,
      },
      {
        path: "courses",
        Component: Courses,
      },
      {
        path: "courses/:slug",
        Component: CourseDetails,
      },
      {
        path: "learn/:slug/:lessonId",
        Component: Learn,
      },
    ],
  },
  {
    path: "/",
    Component: AuthLayout,
    children: [
      {
        path: "login",
        Component: Login,
      },
      {
        path: "register",
        Component: Register,
      },
    ],
  },
]);
