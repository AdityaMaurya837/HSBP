import React from "react";
import { Drawer } from "antd";
import { useState } from "react";
import "./navbar.css";
import logo from "../img/Screenshot 2023-06-23 123840.png";
import playstore from "../img/playStore.png";
import menu from "../img/menubar.png";
import cart from "../img/263142.png";
import apple from "../img/apple.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <nav className="navbar">
        <div className="logo">
          <img src={menu} className="menubar" onClick={showDrawer} alt="" />
          <img src={logo} alt="Logo" />
        </div>
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
        <ul className="nav-links">
          <li>
            <a href="/">Price List</a>
          </li>
          <li>
            <a href="/">DOWNLOAD APP</a>
          </li>
          <li>
            <a href="/">
              <img src={playstore} alt="Playstore" />
            </a>
          </li>
          <li>
            <a href="/">
              <img src={apple} alt="Apple" />
            </a>
          </li>
          <li>
            <img src={cart} className="cart" alt="" />
          </li>
          <li>
            <a href="/">Login</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
