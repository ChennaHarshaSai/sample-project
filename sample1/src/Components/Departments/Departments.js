import React from "react";
import "../Home/Home.css";
// import 'swiper/swiper-bundle.min.css';
import Swiper from "swiper";

function Departments() {
  React.useEffect(() => {
    const mySwiper = new Swiper(".swiper-container", {
      direction: "horizontal",
      loop: true, // Infinite loop
      slidesPerView: 4, // Number of visible cards at a time
      spaceBetween: 30, // Spacing between cards
      autoplay: {
        delay: 2000, // Delay between slides in milliseconds
        disableOnInteraction: false, // Continue autoplay even when user interacts
      },
    });

    return () => {
      mySwiper.destroy(true, true);
    };
  }, []);

  const cardData = [
    { id: 1, text: "Card 1", animation: "slide-left" },
    { id: 2, text: "Card 2", animation: "slide-right" },
    { id: 3, text: "Card 3", animation: "spin" },
    { id: 4, text: "Card 4", animation: "fade" },
    { id: 5, text: "Card 5", animation: "slide-left" },
    { id: 6, text: "Card 6", animation: "slide-right" },
    { id: 7, text: "Card 7", animation: "spin" },
    { id: 8, text: "Card 8", animation: "fade" },
  ];

  return (
    <div className="swiper-container">
      <h2>Departments</h2>
      <div className="swiper-wrapper">
        {cardData.map((card) => (
          <div key={card.id} className={`swiper-slide ${card.animation}`}>
            {card.text}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Departments;
