import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Admin from "./components/admin.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "./index.css";
// import About from "./components/about.jsx";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <h1>Home</h1>,
      },
      {
        path: "about",
        element: <h1>about</h1>,
      },
      {
        path: "contact",
        element: <h1>contact</h1>,
      },
    ],
  },
  {
    path: "/admin",
    element: <Admin />,
    children: [
      {
        path: "",
        element: <h2>Dashboard</h2>,
      },
      {
        path: "users",
        element: <h2>User Management</h2>,
      },
      {
        path: "products",
        element: <h2>Product Management</h2>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={routes} />
);
