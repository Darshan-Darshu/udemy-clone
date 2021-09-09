import React from "react";
import Product from "./Product";
import "./ProductSection.css";

function ProductSection() {
  return (
    <div className="productSection">
      <h1>Recommended for you</h1>
      <div className="productSection__container">
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </div>
  );
}

export default ProductSection;
