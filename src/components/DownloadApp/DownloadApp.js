import React from "react";
import phoneImg from "../img/Group7133.webp";
import "./downloadApp.css";
import apple from "../img/apple.png";
import playstore from "../img/playStore.png";

const DownloadApp = () => {
  return (
    <div className="downloadApp-container">
      <div className="downloadApp-container-img">
        <img src={phoneImg} alt="" />
      </div>
      <div className="downloadApp-container-content">
        <h2>Download HSBP App</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur ab ut cum iusto
          animi?adipisicing
          <br /> elit. Optio dolorum ab ut cum iusto animi?
        </p>
        <div className="downloadApp-container-content-playstore">
          <img src={apple} alt="Apple" />
          <img src={playstore} className="cart" alt="" />
        </div>
        <h4>Enter your mobile number to get link to download</h4>
      <div className="downloadApp-container-search-bar">
        <input type="text" placeholder="Enter your mobile number" />
        <button className="downloadApp-button">Send Link</button>
      </div>
      </div>
    </div>
  );
};

export default DownloadApp;
