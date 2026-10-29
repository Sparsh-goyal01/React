import Chai from "./chai";
import React, { useState } from "react";

function App() {
  const user = "Pari maheshwari";

  

  // HOOKS USE

  /* let [count, setCounter] = useState(15);
  const addValue = () => {
    if(count < 20)
      count += 1;
    setCounter(count);
  }
   const subValue = () => {
    if(count > 0)
      count -= 1;
    setCounter(count);
  } */

  return (
    <>
      <h1>Sparsh Goyal with Hello, {user}</h1>
      <h2>Counter Value {count}</h2>
      <button onClick={addValue}>Add Value</button>
      <button onClick={subValue}>Remove Value</button>
      <p>{count}</p>
    </>
  );
}

export default App;
