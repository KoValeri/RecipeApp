import React from "react";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import RootLayout from "@/pages/RootLayout";
import HomePage from "@/pages/HomePage";
import LoginPage from '@/pages/LoginPage';
import RecipePage from '@/pages/RecipePage';
import { ROUTES } from "@/configs/routesConfig";
import { ReduxProvider } from "@/providers/ReduxProvider";
import AppRouter from "@/router/AppRouter";

// const router = createBrowserRouter([
//   {
//     path: ROUTES.HOME,
//     element: <RootLayout />,
//     children: [
//       { path: ROUTES.HOME, element:  <HomePage /> },
//       { path: ROUTES.RECIPE, element:  <RecipePage /> }
//     ],
//   },
//   { path: ROUTES.LOGIN, element: <LoginPage /> }
// ]);

// function App() {
//   return (
//     <ReduxProvider>
//       <RouterProvider router={router} />
//     </ReduxProvider>
//   )
// }

function App() {
  return (
    <ReduxProvider>
      <AppRouter />
    </ReduxProvider>
  )
}

export default App;
