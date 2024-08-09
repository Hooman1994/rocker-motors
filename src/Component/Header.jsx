import React from "react";
import "../scss/header.scss";
import HeaderLogo from "../assets/header-logo.svg";
import headerCar1 from "../assets/header-car1.svg";
import headerCar3 from "../assets/header-car3.svg"; // Ensure you have the necessary CSS file

export default function Header() {
  return (
    <div className="header">
      <img style={{ left: "0" }} className="header-image" src={headerCar1} alt="header1" />
      <div className="header-text">
        <span style={{ marginBottom: "20px", cursor: "pointer" }}>درباره ما</span>
        <img style={{ cursor: "pointer" }} src={HeaderLogo} alt="logo" />
        <span style={{ marginBottom: "20px", cursor: "pointer" }}>ارتباط با ما</span>
      </div>
      <img style={{ right: "0" }} className="header-image" src={headerCar3} alt="header3" />
    </div>
  );
}
