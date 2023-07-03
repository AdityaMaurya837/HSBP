import React from "react";
import "./services.css";
import {Drawer } from "antd";
import { useState } from "react";

// import saloon from '../img/Group 3210.png'
import service1 from "../img/Mask Group 87.png";
import service2 from "../img/Mask Group 89.png";
import service3 from "../img/Mask Group 90.png";
import service4 from "../img/Mask Group 92.png";

const Services = () => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  const cardData = [
    {
      id: "1",
      title: "Body Care",
      services: "We provide special offers for students and corporates",
      image: service1,
    },
    {
      id: "2",
      title: "Skin Care",
      services: "We provide special offers for students and corporates",
      image: service2,
    },
    {
      id: "3",
      title: "Hair Care",
      services: "We provide special offers for students and corporates",
      image: service3,
    },
    {
      id: "4",
      title: "Makeup Services",
      services: "We provide special offers for students and corporates",
      image: service4,
    },
  ];

  return (
    <div className="services-container">
      <div className="heading">
        <h1 onClick={showDrawer}>Beauty Services</h1>
        <div>
            <Drawer
              title="Basic Drawer"
              placement="left"
              onClose={onClose}
              open={open}
            >
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
            </Drawer>
          </div>
        <p>We provide special offers for students and corporates</p>
        <p>Export All</p>
      </div>
      <div className="services">
        {cardData.map((card, index) => (
          <div className="services-card" key={index}>
            <img src={card.image} alt="" />
            <h3>{card.title}</h3>
            <p>{card.services}</p>
            <button>Know more</button>
          </div>
        ))}
      </div>
      <div className="allServices">
        <a href="">See All Beauty Services</a>
      </div>
    </div>
  );
};

export default Services;
