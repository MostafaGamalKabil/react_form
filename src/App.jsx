import './App.css'
import './theme.css'
import { useState } from 'react';
function App() {

  const [person , ChangeName] = useState("Mostafa gamal")
  const [age , ChangeAge] = useState(28)
  const [increment , setIncrement] = useState(0)
  const [theme , settheme] = useState("")

  return (
    <>

<div className={`App ${theme}`}>
<div>
        <button onClick={() => {settheme("light")}} style={{marginRight: "26px"}}>Light</button>
        <button onClick={() => {settheme("dark")}} style={{marginRight: "26px"}}>Dark</button>
        <button onClick={() => {settheme("grey")}} style={{marginRight: "26px"}}>Grey</button>
        <button onClick={() => {settheme("pink")}} style={{marginRight: "26px"}}>Pink</button>
</div>



      
    <h1  style={{marginTop: "66px"}}>My name is : {person} </h1>
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

        </div>
    </>
  )
}

export default App
