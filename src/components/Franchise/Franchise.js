import React from "react";
import "./franchise.css";

const Franchise = () => {
  return (
    <div>
      <div className="franchise-container">
        <div className="heading">
          <h1>Franchise</h1>
          <p>
            200+ Tech enabled salons, Serving you quality services across 40+
            cities
          </p>
        </div>
        <div className="franchise-content">
          <h1>
            Every thing
            <br /> about franchising
          </h1>
          <p>
            Become our Franchise Partner <br /> and start your own business
          </p>
          <button>Read More</button>
        </div>
      </div>

      <div className="institute-container">
        <div className="heading">
          <h1>Institute</h1>
          <p>
            100+ Tech enabled Institute, Serving you quality services across 60+
            cities
          </p>
        </div>
        <div className="institute-content">
          <p>A long and strong</p>
          <h1>Career awaits you</h1>
          <p>join dream wellness institute & become a</p>
          <h1>Beauty Care Expert</h1>
          <p>Advanced Certificate Courses</p>
          <button>Read More</button>
        </div>
      </div>
    </div>
  );
};

export default Franchise;
