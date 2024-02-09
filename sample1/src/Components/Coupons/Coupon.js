import React from "react";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import coupon1 from "../../Images/coupon1.png";
import coupon2 from "../../Images/coupon2.png";
import coupon3 from "../../Images/coupon3.png";

import "./Coupon.css";

function Coupon() {
  const slides = [
    {
      image: coupon1,
      title: "10$ OFF on Grocery",
      description: "This is a description",
      sale: "10$ OFF",
      // clickEvent: sliderClick,
    },
    {
      image: coupon2,
      title: "85% OFF on Storewide Purchase",
      description: "This is a second description",
      sale: "85% OFF",
      // clickEvent: sliderClick,
    },
    {
      image: coupon3,
      title: "Free 75$ Coupon",
      description: "This is a third description",
      sale: "75$ OFF",
      // clickEvent: sliderClick,
    },
    {
      image: coupon1,
      title: "10$ OFF on Grocery",
      description: "This is a description",
      sale: "10$ OFF",
      // clickEvent: sliderClick,
    },
    {
      image: coupon2,
      title: "85% OFF on Storewide Purchase",
      description: "This is a second description",
      sale: "85% OFF",
      // clickEvent: sliderClick,
    },
    {
      image: coupon3,
      title: "Free 75$ Coupon",
      description: "This is a third description",
      sale: "75$ OFF",
      // clickEvent: sliderClick,
    },
    {
      image: coupon1,
      title: "10$ OFF on Grocery",
      description: "This is a description",
      sale: "10$ OFF",
      // clickEvent: sliderClick,
    },
    {
      image: coupon2,
      title: "85% OFF on Storewide Purchase",
      description: "This is a second description",
      sale: "85% OFF",
      // clickEvent: sliderClick,
    },
    {
      image: coupon3,
      title: "Free 75$ Coupon",
      description: "This is a third description",
      sale: "75$ OFF",
      // clickEvent: sliderClick,
    },
  ];
  return (
    <>
      <Header />
      <div>
        <h2 className="coupon-header">Coupons</h2>
        <div className="coupon-container">
          {slides.map((card, index) => (
            <div key={index} className="coupon-card">
              <div className="wdp-ribbon wdp-ribbon-two">{card.sale}</div>
              <img src={card.image} className="coupon-card-img" />
              <div className="card-content">
                <h2 style={{ fontSize: "1.5rem", marginTop: "10px" }}>
                  {card.title}
                </h2>
              </div>
            </div>
          ))}
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Coupon;
