import { createBrowserRouter } from "react-router-dom";
import Root from "../pages/Root";
import React from "react";

const HomePage = React.lazy(()=>import('../pages/HomePage'))
const router = createBrowserRouter([
    {
        path:'/',
        element: <Root />,
        children:[
            {
                path:'/',
                element: <HomePage />
            }
        ]
        
    }
])

export default router