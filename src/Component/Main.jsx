import React from "react";
import CarouselComponent from "./Carousel";
import ChevronLeft from "../assets/chevron-left.svg";

export default function Main() {
  return (
    <div className="body">
      <div style={{ position: "relative" }}>
        <div style={{ display: "flex", flexDirection: "column", position: "relative" }}>
          <CarouselComponent />
          <div
            style={{
              position: "absolute",
              paddingBottom: "10px",
              backgroundColor: "#11151B",
              bottom: "20px",
              width: "700px",
              height: "30px",
            }}
          ></div>
        </div>
        <div
          style={{
            direction: "rtl",
            position: "absolute",
            top: "10%",
            display: "flex",
            flexDirection: "column",
            right: "10%",
            backgroundColor: "#11151B",
            zIndex: "1",
            width: "30%",
            height: "180px",
            padding: "20px",
          }}
        >
          <span style={{ fontSize: "20px", fontWeight: "bold", color: "white" }}>راکر موتورز</span>
          <span style={{ color: "white" }}>مرکز تخصصی معامله خودرو</span>
          <div style={{ color: "#FFA701", border: "1px solid #FFA701", width: "fit-content" }}>
            <span>اطلاعات تماس</span>
            <img src={ChevronLeft} alt="chevron" />
          </div>
        </div>
      </div>
    </div>
  );
}
