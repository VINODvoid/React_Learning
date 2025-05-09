import { useState } from "react";


function App() {
  const [counter , setCounter] = useState(0)
  // let counter = 15
  const addvalue = () => {
    // counter += 1;
    if(counter >=20)
    {
      setCounter(20)
    
    }
    else
    setCounter(counter +1)
    
  }
  const removevalue = () => {
    if(counter <= 0)
    {
      setCounter(0)
    }
    else{
      setCounter(counter -1)
    }
    
    

  }
  return (
    <>
     <h1> Dynamic Counter  </h1>
      
      <button
        onClick={addvalue}>+</button>
      <br />
      <hr />
      <br />
      <h2>
        Counter Value is {counter}</h2>
      <hr />
      <br />
      
      <button onClick={removevalue}>-</button>

    </>

  )
}

export default App;