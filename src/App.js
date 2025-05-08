// Level2
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/About";
import Profile from "./pages/Profile";
import { useContext } from "react";
import ThemeContext from "./context/ThemeContext";
import Signup from './pages/Sign-up';
import Signin from './pages/Sign-in';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <h1 style={{textAlign:'center' , color:'red'}}>SORROY! Page Not Found.........</h1>,
  },

  {
    path: "/about",
    element: <About />,
  },

  {
      path: "/signin",
    element: <Signin />,
  },
  {
      path: "/signup",
    element: <Signup />,
  },



  {
    path: "/profile",
    element: <Profile />,
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
