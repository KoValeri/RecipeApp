import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from "@/pages/RootLayout";
import HomePage from "@/pages/Home/HomePage";
import LoginPage from '@/pages/LoginPage';
import RecipeDetailsPage from '@/pages/RecipeDetailsPage';
import RegisterPage from "@/pages/RegisterPage";
import FavoritesPage from "@/pages/FavoritesPage";
import { ROUTES } from "@/configs/routesConfig";
import PrivateRoute from "@/router/PrivateRoute";

const router = createBrowserRouter([
    { path: ROUTES.LOGIN, element: <LoginPage /> },
    { path: ROUTES.REGISTER, element: <RegisterPage /> },

    {
        element: <RootLayout />,
        children: [
            { path: ROUTES.HOME, element: <HomePage /> },
            { path: ROUTES.RECIPE, element: <RecipeDetailsPage /> },
            {
                path: ROUTES.FAVORITES,
                element: (
                <PrivateRoute>
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