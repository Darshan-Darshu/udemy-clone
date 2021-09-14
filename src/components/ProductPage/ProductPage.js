import React from "react";
import ProductSection from "./ProductSection";
import "./ProductPage.css";

function ProductPage() {
  return (
    <div className="productPage">
      <h1>What to learn next</h1>
      <ProductSection />
      <ProductSection />
      <ProductSection />
      <ProductSection />
      <ProductSection />
      <ProductSection />
    </div>
  );
}

export default ProductPage;
