import React from 'react';
import './category.css';
import saloon from '../img/Group 3210.png'
import saloon1 from '../img/saloon3.png'
import saloon2 from '../img/saloon2.png'
import saloon3 from '../img/1198348.png'
import saloon4 from '../img/Layer 0.png'

const Category = () => {
    const cardData = [
        {
          id:"1",  
          title: 'Salon at Home',
          services: '100+ Services',
          image: saloon
        },
        {
          id:"2",
          title: 'Near by Salons',
          services: '100+ Services',
          image: saloon1
        },
        {
            id:"3",
            title: 'Beauty Products',
            services: '100+ Services',
            image: saloon2
          },  
      ];

      const secondCardv = [{
        id:"4",
        title: 'Franchise',
        services: '100+ Services',
        image: saloon3
      },
      {
        id:"5",
        title: 'Training Centres',
        services: '100+ Services',
        image: saloon4
      },]

      const getBackgroundColor = (id) => {
        switch (id) {
          case "1":
            return "red";
          case "2":
            return "orange";
          case "3":
            return "purple";
          case "4":
            return "yellow";
          case "5":
            return "redLast";
          default:
            return "";
        }
      };

  return (
    <div className="category-container">
      <div className="heading">
        <h1>India's Largest Platform</h1>
        <p>For all your beauty salon needs</p>
      </div>
      <div className="category">
      {cardData.map((card, index) => (
        <div
          className={`card ${getBackgroundColor(card.id)}`}
          key={index}
        >
          <h3>{card.title}</h3>
          <p>{card.services}</p>
          <img src={card.image} alt="" />
        </div>
      ))}
    </div>
    <div className="category second-category">
      {secondCardv.map((card, index) => (
        <div
          className={`card ${getBackgroundColor(card.id)}`}
          key={index}
        >
          <h3>{card.title}</h3>
          <p>{card.services}</p>
          <img src={card.image} alt="" />
        </div>
      ))}
    </div>

    </div>
  );
};

export default Category;