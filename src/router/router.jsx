import { createBrowserRouter } from "react-router-dom";
import Root from "../pages/Root";
import React from "react";
import Favorites from "../pages/Favorites";
import Orders from "../pages/Orders";

const HomePage = React.lazy(()=>import('../pages/HomePage'))
const router = createBrowserRouter([
    {
        path:'/',
        element: <Root />,
        children:[
            {
                path:'/',
                element: <HomePage />,
                index:true
            },
            {
                path:'/favorites',
                element: <Favorites />
            },
            {
                path:'/orders',
                element:<Orders />
            }
        ]
        
    }
])

export default router