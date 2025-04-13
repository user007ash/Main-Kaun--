import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  RouterProvider,
  createBrowserRouter,
  Navigate,
  Outlet,
} from "react-router-dom";
import App from "./App.jsx";
import { Home } from "./Pages/Home.jsx";
import { NotFound } from "./Pages/NotFound.jsx";
import { CharacterGuess } from "./Pages/CharacterGuess.jsx";
import "./index.css";
import { Result } from "./Pages/Result.jsx";

const ProtectedRoutes = () => {
  let auth = { token: true };
  return auth.token ? <Outlet /> : <Navigate to="/CharacterGuess/:id" />;
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "CharacterGuess/:genre", element: <CharacterGuess /> },
      {
        element: <ProtectedRoutes />,
        children: [{ path: "/Result", element: <Result /> }],
      },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
