import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import { Carousel } from "react-responsive-carousel";
import logo1 from "../../Images/em-ginger-fried-img.png";
import logo2 from "../../Images/foodmunch-banner-bg.png";
import logo3 from "../../Images/healthy-food-plate-img.png";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import SlidingAd from "../SlidingAd/SlidingAd";
import Departments from "../Departments/Departments";
import DepartmentCards from "../DepartmentsCards/DepartmentCards";
import "./Home.css";
import Footer from "../Footer/Footer";
import Testimonial from "../Testimonials/Testimonial";
import produce1 from "../../Images/produce1.png";
import grocery1 from "../../Images/grocery 1.png";
import meat1 from "../../Images/meat 1.png";
import banner1 from "../../Images/bannerimage1.jpg";
import banner2 from "../../Images/bannerimage2.jpg";
import banner3 from "../../Images/bannerimage3.jpg";
import coupon1 from "../../Images/coupon1.png";
import coupon2 from "../../Images/coupon2.png";
import coupon3 from "../../Images/coupon3.png";

function Home() {
  const slides = [
    {
      image:
      coupon1,
      title: "10$ OFF on Grocery",
      description: "This is a description",
      sale: "10$ OFF",
      // clickEvent: sliderClick,
    },
    {
      image:
        coupon2,
      title: "85% OFF on Storewide Purchase",
      description: "This is a second description",
      sale: "85% OFF",
      // clickEvent: sliderClick,
    },
    {
      image:
        coupon3,
      title: "Free 75$ Coupon",
      description: "This is a third description",
      sale: "75$ OFF",
      // clickEvent: sliderClick,
    },
    {
      image:
      coupon1,
      title: "10$ OFF on Grocery",
      description: "This is a description",
      sale: "10$ OFF",
      // clickEvent: sliderClick,
    },
    {
      image:
        coupon2,
      title: "85% OFF on Storewide Purchase",
      description: "This is a second description",
      sale: "85% OFF",
      // clickEvent: sliderClick,
    },
    {
      image:
        coupon3,
      title: "Free 75$ Coupon",
      description: "This is a third description",
      sale: "75$ OFF",
      // clickEvent: sliderClick,
    },
    {
      image:
      coupon1,
      title: "10$ OFF on Grocery",
      description: "This is a description",
      sale: "10$ OFF",
      // clickEvent: sliderClick,
    },
    {
      image:
        coupon2,
      title: "85% OFF on Storewide Purchase",
      description: "This is a second description",
      sale: "85% OFF",
      // clickEvent: sliderClick,
    },
    {
      image:
        coupon3,
      title: "Free 75$ Coupon",
      description: "This is a third description",
      sale: "75$ OFF",
      // clickEvent: sliderClick,
    },
    // {
    //   image:
    //     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlMHlCscO0tFQyD-ZEWVe3Towk_UBGt9C_IeeFit58o1zjsBsJ7_WVQq8u1Z5viZFcuPs&usqp=CAU",
    //   title: "50$ OFF on Grocery Purchase",
    //   description: "This is a fourth description",
    //   sale: "50$ OFF",
    //   // clickEvent: sliderClick,
    // },
    // {
    //   image:
    //     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHsYlq7_nbsI1gfvC8uvQSpR2Z1g6HRnumbMEn30lWOQukwsDPW4FIMXTpaiHVYXSL5xk&usqp=CAU",
    //   title: "10% OFF on Single Order",
    //   description: "This is a fifth description",
    //   sale: "10% OFF",
    //   // clickEvent: sliderClick,
    // },
    // {
    //   image:
    //     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTz7DYEzJgzMPaJ55jIR7UvRdZy9jJK77kOOf5EXliTV78D5IP7Q7R9crHeRZ5fNPb5kps&usqp=CAU",
    //   title: "10$ OFF on Grocery",
    //   description: "This is a description",
    //   sale: "10$ OFF",
    //   // clickEvent: sliderClick,
    // },
    // {
    //   image:
    //     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjualx1P48OxnxYOKnE32-1KOElSAX8utkh-NDQivOQBIgDZuKqvp1GUkS13mHqWMC8t0&usqp=CAU",
    //   title: "85% OFF on Storewide Purchase",
    //   description: "This is a second description",
    //   sale: "85% OFF",
    //   // clickEvent: sliderClick,
    // },
    // {
    //   image:
    //     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZZOCT_VtN-fVsdnYv6RCMTJWphSBZ1HhjH3orXhV3NU_yJdZEtHxFH4ftUlg3IG10oyA&usqp=CAU",
    //   title: "Free 75$ Coupon",
    //   description: "This is a third description",
    //   sale: "75$ OFF",
    //   // clickEvent: sliderClick,
    // },
    // {
    //   image:
    //     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlMHlCscO0tFQyD-ZEWVe3Towk_UBGt9C_IeeFit58o1zjsBsJ7_WVQq8u1Z5viZFcuPs&usqp=CAU",
    //   title: "50$ OFF on Grocery Purchase",
    //   description: "This is a fourth description",
    //   sale: "50$ OFF",
    //   // clickEvent: sliderClick,
    // },
    // {
    //   image:
    //     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHsYlq7_nbsI1gfvC8uvQSpR2Z1g6HRnumbMEn30lWOQukwsDPW4FIMXTpaiHVYXSL5xk&usqp=CAU",
    //   title: "10% OFF on Single Order",
    //   description: "This is a fifth description",
    //   sale: "10% OFF",
    //   // clickEvent: sliderClick,
    // },
  ];

  const bannerSlides = [
    {
      bannerImage: banner1,
      description: "This is a description",
      // clickEvent: sliderClick,
    },
    {
      bannerImage: banner2,
      description: "This is a second description",
      // clickEvent: sliderClick,
    },
    {
      bannerImage: banner3,
      description: "This is a third description",
      // clickEvent: sliderClick,
    },
    {
      bannerImage: banner1,
      description: "This is a description",
      // clickEvent: sliderClick,
    },
    {
      bannerImage: banner2,
      description: "This is a second description",
      // clickEvent: sliderClick,
    },
    {
      bannerImage: banner3,
      description: "This is a third description",
      // clickEvent: sliderClick,
    },
    {
      bannerImage: grocery1,
      description: "This is a third description",
      // clickEvent: sliderClick,
    },
  ];
  return (
    <div>
      <Header />

      <SlidingAd data={bannerSlides} />

      <DepartmentCards data={slides} />

      <Testimonial />
      <Footer />
    </div>
  );
}

export default Home;
