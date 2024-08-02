import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Admin from "./components/admin.jsx";
import {
  createBrowserRouter,
  RouterProvider,
  redirect,
} from "react-router-dom";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "./index.css";
import Home from "./components/home.jsx";
import Login from "./components/login.jsx";
function checkLogin() {
  let access_token = localStorage.getItem("access_token");
  if (access_token) {
    return redirect("/reactASM");
  } else {
    return null;
  }
}

function checkLoginHome() {
  let access_token = localStorage.getItem("access_token");
  if (access_token) {
    return null;
  } else {
    return redirect("/reactASM/login");
  }
}

const routes = createBrowserRouter([
  {
    path: "/reactASM",
    element: <App />,
    children: [
      {
        path: "",
        loader: checkLoginHome,
        element: <Home />,
      },
      {
        path: "about",
        element: <h1>about</h1>,
      },
      {
        path: "contact",
        element: <h1>contact</h1>,
      },
      {
        path: "login",
        loader: checkLogin,
        element: <Login />,
      },
    ],
  },
  {
    path: "reactASM/admin",
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
