import { createBrowserRouter } from "react-router-dom";
import AboutUs from "../Pages/AboutUs/AboutUs";
import Blog from "../Pages/Blog/Blog";
import Categories from "../Pages/Categories/Categories";
import AddProduct from "../Pages/DashBoard/AddProduct/AddProduct";
import DashBoard from "../Pages/DashBoard/DashBoard";
import MyOrders from "../Pages/DashBoard/MyOrders/MyOrders";
import DashboardLayout from "../Pages/DashBoardLayOut/DashBoardLayOut";
import Home from "../Pages/Home/Home";
import SignIn from "../Pages/Login/SignIn/SignIn";
import SignUp from "../Pages/Login/SignUp/SignUp";
import Main from "../Pages/Main/Main";
import PageError from "../Pages/PageError/PageError";
import Products from "../Pages/Products/Products";
import PrivetRoute from "./PrivetRoute/PrivetRoute";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },

      {
        path: "/signin",
        element: <SignIn></SignIn>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "aboutus",
        element: <AboutUs></AboutUs>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/category",
        element: <Categories></Categories>,
      },
      {
        path: "/category/:id",
        element: (
          <PrivetRoute>
            {" "}
            <Products></Products>
          </PrivetRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/televisions/${params.id}`),
      },
      {
        path: "/*",
        element: <PageError></PageError>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout></DashboardLayout>,
    children: [
      {
        path: "/dashboard/myorders",
        element: <MyOrders></MyOrders>,
      },
      {
        path: "/dashboard/addProduct",
        element: <AddProduct></AddProduct>,
      },
    ],
  },
]);
