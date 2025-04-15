import { createContext, useReducer } from "react";
const ThemeContexttt = createContext();

const initialData = { theme: localStorage.getItem("myTheme") === null ? "Light" : localStorage.getItem("myTheme") };
const reducer = (firstState , action) => {
  switch (action.type) {
    case "ToggleTheme":
      return{...firstState , theme : action.newValue};
  
    default:
      return firstState;
  }
}

export function ThemeProvider({ children }) {
  const [firstState, dispatch] = useReducer(reducer, initialData);

  const ToggleTheme = (newTheme) => {
    localStorage.setItem("myTheme" , newTheme )
    dispatch({type : "ToggleTheme" , newValue : newTheme })
  }

  return (
     <ThemeContexttt.Provider value={{ ...firstState , ToggleTheme}}>
      {children}
     </ThemeContexttt.Provider>
  );
}

export default ThemeContexttt;