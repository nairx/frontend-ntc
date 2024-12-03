import React from "react";

export default function Temp(props) {
 return ((props.name === "John") ? <h1>Java Student</h1> : <h1>Python Student</h1>)
}

// if (props.name === "John") {
//     return <h1>Java Student</h1>;
//   } else {
//     return <h1>Python Student</h1>;
//   }
