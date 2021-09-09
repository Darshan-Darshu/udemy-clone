import React, { useState } from "react";
import "./Product.css";
import StarIcon from "@material-ui/icons/Star";

function Product() {
  const [rating] = useState(
    Math.floor(Math.random() * (5 - 1)) + 1
  );

  const [highestRated] = useState(Math.random() < 0.5);
  const [price] = useState(
    Math.floor(Math.random() * 10000)
  );

  return (
    <div className="product">
      <div className="product__image">
        <img
          src="https://img-c.udemycdn.com/course/240x135/1409142_1879_8.jpg"
          alt=""
        />
      </div>
      <div className="product__details">
        <h1>
          The Coding Interview Bootcamp: Algorithms + Data
          Structures
        </h1>
        <p>Stephen Gride</p>
        <div className="product__rating">
          <p className="product__ratingNumber">4.8</p>
          <div className="product__ratingStar">
            {Array(rating)
              .fill()
              .map((_, i) => (
                <StarIcon
                  key={i}
                  className="product__star"
                />
              ))}
          </div>
          <p className="product__ratingPeople">(12,321)</p>
        </div>
        <h2 className="product__price">${price}</h2>
        {highestRated && (
          <h6 className="product__btn">Highest Rated</h6>
        )}
        {!highestRated && (
          <h6 className="product__btn yellow">
            Bestseller
          </h6>
        )}
      </div>
    </div>
  );
}

export default Product;
