import {createBrowserRouter} from "react-router-dom";
import React from "react";
import Main from "../Layout/Main.jsx";
import Home from "../Pages/Home/Home/Home.jsx";
import Login from "../Pages/Login/Login.jsx";
import SignUp from "../Pages/SignUp/SignUp.jsx";
import Error from "../Pages/Error/Error.jsx";
import BookService from "../Pages/BookService/BookService.jsx";
import Bookings from "../Pages/Bookings/Bookings.jsx";
import PrivateRoute from "./PrivateRoute.jsx";

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
                path: "/book/:id",
                element: <PrivateRoute><BookService></BookService></PrivateRoute>,
                loader: ({params}) => fetch(`https://car-doctor-server-gray-eight.vercel.app/services/${params.id}`)
            },
            {
                path: "/bookings",
                element: <PrivateRoute><Bookings></Bookings></PrivateRoute>
            },
            {
                path: "*",
                element: <Error></Error>
            }
        ]
    },
]);

export default router;