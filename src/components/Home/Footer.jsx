import React from "react";

// import ApplePay from "../../public/images/apple-pay.png"
import { BiLogoInstagramAlt } from "react-icons/bi";
import { BiLogoFacebook } from "react-icons/bi";
import { AiFillYoutube } from "react-icons/ai";
import { GrTwitter } from "react-icons/gr";
import { FaCcApplePay } from "react-icons/fa";
import { FaCcVisa } from "react-icons/fa";
import "./Footer.css";
function FooterSection() {
  return (
    <footer>
      <div className="container">
        <div className="footer-section">
          <h4>Shop</h4>
          <ul>
            <li>
              <a href="#">TWS</a>
            </li>
            <li>
              <a href="#">Smart Watches</a>
            </li>
            <li>
              <a href="#">Neckband</a>
            </li>
            <li>
              <a href="#">Headphones</a>
            </li>
            <li>
              <a href="#">Smart TV</a>
            </li>
            <li>
              <a href="#">Mobile</a>
            </li>
            <li>
              <a href="#">Mobile Accessories</a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Information</h4>
          <ul>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Warranty Registration</a>
            </li>
            <li>
              <a href="#">Management</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">Track Order</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Customer Service</h4>
          <ul>
            <li>
              <a href="#">Service Center</a>
            </li>
            <li>
              <a href="#">Customer Support</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Return Policy</a>
            </li>
            <li>
              <a href="#">Terms & Conditions</a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Newsletter Sign Up</h4>
          <p>
            Sign up for exclusive updates, new arrivals & insider only discounts
          </p>

          <div className="newsletter">
            <input type="email" placeholder="Enter your email address here" />
            <button type="submit">SUBMIT</button>
          </div>

          <div className="social-icons ">
            <a href="#">
              <BiLogoFacebook />
            </a>
            <a href="#">
              <BiLogoInstagramAlt />
            </a>
            <a href="#">
              <AiFillYoutube />
            </a>
            <a href="#">
              <GrTwitter />
            </a>
          </div>
        </div>
      </div>

      <div className="bottom-bar container">
        <p>Copyright 2023 Cellecor All Rights Reserved</p>
        <div className="payment-methods">
          <img
            src="https://img.icons8.com/color/48/000000/visa.png"
            alt="Visa"
          />
          <img
            src="https://img.icons8.com/color/48/000000/mastercard-logo.png"
            alt="Mastercard"
          />
          <img
            src="https://img.icons8.com/color/48/000000/paypal.png"
            alt="PayPal"
          />
        </div>
      </div>
    </footer>
  );
}

export default FooterSection;
