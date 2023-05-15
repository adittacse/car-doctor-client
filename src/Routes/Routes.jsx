import {createBrowserRouter} from "react-router-dom";
import React from "react";
import Main from "../Layout/Main.jsx";
import Home from "../Pages/Home/Home/Home.jsx";
import Login from "../Pages/Login/Login.jsx";

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
            }
        ]
    },
]);

export default router;