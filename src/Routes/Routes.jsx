import {createBrowserRouter} from "react-router-dom";
import React from "react";
import Main from "../Layout/Main.jsx";
import Home from "../Pages/Home/Home/Home.jsx";
import Login from "../Pages/Login/Login.jsx";
import SignUp from "../Pages/SignUp/SignUp.jsx";
import Error from "../Pages/Error/Error.jsx";
import Checkout from "../Pages/Checkout/Checkout.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/signup",
                element: <SignUp></SignUp>
            },
            {
                path: "/checkout/:id",
                element: <Checkout></Checkout>,
                loader: ({params}) => fetch(`http://localhost:3000/services/${params.id}`)
            },
            {
                path: "*",
                element: <Error></Error>
            }
        ]
    },
]);

export default router;