import React from "react";
import "./productShop.css";
import Productimg from '../img/bi5shr46.png'
import rating from "../img/Group 2722.svg"

export const ProductShop = () => {
    const cardData = [
        {
          id: "1",
          title: "Normal Packages",
          services: "King C. Gillette Men's Beard Oil with Plant Based Argan...",
          image: Productimg,
        },
        {
          id: "2",
          title: "Deluxe Package",
          services: "King C. Gillette Men's Beard Oil with Plant Based Argan...",
          image: Productimg,
        },
        {
          id: "3",
          title: "Bridal Packages",
          services: "King C. Gillette Men's Beard Oil with Plant Based Argan...",
          image: Productimg,
        },
        {
          id: "4",
          title: "Normal Package",
          services: "King C. Gillette Men's Beard Oil with Plant Based Argan...",
          image: Productimg,
        },
        {
          id: "5",
          title: "Normal Packages",
          services: "King C. Gillette Men's Beard Oil with Plant Based Argan...",
          image: Productimg,
        },
        {
          id: "6",
          title: "Deluxe Package",
          services: "King C. Gillette Men's Beard Oil with Plant Based Argan...",
          image: Productimg,
        },
        {
          id: "7",
          title: "Bridal Packages",
          services: "King C. Gillette Men's Beard Oil with Plant Based Argan...",
          image: Productimg,
        },
        {
          id: "8",
          title: "Normal Package",
          services: "King C. Gillette Men's Beard Oil with Plant Based Argan...",
          image: Productimg,
        },
      ];
  return (
    <div className="ProductShop">
      <div className="ProductShop-content">
        <div className="heading">
          <h1>Product Shop</h1>
          <p className="ProductShop-content-p">
          50+ salon professional brands delivered nationally to your doorsteps
          </p>
        </div>
        <div className="ProductShop-services">
          {cardData.map((card, index) => (
            <div className="ProductShop-services-card" key={index}>
              <img src={card.image} alt="" />
              <p>{card.services}</p>
              <img className="rating" src={rating} alt="" />
              <h4>₹ 377 <span>₹ 754</span></h4>
              <button>Add to Cart</button>
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
