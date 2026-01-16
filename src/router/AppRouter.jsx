import React from "react";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import RootLayout from "@/pages/RootLayout";
import HomePage from "@/pages/HomePage";
import LoginPage from '@/pages/LoginPage';
import RecipePage from '@/pages/RecipePage';
import RegisterPage from "@/pages/RegisterPage";
import FavoritesPage from "@/pages/FavoritesPage";
import { ROUTES } from "@/configs/routesConfig";

import PrivateRoute from "@/router/PrivateRoute";

const isLogin = false;

const router = createBrowserRouter([
    { path: ROUTES.LOGIN, element: <LoginPage /> },
    { path: ROUTES.REGISTER, element: <RegisterPage /> },

    {
        element: <RootLayout />,
        children: [
            { path: ROUTES.HOME, element: <HomePage /> },
            { path: ROUTES.RECIPE, element: <RecipePage /> },
            {
                path: ROUTES.FAVORITES,
                element: (
                <PrivateRoute isLogin={isLogin}>
                    <FavoritesPage />
                </PrivateRoute>
                )
            },
        ]
    }
]);

export default function AppRouter(){
    return <RouterProvider router={router} />;
}