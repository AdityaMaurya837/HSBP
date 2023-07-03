import React from "react";
import "./index.css";
import img from '../img/Mask Group 94.png'
import img2 from '../img/Mask Group 84.png'
import img3 from '../img/Mask Group 16.png'

export const BeautyPackage = () => {
    const cardData = [
        {
          id: "1",
          title: "Normal Packages",
          services: "Lotus Cleanup Full Arms (Chocolate Wax) Full Legs (Chocolate Wax) VLCC Detan Pedicure Eyebrow Upper Lip",
          image: img,
        },
        {
          id: "2",
          title: "Deluxe Package",
          services: "Lotus Cleanup Full Arms (Chocolate Wax) Full Legs (Chocolate Wax) VLCC Detan Pedicure Eyebrow Upper Lip",
          image: img2,
        },
        {
          id: "3",
          title: "Bridal Packages",
          services: "Lotus Cleanup Full Arms (Chocolate Wax) Full Legs (Chocolate Wax) VLCC Detan Pedicure Eyebrow Upper Lip",
          image: img3,
        },
        {
          id: "4",
          title: "Normal Package",
          services: "Lotus Cleanup Full Arms (Chocolate Wax) Full Legs (Chocolate Wax) VLCC Detan Pedicure Eyebrow Upper Lip",
          image: img,
        },
      ];
  return (
    <div className="BeautyPackage">
      <div className="BeautyPackage-content">
        <div className="heading">
          <h1>Beauty Package</h1>
          <p className="BeautyPackage-content-p">
            We provide special offers for students and corporates
          </p>
        </div>
        <div className="BeautyPackage-services">
          {cardData.map((card, index) => (
            <div className="BeautyPackage-services-card" key={index}>
              <img src={card.image} alt="" />
              <h3>{card.title}</h3>
              <p>{card.services}</p>
              <button>Book Now</button>
            </div>
          ))}
        </div>
        <div className="allServices">
        <a href="">See All Package</a>
      </div>
      </div>
    </div>
  );
};
