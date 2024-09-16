import React from "react";
// import ApplePay from "../../public/images/apple-pay.png"
import { BiLogoFacebook } from "react-icons/bi";
import { AiFillYoutube } from "react-icons/ai";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { GrTwitter } from "react-icons/gr";

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
            src="/Images/visa.png"
            alt="Visa"
          />
          <img
            src="/Images/mastercard.png"
            alt="Mastercard"
          />
          <img
            src="/Images/paypal.png"
            alt="PayPal"
          />
          <img
            src="/Images/american-express.png"
            alt="PayPal"
          />
          <img
            src="/Images/apply-pay.png"
            alt="PayPal"
          />
          <img
            src="/Images/google-pay.png"
            alt="PayPal"
          />
        </div>
      </div>
    </footer>
  );
}

export default FooterSection;
