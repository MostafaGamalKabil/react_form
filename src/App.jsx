import './App.css'
import { useState } from 'react';
function App() {

  const [person , ChangeName] = useState("Mostafa gamal")
  const [age , ChangeAge] = useState(28)
  const [increment , setIncrement] = useState(0)


  return (
    <>
      
    <h1>My name is : {person} </h1>
        <button onClick={() => {ChangeName("ELRAYEK")}} >
          Change name
        </button>
      <br />
      <br />
      <br />
          
    <h1>My name is : {age} </h1>
        <button onClick={() => {ChangeAge(20)}} >
          Change name
        </button>
      <br />
      <br />
      <br />
          

        <button onClick={() => {setIncrement(increment+1)}} >
          count {increment}
        </button>

    
    </>
  )
}

export default App
