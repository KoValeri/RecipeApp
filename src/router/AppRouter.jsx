import React from "react";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import RootLayout from "@/pages/RootLayout";
import HomePage from "@/pages/HomePage";
import LoginPage from '@/pages/LoginPage';
import RecipePage from '@/pages/RecipePage';
import PublickPage from '@/pages/PublickPage';
import { ROUTES } from "@/configs/routesConfig";

import PublicRoute from "@/router/PublicRoute";
import PrivateRoute from "@/router/PrivateRoute";

const isLogin = true;

const router = createBrowserRouter([
    {
        element: <PublicRoute isLogin={isLogin}/>,
        children: [
            { path: ROUTES.LOGIN, element: <LoginPage />},
            { path: ROUTES.PUBLICK, element: <PublickPage /> },
        ],
    },
    { 
        element: <PrivateRoute isLogin={isLogin}/>,
        children: [
            { path: ROUTES.HOME, element:  <RootLayout />,
                children: [
                    { path: ROUTES.HOME, element:  <HomePage /> },
                    { path: ROUTES.RECIPE, element:  <RecipePage /> }     
                ]
            },
        ]
    }
]);

export default function AppRouter(){
    return <RouterProvider router={router} />;
}