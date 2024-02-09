import React from "react";

import ReactPlayer from "react-player";

import logo from "../../Images/rsa-logo.png";
import instaLogo from "../../Images/ig-instagram-icon.svg";
import fbLogo from "../../Images/facebook-app-round-icon.svg";
import twitterLogo from "../../Images/twitter.svg";
import appStoreLogo from "../../Images/appstore.svg";
import playStoreLogo from "../../Images/playstore.svg";
import visaLogo from "../../Images/visa.svg";
import masterCardLogo from "../../Images/mastercard.svg";
import americanCardLogo from "../../Images/american.svg";

// import { IonIcon } from '@ionic/react';

import sampleVideo from "../../Images/samplevideo.mp4";
import "./Footer.css";

function Footer() {
  return (
    <div className="main-container">
      <video autoPlay loop muted className="video-background">
        <source src={sampleVideo} type="video/mp4" />
      </video>

      <div className="footer-content">
        {/* <div> */}
        <ul className="footer-logos-container">
          <li>
            <img src={logo} className="footer-logo" />
          </li>
          <div className="logo-container">
            <li>
              <img src={fbLogo} className="socialmedia-logo" />
            </li>
            <li>
              <img src={instaLogo} className="socialmedia-logo" />
            </li>
            <li>
              <img src={twitterLogo} className="socialmedia-logo" />
            </li>
          </div>
        </ul>
        {/* </div> */}
        {/* <div className="footer-content-query"> */}
        <div>
          {/* <h1 className="footer-heading">Contact Us</h1> */}
          <ul className="footer-heading">
            <li>My Account</li>
            <li>Profile</li>
            <li>Order History</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
        <div>
          <ul className="footer-heading">
            <li>Help</li>
            <li>FAQ</li>
            <li>Coupon Policy</li>
            <li>Rewards</li>
          </ul>
        </div>
        <div>
          <ul className="footer-heading">
            <li>Company</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li>Web Accessibility</li>
          </ul>
        </div>
        {/* </div> */}
        <div>
          <ul className="footer-logos-container">
            <li className="download-text">Download App</li>
            <div className="logo-container">
              <li>
                <img src={appStoreLogo} className="download-logo" />
              </li>
              <li>
                <img src={playStoreLogo} className="download-logo" />
              </li>
              {/* <li>
                <img src={twitterLogo} className="socialmedia-logo" />
              </li> */}
            </div>
          </ul>
          <ul className="footer-payment-container">
            <li className="payment-text">Payment Method</li>
            <div className="logo-container">
              <li>
                <img src={visaLogo} className="card-logo" />
              </li>
              <li>
                <img src={masterCardLogo} className="card-logo" />
              </li>
              <li>
                <img src={americanCardLogo} className="card-logo" />
              </li>
            </div>
          </ul>
        </div>
      </div>

      <h1 className="copyright">Copyright &copy; RSA America 2024</h1>
    </div>
  );
}

export default Footer;
