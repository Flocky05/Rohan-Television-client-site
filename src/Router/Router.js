import { createBrowserRouter } from "react-router-dom"
import Home from "../Pages/Home/Home"
import SignIn from "../Pages/Login/SignIn/SignIn"
import SignUp from "../Pages/Login/SignUp/SignUp"
import Main from "../Pages/Main/Main"

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/signin',
                element: <SignIn></SignIn>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            }
        ]
    }
])