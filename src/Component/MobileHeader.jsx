import React from "react";
import Carousel from "./Carousel";
import "../scss/header.scss";
import HeaderLogo from "../assets/header-logo.svg";
import headerCar1 from "../assets/header-car1.svg";
import headerCar3 from "../assets/header-car3.svg"; // Ensure you have the necessary CSS file

export default function MobileHeader() {
  return (
    <div className="header" style={{ margin: "0 0 100px 0" }}>
      <div className="header-text">
        <img src={HeaderLogo} alt="logo" />
      </div>
      <img
        style={{ width: "100%", objectFit: "fill" }}
        className="header-image"
        src={headerCar3}
        alt="header3"
      />
    </div>
  );
}
