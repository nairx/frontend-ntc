import React from "react";
import { useState } from "react";
export default function App2() {
  const [n1, setN1] = useState();
  const [n2, setN2] = useState();
  const [result, setResult] = useState();
  const handleAdd = () => {
    setResult(Number(n1) + Number(n2));
  };
  return (
    <div>
      <p>
        <input type="number" onChange={(e) => setN1(e.target.value)}></input>
      </p>
      <p>
        <input type="number" onChange={(e) => setN2(e.target.value)}></input>
      </p>
      <button onClick={handleAdd}>Add</button>
      <hr></hr>
      {result}
    </div>
  );
}
