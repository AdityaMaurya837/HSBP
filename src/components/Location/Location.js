import React from "react";
import { FaSearch } from "react-icons/fa";
import { MdArrowDropDown } from "react-icons/md";
import { FaMapMarkerAlt } from "react-icons/fa";
import "./location.css";
import service1 from "../img/shop2.jpg";
import service2 from "../img/shop1.jpg";
import service3 from "../img/shop3.jpg";
import service4 from "../img/shop4.webp";
import star from "../img/Polygon 36.svg"

const Location = () => {
  const cardData = [
    {
      id: "1",
      title: "Body Care",
      location: "We provide special offers for students and corporates",
      image: service1,
    },
    {
      id: "2",
      title: "Skin Care",
      location: "We provide special offers for students and corporates",
      image: service2,
    },
    {
      id: "3",
      title: "Hair Care",
      location: "We provide special offers for students and corporates",
      image: service3,
    },
    {
      id: "4",
      title: "Makeup location",
      location: "We provide special offers for students and corporates",
      image: service4,
    },
  ];
  return (
    <div className="location-shop">
      <div className="heading">
        <h1>Near by Salons</h1>
        <p>
          200+ tech enabled salons, serving you quality location across 40+
          cities
        </p>
        <p>Discover the best salons near you</p>
        <div className="input-box">
          <div className="location-input">
            <FaMapMarkerAlt className="location-icon" />
            <input type="text" placeholder="Enter city name" defaultValue={"Noida"} />
            <MdArrowDropDown className="dropdown-icon" />
          </div>
          <div className="search-bar">
            <input type="text" placeholder="Search" />
            <FaSearch className="search-icon" />
          </div>
        </div>
      </div>
      <h3>Near by Salons</h3>
      <div className="location">
        {cardData.map((card, index) => (
          <div
            className="location-card"
            key={index}
            style={{ backgroundImage: `url(${card.image})` }}
          >
            <div className="location-contant">
              <div className="location-contant-heading">
                <h4>HSBP Studio</h4>
                <p>Near Mahagun Mall,<br/> Vaishali, Ghaziabad</p>
              </div>
              <div className="location-contant-reting">
                <div className="rate">
                  4.5
                  <img src={star} alt="" />
                </div>
                <p>482 Reviews</p>
              </div>
            </div>
            <button>Book Appointment</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Location;
