import React from "react";

import { useEffect, useState } from "react";

import search from "../../Images/icons8-search.svg";
import instaLogo from "../../Images/instagram (1).png";
import fbLogo from "../../Images/facebook.png";

import { Link } from "react-router-dom";

import logo from "../../Images/rsa-logo.png";

import "../css/general.css";
import "../css/queries.css";
import "./Header.css";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.pageYOffset > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div>
      {/* FIRST HEADER STARTS */}
      <header className="first-header">
        <Link to="/">
          <img className="first-logo" src={logo} />
        </Link>

        <div>
          <h2 className="welcome-text">Welcome Text</h2>
        </div>

        <nav>
          <ul style={{ listStyle: "none" }}>
            <li className="followus-text">Follow us </li>
            <li>
              <a class="footer-link" href="#">
                {/* <ion-icon class="social-icon" name="logo-instagram">
                  Instagram
                </ion-icon> */}
                <img src={instaLogo} className="social-logo" />
              </a>
            </li>
            <li>
              <a class="footer-link" href="#">
                <img
                  src={fbLogo}
                  className="social-logo"
                  style={{ marginRight: "30px" }}
                />
              </a>
            </li>
            <li>
              <a href="#" className="signup-text">
                Sign up
              </a>
            </li>
            <hr className="signup-hr" />
            <li>
              <a href="#" className="signup-text">
                Login
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <hr className="divide-hr" />

      {/* FIRST HEADER ENDS */}

      {/* SECOND HEADER START */}

      <header
        className={`second-header ${isScrolled ? "scrolled" : ""}`}
        id="sticky-header"
      >
        <Link to="/">
          <img src={logo} className="second-logo" />
        </Link>
        <div className="search-bar-container">
          <div className="search-wrapper">
            <div className="input-wrapper">
              <input type="search" className="search-input" />
              <img src={search} alt="Logo" className="logo" />
            </div>

            <button className="search-btn">Search</button>
          </div>
        </div>

        <div>
          <nav>
            <ul>
              <li>
                <a href="#">
                  <label>All Categories</label>
                  <select className="react-select" />
                </a>
              </li>
              <li>
                <a href="#">Weekly Ads</a>
              </li>
              <li>
                <a href="#">Best Seller</a>
              </li>
              <li>
                <a href="/coupon-details">
                  <label>Coupons</label>
                  {/* <select className="react-select" /> */}
                </a>
              </li>
              <li>
                <a href="#">
                  <label>About Us</label>
                  <select className="react-select" />
                </a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <hr className="divide-hr" />
    </div>
  );
}

export default Header;

// Header.js

// Header.js

// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import search from "../../Images/icons8-search.svg";
// import instaLogo from "../../Images/instagram (1).png";
// import fbLogo from "../../Images/facebook.png";
// import logo from "../../Images/rsa-logo.png";
// import "../css/general.css";
// import "../css/queries.css";
// import "./Header.css";

// function Header() {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isFirstHeaderMenuOpen, setIsFirstHeaderMenuOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.pageYOffset > 0);
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   const toggleFirstHeaderMenu = () => {
//     setIsFirstHeaderMenuOpen(!isFirstHeaderMenuOpen);
//   };

//   return (
//     <div>
//       {/* FIRST HEADER STARTS */}
//       <header className={`first-header ${isFirstHeaderMenuOpen ? "menu-open" : ""}`}>
//         <Link to="/">
//           <img className="first-logo" src={logo} alt="Logo" />
//         </Link>
//         <div>
//           <h2 className="welcome-text">Welcome Text</h2>
//         </div>
//         <div className="hamburger-menu" onClick={toggleFirstHeaderMenu}>
//           <div className="bar"></div>
//           <div className="bar"></div>
//           <div className="bar"></div>
//         </div>
//         <nav className={`first-menu ${isFirstHeaderMenuOpen ? "menu-open" : ""}`}>
//           <ul style={{ listStyle: "none" }}>
//             {/* ... (unchanged) */}
//           </ul>
//         </nav>
//       </header>

//       <hr className="divide-hr" />
//       {/* FIRST HEADER ENDS */}

//       {/* SECOND HEADER START */}
//       <header
//         className={`second-header ${isScrolled ? "scrolled" : ""} ${
//           isMenuOpen ? "menu-open" : ""
//         }`}
//         id="sticky-header"
//       >
//         <Link to="/">
//           <img src={logo} className="second-logo" alt="Logo" />
//         </Link>
//         <div className="hamburger-menu" onClick={toggleMenu}>
//           <div className="bar"></div>
//           <div className="bar"></div>
//           <div className="bar"></div>
//         </div>
//         <div className={`nav-container ${isMenuOpen ? "menu-open" : ""}`}>
//           <div className="search-bar-container">
//             <div className="search-wrapper">
//               <div className="input-wrapper">
//                 <input type="search" className="search-input" />
//                 <img src={search} alt="Search Logo" className="logo" />
//               </div>
//               <button className="search-btn">Search</button>
//             </div>
//           </div>
//           <div className="menu-items">
//             <nav>
//               <ul>
//                 {/* ... (unchanged) */}
//               </ul>
//             </nav>
//           </div>
//         </div>
//       </header>
//       <hr className="divide-hr" />
//       {/* SECOND HEADER ENDS */}
//     </div>
//   );
// }

// export default Header;
