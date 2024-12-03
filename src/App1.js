import React from "react";
import { useState } from "react";
export default function App1() {
  const [num, setNum] = useState(0);
  const [result, setResult] = useState(0);
  const handleClick = () => {
    setResult(num*num)
  };
  return (
    <div>
      <p>
        <input type="number" onChange={(e) => setNum(e.target.value)}></input>
      </p>
      <button onClick={handleClick}>Click</button>
      <hr></hr>
      {result}
    </div>
  );
}
