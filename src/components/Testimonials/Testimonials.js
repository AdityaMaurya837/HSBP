import React from "react";
import "./testimonials.css";
import logo from "../img/logobg.png";

const Testimonials = () => {
  return (
    <div>
      <div className="heading contactUs">
        <h1>Contact Us </h1>
      </div>
      <div className="testimonials-container">
        <div className="testimonials-content">
          <div className="testimonials-content-text">
            <img src={logo} alt="" />
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Aspernatur, beataeLorem ipsum dolor sit, amet consectetur
              Aspernatur.
            </p>
          </div>
          <div className="testimonials-content-link1">
            <ul>
              <li>
                <a href="">About Us</a>
              </li>
              <li>
                <a href="">Blog</a>
              </li>
              <li>
                <a href="">Testimonials</a>
              </li>
              <li>
                <a href="">Largest Platform</a>
              </li>
              <li>
                <a href="">Beauty Services</a>
              </li>
              <li>
                <a href="">Book Appointment</a>
              </li>
              <li>
                <a href="">Beauty Package</a>
              </li>
              <li>
                <a href="">Beauty Package</a>
              </li>
              <li>
                <a href="">Near by Salons</a>
              </li>
              <li>
                <a href="">Product Shop</a>
              </li>
              <li>
                <a href="">Franchise</a>
              </li>
            </ul>
          </div>
          <div className="testimonials-content-link2">
            <ul>
              <li>
                <a href="">Appointment Query</a>
              </li>
              <li>
                <a href="">I'm a Beautician </a>
              </li>
              <li>
                <a href="">See map</a>
              </li>
              <li>
                <a href="">App Download</a>
              </li>
              <li>
                <a href="">Account</a>
              </li>
              <li>
                <a href="">Buy Subcription</a>
              </li>
              <li>
                <a href="">Client Review</a>
              </li>
            </ul>
          </div>
          <div className="testimonials-content-socialMedia">
            <p>Customer Care</p>
            <h3>
              +91 98674566
              <br />
              hsbp@gmail.com
            </h3>
          </div>
        </div>
        <div className="city-name">
          <div className="line margin-bottom"></div>
          <div className="city-name-content">
            <p>
              Noida | Delhi | Indore | Bangalore | Pune | Hyderabad | Kolkata | Konchi | Kanpur | Raipur | Ranchi | Bangalore | Pune | Ranchi
            </p>
            <p>
            Noida | Delhi | Indore | Bangalore | Pune | Ranchi | Bangalore | Pune | Ranchi
            </p>
          </div>
          <div className="line"></div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
