import {createBrowserRouter} from "react-router-dom";
import React from "react";
import Main from "../Layout/Main.jsx";
import Home from "../Pages/Home/Home.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            }
        ]
    },
]);

export default router;