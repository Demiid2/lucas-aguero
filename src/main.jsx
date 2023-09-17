import * as React from "react";
import * as ReactDOM from "react-dom/client";
import Home from "./routes/Home";
import ErrorPage from "./routes/error";
import Nosotros from './routes/Nosotros';
import Fiscalizacion from "./routes/Fiscalizacion";
import Proyecto from "./routes/Proyecto";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path:'/Nosotros',
    element: <Nosotros />
  },
  {
    path:'/Fiscalizacion',
    element: <Fiscalizacion />
  },
  {
    path:'/Proyecto',
    element: <Proyecto />
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
