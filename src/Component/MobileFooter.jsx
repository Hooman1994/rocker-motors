import React from "react";
import "../scss/header.scss";
import footerImage from "../assets/footerImage.png";
import instagramLogo from "../assets/instagramLogo.svg";
import whatsappLogo from "../assets/whatsappLogo.svg";
import telegramLogo from "../assets/telegramLogo.svg";

export default function MobileFooter() {
  return (
    <div
      style={{
        display: "flex",
        position: "relative",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
      className="footer"
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          fontSize: "12px",
          borderRadius: "5px",
          justifyContent: "center",
          color: "#CFCFCF",
          textAlign: "right",
        }}
      >
        جهت اطلاع از آخرین آگهی ها اینستاگرام راکرموتورز را دنبال کنید
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "90%",
          alignItems: "end",
          margin: "40px 0 100px 0",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "end",
            padding: "10px 30px",
            gap: "60px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              width: "inherit",
              height: "70px",
              borderRadius: "5px",
              justifyContent: "center",
              color: "white",
              textAlign: "right",
              alignItems: "center",
              gap: "10px",
              border:
                "1px solid linear-gradient(117deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)",
            }}
          >
            <img src={instagramLogo} style={{ width: "20px" }} alt="instagramLogo" />
            <span>Rockermotors</span>
          </div>
          <span style={{ display: "flex", color: "#DCDCDC", fontSize: "10px" }}>
            :پل های ارتباطی دیگر
          </span>
        </div>
        <div
          style={{
            padding: "15px",
            display: "flex",
            flexDirection: "row-reverse",
            border: "1px solid gray",
            width: "100%",
            height: "70px",
            borderRadius: "5px",
            justifyContent: "end",
            alignItems: "center",
            textAlign: "right",
            fontSize: "12px",
            color: "#989898",
            gap: "10%",
            backgroundColor: "#11141A",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "5px",
              padding: "15px",
            }}
          >
            <img src={whatsappLogo} alt="whatsapplogo" style={{ width: "15px" }} />
            <img src={telegramLogo} alt="telegramlogo" style={{ width: "15px" }} />
            <span style={{ color: "white",  fontSize: "16px" }}>0912 505 1070</span>
          </div>
          <img style={{ position:"absolute", width: "35%", top: "50px" , left:"8%" }} src={footerImage} alt="footerImage" />
        </div>
      </div>
    </div>
  );
}
