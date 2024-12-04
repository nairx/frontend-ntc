import React from "react";
import { useEffect,useState } from "react";
import "./Main.css";
import axios from "axios";
export default function Main() {
  const [products, setProducts] = useState([]);
  const url = "http://localhost:8080/";
  const showProducts = async () => {
    const response = await axios.get(url);
    setProducts(response.data);
  };
  useEffect(() => {
    showProducts();
  }, []);

  // const products = [
  //   { name: "Product 1", price: 34 },
  //   { name: "Product 2", price: 74 },
  //   { name: "Product 3", price: 50 },
  // ];

  return (
    <div className="row">
      {products && products.map((value, index) => (
        <div key={index} className="box">
          <h3>{value.name}</h3>
          <h4>${value.price}</h4>
          <button>Add to Cart</button>
        </div>
      ))}
    </div>
  );
}
