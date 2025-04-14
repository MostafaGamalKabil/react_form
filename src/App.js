// Level2
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home";
import HTML from "./pages/html";
import Css from "./pages/css";
import Javascript from "./pages/javascript";
import { useContext } from "react";
import ThemeContext from "./context/ThemeContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <h1 style={{textAlign:'center' , color:'red'}}>SORROY! Page Not Found.........</h1>,
  },

  {
    path: "/html",
    element: <HTML />,
  },

  {
    path: "/css",
    element: <Css />,
  },
  {
    path: "/javascript",
    element: <Javascript />,
  },
]);




function App() {
  const {theme} = useContext(ThemeContext)
  return (

    <div className={`${theme}`}>
      <RouterProvider router={router} />
    </div>
  
  )  
}

export default App;
