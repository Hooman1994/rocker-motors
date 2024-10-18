import React from "react";
import "../scss/header.scss";
import footerImage from "../assets/footerImage.png";
import instagramLogo from "../assets/instagramLogo.svg";
import whatsappLogo from "../assets/whatsappLogo.svg";
import telegramLogo from "../assets/telegramLogo.svg";

export default function Footer() {
  return (
    <div
      id="contact-us"
      style={{
        display: "flex",
        position: "relative",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
      className="footer"
    >
      <img
        style={{ position: "absolute", width: "18%", left: "27%" }}
        src={footerImage}
        alt="footerImage"
      />
      <div style={{ display: "flex", flexDirection: "column", width: "44vw", alignItems: "end" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "end",
            width: "25vw",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "inherit",
              fontSize: "12px",
              height: "70px",
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
          <span>:پل های ارتباطی دیگر</span>
          <div
            style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "5px" }}
          >
            <img src={whatsappLogo} alt="whatsapplogo" style={{ width: "15px" }} />
            <img src={telegramLogo} alt="telegramlogo" style={{ width: "15px" }} />
            <span style={{ color: "white" }}>0912 505 1070</span>
          </div>
        </div>
      </div>
    </div>
  );
}
