
import './App.css'

function App() {
let person = "mostafa";

const ChangeName = () => {
 person = "ElRAYK";
 console.log("ElRAYK");
}
  return (
    <>
      
    <h1>My name is : {person} </h1>
        <button onClick={ChangeName} >
          Change name
        </button>
      

    
    </>
  )
}

export default App
