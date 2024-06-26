import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import City from "./pages/City.jsx";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/:ville",
    element: <City />,
    loader: ({ params }) => {
      return fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${params.ville}&appid=be2ca3b8b2cc729c8268e5b846ba6853`
      )
        .then((res) => res.json())
        .then((json) => json);
    },
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
