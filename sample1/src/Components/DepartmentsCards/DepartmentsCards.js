import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./DepartmentCards.css";

import { FaAngleRight } from "react-icons/fa";
import { FaAngleLeft } from "react-icons/fa";

const DepartmentCards = ({ data }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const settings = {
    // dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    prevArrow: <FaAngleLeft />,
    nextArrow: <FaAngleRight />,
    beforeChange: (current, next) => setCurrentIndex(next),
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === data.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(intervalId);
  }, [data.length]);

  return (
    <div className="main-container-coupon">
      <h1 className="coupon-heading">Coupons</h1>
      <div className="small-card-slider">
        <Slider {...settings}>
          {data.map((card, index) => (
            <div className="small-card-wrapper">
              <div key={index} className="small-card">
                <div className="wdp-ribbon wdp-ribbon-two">{card.sale}</div>
                <img src={card.image} className="small-card-img" />
                <div className="card-content">
                  <h2 style={{ fontSize: "1.5rem", marginTop: "10px" }}>
                    {card.title}
                  </h2>
                  {/* <p style={{ fontSize: "1.5rem", marginTop: "20px" }}>
                    {card.description}
                  </p> */}
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default DepartmentCards;

// ************ BLUR CARD JS FILE STARTS ************//

// import React, { useState, useEffect } from "react";
// import Slider from "react-slick";
// import "./DepartmentCards.css";

// import { FaAngleRight } from "react-icons/fa";
// import { FaAngleLeft } from "react-icons/fa";

// const DepartmentCards = ({ data }) => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const settings = {
//     infinite: true,
//     speed: 1000,
//     slidesToShow: 6,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 2000,
//     prevArrow: <FaAngleLeft />,
//     nextArrow: <FaAngleRight />,
//     centerMode: true,
//     focusOnSelect: true,
//     beforeChange: (current, next) => setCurrentIndex(next),
//   };

//   useEffect(() => {
//     if (data && data.length) {
//       const intervalId = setInterval(() => {
//         setCurrentIndex((prevIndex) =>
//           prevIndex === data.length - 1 ? 0 : prevIndex + 1
//         );
//       }, 3000);

//       return () => clearInterval(intervalId);
//     }
//   }, [data]);

//   if (!data || !data.length) {
//     return null;
//   }

//   return (
//     <div className="small-card-slider">
//       <Slider {...settings}>
//         {data.map((card, index) => (
//           <div
//             key={index}
//             className={`small-card ${
//               index === currentIndex ? "main-slide" : "shaded-slide"
//             }`}
//           >
//             <img src={card.image} alt={card.title} className="card-img" />
//             {/* <h2>{card.title}</h2>
//             <p>{card.description}</p> */}
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// };

// export default DepartmentCards;

// ********************BLUR CARD JS FILE ENDS **************//
