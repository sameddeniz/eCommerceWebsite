import React from "react";
import ReactDOM from "react-dom/client";
import HomePage from "./Pages/HomePage.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProteinPage from "./Pages/ProteinPage.tsx";
import LoginSignupPage from "./Pages/LoginSignupPage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/index.html",
    element: <HomePage />,
  },
  {
    path: "/protein",
    element: <ProteinPage />,
  },
  {
    path: "/login",
    element: <LoginSignupPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
