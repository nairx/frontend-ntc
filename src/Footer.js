import React from "react";
import Temp from "./Temp";

import { useState } from "react";
export default function Footer() {
  const [name, setName] = useState();
  console.log("Reloaded")
  const greet = () => {
    alert(name);
       };
  return (
    <div>
      <hr></hr>
      <input type="text" onChange={(e)=>setName(e.target.value)}></input>
      <button onClick={greet}>Click</button>
      <Temp name="John" />
      <h3>@Copyright 2024. All rights reserved.</h3>
    </div>
  );
}
