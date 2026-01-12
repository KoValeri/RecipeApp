import React from "react";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import './App.css';
import RootLayout from "./pages/RootLayout";
import HomePage from "./pages/HomePage";
import LoginPage from './pages/LoginPage';
import RecipePage from './pages/RecipePage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { path: '/', element:  <HomePage /> },
      { path: '/recipe/:id', element:  <RecipePage /> }
    ],
  },
  { path: '/login', element: <LoginPage /> }
]);

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  )
}

export default App;
