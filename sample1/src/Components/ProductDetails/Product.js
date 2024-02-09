import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./Product.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import product1 from "../../Images/product1.jpg";
import product2 from "../../Images/product2.webp";
import product3 from "../../Images/product3.webp";
import product4 from "../../Images/product4.webp";
import product5 from "../../Images/product5.webp";
import product6 from "../../Images/product6.webp";
import product7 from "../../Images/product7.webp";

function Product() {
  const products = [
    {
      image: product1,
      price: "$20",
    },
    {
      image: product2,
      price: "$1.99",
    },
    {
      image: product3,
      price: "$5.49",
    },
    {
      image: product4,
      price: "$2.00",
    },
    {
      image: product5,
      price: "$15.49",
    },
    {
      image: product6,
      price: "$10.99",
    },
    {
      image: product7,
      price: "$3.00",
    },
    {
      image: product1,
      price: "$20",
    },
    {
      image: product2,
      price: "$1.99",
    },
    {
      image: product3,
      price: "$5.49",
    },
    {
      image: product4,
      price: "$2.00",
    },
    {
      image: product5,
      price: "$15.49",
    },
    {
      image: product6,
      price: "$10.99",
    },
    {
      image: product7,
      price: "$3.00",
    },
    {
      image: product1,
      price: "$20",
    },
    {
      image: product2,
      price: "$1.99",
    },
    {
      image: product3,
      price: "$5.49",
    },
    {
      image: product4,
      price: "$2.00",
    },
    {
      image: product5,
      price: "$15.49",
    },
    {
      image: product6,
      price: "$10.99",
    },
    {
      image: product7,
      price: "$3.00",
    },
    {
      image: product1,
      price: "$20",
    },
    {
      image: product2,
      price: "$1.99",
    },
    {
      image: product3,
      price: "$5.49",
    },
    {
      image: product4,
      price: "$2.00",
    },
    {
      image: product5,
      price: "$15.49",
    },
    {
      image: product6,
      price: "$10.99",
    },
    {
      image: product7,
      price: "$3.00",
    },

    // product2,
    // product3,
    // product4,
    // product5,
    // product6,
    // product7,
    // product4,
    // product5,
    // product6,
    // product7,
  ];

  const [productCounts, setProductCounts] = useState(
    Array(products.length).fill(0)
  );

  const handleIncrement = (index) => {
    setProductCounts((prevCounts) => {
      const newCounts = [...prevCounts];
      newCounts[index] += 1;
      return newCounts;
    });
  };

  const handleDecrement = (index) => {
    if (productCounts[index] > 1) {
      setProductCounts((prevCounts) => {
        const newCounts = [...prevCounts];
        newCounts[index] -= 1;
        return newCounts;
      });
    }
  };
  return (
    <div>
      <Header />
      <div className="product-container">
        <h1 className="product-heading">Products</h1>

        <div className="product-logo-container">
          {products.map((product, index) => (
            <figure
              key={index}
              // style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              <div className="product-card">
                <img
                  src={product.image}
                  className="product-logo"
                  alt={`Product ${index}`}
                />
                <div className="product-price-container">
                  <p className="product-price">{product.price}</p>
                  <div className="product-count-container">
                    <button
                      className="product-btn"
                      onClick={() => handleDecrement(index)}
                    >
                      -
                    </button>
                    <span className="product-value">
                      {productCounts[index]}
                    </span>
                    <button
                      className="product-btn"
                      onClick={() => handleIncrement(index)}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            </figure>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Product;
