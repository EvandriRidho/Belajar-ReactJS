import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import ErrorPage from "./Pages/error";
import LoginPage from "./Pages/login";
import ProductsPage from "./Pages/products";
import RegisterPage from "./Pages/register";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div className="flex justify-center items-center min-h-screen">
        <h1 className="text-3xl font-bold text-blue-600">Hello World</h1>
      </div>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/products",
    element: <ProductsPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
