import Chai from "./chai";
import { useState } from "react";

function App() {
  const user = "Pari maheshwari";

  const [count, setCounter] = useState(0);
  const addValue = () => {
    setCounter((currentCount) => Math.min(currentCount + 1, 20));
  };
  const subValue = () => {
    setCounter((currentCount) => Math.max(currentCount - 1, 0));
  };

  return (
    <>
      <h1>Sparsh Goyal with Hello, {user}</h1>
      <Chai />
      <h2>Counter Value {count}</h2>
      <button onClick={addValue}>Add Value</button>
      <button onClick={subValue}>Remove Value</button>
      <p>{count}</p>
    </>
  );
}

export default App;
