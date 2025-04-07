import { createContext, useReducer } from "react";
const ThemeContexttt = createContext();

const initialData = { name: "mostafa", age: 20, count: 0, theme: "light" };
const reducer = (state, action) => {
    switch (action.type) {
      case "CHANGE_NAME":
        return { ...state, name: action.newValue };
  
      case "CHANGE_AGE":
        return { ...state, age: action.newAGE };
  
      case "CHANGE_COUNT":
        return { ...state, count: action.newCount };
      case "CHANGE_THEME":
        return { ...state, theme: action.newTHEME };
  
      default:
        return state;
    }
  };

export function DataProvider({ children }) {
  const [firstState, dispatch] = useReducer(reducer, initialData);

  const changeName = () => {
    dispatch({type : "CHANGE_NAME" , newValue : "ELRAYEK👌"})
  }


  return (
    <ThemeContexttt.Provider value={{ ...firstState  , changeName}}>
      {children}
    </ThemeContexttt.Provider>
  );
}

export default ThemeContexttt;
