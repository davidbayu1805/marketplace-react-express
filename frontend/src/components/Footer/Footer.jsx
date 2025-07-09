import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";

const footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="" />
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam
            beatae consequatur officia cupiditate, porro excepturi! Nam, hic
            ipsa eius quam pariatur doloremque ipsum quasi tempora vel,
            perspiciatis provident et obcaecati?
          </p>
          <div className="footer-social-icons">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={assets.facebook_icon} alt="Facebook" />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={assets.twitter_icon} alt="Twitter" />
            </a>
            <a
              href="https://www.linkedin.com/in/david-bayu"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={assets.linkedin_icon} alt="LinkedIn" />
            </a>
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2> GET IN TOUCH</h2>
          <ul>
            <li>081234567891</li>
            <li>davidbayu57@gmail.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyriht 2025 © David Bayu Cristanto - All Right Reserved.
      </p>
    </div>
  );
};

export default footer;
