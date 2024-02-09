// import React, { useState } from "react";

// import { Link } from "react-router-dom";

// import logo from "../../Images/rsa-logo.png";

// import product1 from "../../Images/product1.jpg";
// import product2 from "../../Images/product2.webp";
// import product3 from "../../Images/product3.webp";
// import product4 from "../../Images/product4.webp";
// import product5 from "../../Images/product5.webp";
// import product6 from "../../Images/product6.webp";
// import product7 from "../../Images/product7.webp";

// import Product from "../ProductDetails/Product";

// import "./Testimonial.css";

// function Testimonial() {
//   return (
//     <div className="testimonial-container">
//       <div>
//         <h1 className="testimonial-heading">Products</h1>
//       </div>
//       <div className="testimonial-logo-container">
//         <figure>
//           <Link to="/product-details">
//             <img src={product1} className="testimonial-logo" />
//           </Link>
//         </figure>
//         <figure>
//           <img src={product2} className="testimonial-logo" />
//         </figure>
//         <figure>
//           <img src={product3} className="testimonial-logo" />
//         </figure>
//         <figure>
//           <img src={product4} className="testimonial-logo" />
//         </figure>
//         <figure>
//           <img src={product5} className="testimonial-logo" />
//         </figure>
//         <figure>
//           <img src={product6} className="testimonial-logo" />
//         </figure>
//         <figure>
//           <img src={product7} className="testimonial-logo" />
//         </figure>
//         <figure>
//           <img src={product6} className="testimonial-logo" />
//         </figure>
//         <figure>
//           <img src={product7} className="testimonial-logo" />
//         </figure>
//         <figure>
//           <img src={product6} className="testimonial-logo" />
//         </figure>
//         <figure>
//           <img src={product7} className="testimonial-logo" />
//         </figure>
//         <figure>
//           <img src={product6} className="testimonial-logo" />
//         </figure>
//         <figure>
//           <img src={product7} className="testimonial-logo" />
//         </figure>
//         <figure>
//           <img src={product6} className="testimonial-logo" />
//         </figure>
//         <figure>
//           <img src={product7} className="testimonial-logo" />
//         </figure>
//       </div>
//     </div>
//   );
// }

// export default Testimonial;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../Images/rsa-logo.png";
import Meat from "../../Images/meat1.png";
import dairy from "../../Images/Dairy2.jpg";
import grocery from "../../Images/grocery1.png";
import frozen from "../../Images/Frozen.png";
import produce from "../../Images/Produce.jpg";
import bakery from "../../Images/Bakery.png";
import health from "../../Images/Health.jpg";
import dow from "../../Images/dow.jpg";

import Product from "../ProductDetails/Product";
import "./Testimonial.css";

function Testimonial() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const products = [
    {
      image: Meat,
      name: "Meat",
    },
    {
      image: dairy,
      name: "Dairy",
    },
    {
      image: grocery,
      name: "Grocery",
    },
    {
      image: frozen,
      name: "Frozen",
    },
    {
      image: produce,
      name: "Produce",
    },
    {
      image: bakery,
      name: "Bakery",
    },
    {
      image: health,
      name: "Health",
    },
    {
      image: dow,
      name: "Deal",
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

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? products.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === products.length - 1 ? 0 : prevIndex + 1
    );
  };

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
    <div className="testimonial-container">
      <div className="testimonial-btn-container">
        <h1 className="testimonial-heading">Departments</h1>

        {/* <button onClick={handlePrev} className="arrow-button">
            {"<"}
          </button>
          <button onClick={handleNext} className="arrow-button">
            {">"}
          </button> */}

        <Link to="/product-details" className="arrow-link">
          <button className="arrow-button">
            View all <span className="arrow-span">&rarr;</span>
          </button>
        </Link>
      </div>
      <div className="testimonial-logo-container">
        {products.map((product, index) => (
          <figure
            key={index}
            // style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            <div className="testimonial-card">
              <Link to={`/${product.name}-details`}>
                <img
                  src={product.image}
                  className="testimonial-logo"
                  alt={product.name}
                />
              </Link>
              <p className="testimonial-name">{product.name}</p>
              {/* <div className="product-count">
                <button
                  className="product-btn"
                  onClick={() => handleDecrement(index)}
                >
                  -
                </button>
                <span className="product-value">{productCounts[index]}</span>
                <button
                  className="product-btn"
                  onClick={() => handleIncrement(index)}
                >
                  +
                </button>
              </div> */}
            </div>
          </figure>
        ))}
      </div>
    </div>
  );
}

export default Testimonial;
