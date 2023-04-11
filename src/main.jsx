import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./components/Home/Home";
import Main from "./components/Layout/Main";
import OrderReview from "./components/OrderReview/OrderReview";
import GrandPa from "./components/GrandPa/GrandPa";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("tshirts.json"),
      },
      {
        path: "review",
        element: <OrderReview></OrderReview>,
      },
      {
        path: "/grandpa",
        element: <GrandPa></GrandPa>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
