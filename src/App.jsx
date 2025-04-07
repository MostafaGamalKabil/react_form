import { Link } from "react-router-dom";
import "./App.css";
import "./theme.css";
import { useReducer } from "react";
import { useContext } from "react";
import Datacontext from "./context/Datacontext";

const intialData = { name: "mostafa", age: 20, count: 0, theme: "light" };

// const reducer = (state, action) => {
//   switch (action.type) {
//     case "CHANGE_NAME":
//       return { ...state, name: action.newValue };

//     case "CHANGE_AGE":
//       return { ...state, age: action.newAGE };

//     case "CHANGE_COUNT":
//       return { ...state, count: action.newCount };
//     case "CHANGE_THEME":
//       return { ...state, theme: action.newTHEME };

//     default:
//       return state;
//   }
// };

function App() {
  const { name , changeName} = useContext(Datacontext);
  // const [allData, dispatch] = useReducer(reducer, intialData);
  return (
    <>
      <div className={`App`}>
        {/* <button
          onClick={() => {
            dispatch({
              type: "CHANGE_THEME",
              newTHEME: allData.theme == "light" ? "dark" : "light",
            });
          }}
          style={{ marginBottom: "44px", marginTop: "100px" }}
        >
          Toggle Theme
        </button> */}

        <>
          <Link to="/page2">Go to page2</Link>

          {/* <div
            onChange={() => {
              dispatch({
                type: "CHANGE_THEME",
                newTHEME: allData.theme == "dark" ? "light" : "dark",
              });
            }}
            style={{ marginBottom: "50px" }}
            className="btn-container"
          >
            <i className="fa fa-sun-o" aria-hidden="true" />
            <label className="switch btn-color-mode-switch">
              <input
                type="checkbox"
                name="color_mode"
                id="color_mode"
                defaultValue={1}
              />
              <label
                htmlFor="color_mode"
                data-on="Dark"
                data-off="Light"
                className="btn-color-mode-switch-inner"
              />
            </label>
            <i className="fa fa-moon-o" aria-hidden="true" />
          </div> */}
        </>

        {/* <div>
          <button
            onClick={() => {
              dispatch({ type: "CHANGE_THEME", newTHEME: "light" });
            }}
            style={{ marginRight: "26px" }}
          >
            Light
          </button>
          <button
            onClick={() => {
              dispatch({ type: "CHANGE_THEME", newTHEME: "dark" });
            }}
            style={{ marginRight: "26px" }}
          >
            Dark
          </button>
          <button
            onClick={() => {
              dispatch({ type: "CHANGE_THEME", newTHEME: "grey" });
            }}
            style={{ marginRight: "26px" }}
          >
            Grey
          </button>
          <button
            onClick={() => {
              dispatch({ type: "CHANGE_THEME", newTHEME: "pink" });
            }}
            style={{ marginRight: "26px" }}
          >
            Pink
          </button>
        </div> */}

        <h1 style={{ marginTop: "66px" }}>My name is : {name} </h1>
        <button onClick={() => {
          changeName();
        }}>
          Change name
        </button>
        <br />
        <br />
        <br />

        {/* <h1>My Age is : {allData.age} </h1> */}
        {/* <button
          onClick={() => {
            dispatch({ type: "CHANGE_AGE", newAGE: 21 });
          }}
        >
          Change Age
        </button> */}
        <br />
        <br />
        <br />

        {/* <button
          onClick={() => {
            dispatch({ type: "CHANGE_COUNT", newCount: allData.count + 1 });
          }}
        >
          count {allData.count}
        </button> */}
      </div>
    </>
  );
}

export default App;
