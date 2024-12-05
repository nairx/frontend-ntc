import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function Login() {
  const [email,setEmail] = useState()
  const [pass,setPass] = useState()
  const Navigate = useNavigate();
  const handleSubmit = () => {
    Navigate("/signup");
  };
  const url = "http://localhost:8080/find"
  const handleLogin = async () => {
    const result = await axios.post(url,{email,pass})
  }
  return (
    <div>
      Login
      <p>
        <input type="text" onChange={(e)=>setEmail(e.target.value)} placeholder="Enter Email"></input>
      </p>
      <p>
        <input type="password" onChange={(e)=>setPass(e.target.value)} placeholder="Enter Password"></input>
      </p>
      <button onClick={handleLogin}>Login</button>
      <hr></hr>
      <button onClick={handleSubmit}>Create Account</button>
    </div>
  );
}
