// src/components/Display.js
import React from "react";
import product from "../product";

function Display() {
  return (
    <div>
      <h2>{product.name}</h2>
      <p>{product.price}</p>
      <p>{product.description}</p>
      <img src={product.imageUrl} alt={product.name} />
    </div>
  );
}

export default Display;
