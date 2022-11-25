import { createBrowserRouter } from "react-router-dom"
import AboutUs from "../Pages/AboutUs/AboutUs"
import Home from "../Pages/Home/Home"
import SignIn from "../Pages/Login/SignIn/SignIn"
import SignUp from "../Pages/Login/SignUp/SignUp"
import Main from "../Pages/Main/Main"
import PageError from "../Pages/PageError/PageError"

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/signin',
                element: <SignIn></SignIn>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: 'aboutus',
                element: <AboutUs></AboutUs>
            },
            {
                path: '/*',
                element: <PageError></PageError>
            }
        ]
    }
])