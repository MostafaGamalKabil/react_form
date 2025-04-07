import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {DataProvider} from './context/Datacontext.jsx';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Page2 from "./Page2.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/page2",
    element: <Page2/>,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <DataProvider>
    <RouterProvider router={router} />
    </DataProvider>
  </StrictMode>
);
