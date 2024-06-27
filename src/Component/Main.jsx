import React from "react";
import CarouselComponent from "./Carousel";
import ChevronLeft from "../assets/chevron-left.svg";
import FlagImage from "../assets/flagImage.png";
import CustomerSatisfaction from "../assets/customerSatisfaction.svg";
import Clock from "../assets/clock.svg";
import FinanceDocs from "../assets/financeDocs.svg";

export default function Main() {
  const array = [
    {
      title: "کوتاه ترین زمان ممکن",
      description: "متن توضیحات متن توضیحات متن توضیحات متن توضیحات متن توضیحات متن",
      image: Clock,
    },
    {
      title: "امور سندی و مالی",
      description: "متن توضیحات متن توضیحات متن توضیحات متن توضیحات متن توضیحات متن",
      image: FinanceDocs,
    },
    {
      title: "رضایت خریدار و فروشنده",
      description: "متن توضیحات متن توضیحات متن توضیحات متن توضیحات متن توضیحات متن",
      image: CustomerSatisfaction,
    },
  ];
  return (
    <>
      <div
        style={{ display: "flex", flexDirection: "column", margin: "0 0 30% 0", gap: "150px" }}
        className="body"
      >
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
              justifyContent: "space-between",
              top: "10%",
              display: "flex",
              flexDirection: "column",
              right: "7%",
              backgroundColor: "#11151B",
              zIndex: "1",
              width: "33%",
              height: "180px",
              padding: "20px",
              borderRadius: "5px",
              border: "1px solid #2a2a2a",
            }}
          >
            <span style={{ fontSize: "28px", fontWeight: "bold", color: "white" }}>
              راکر موتورز
            </span>
            <span style={{ color: "white" }}>مرکز تخصصی معامله خودرو</span>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                fontSize: "14px",
                color: "#FFA701",
                border: "1px solid #FFA701",
                width: "fit-content",
                padding: "7px 20px 7px 10px",
                borderRadius: "5px",
                gap: "5px",
              }}
            >
              <span>اطلاعات تماس</span>
              <img style={{ width: "18px", height: "18px" }} src={ChevronLeft} alt="chevron" />
            </div>
          </div>
        </div>
        <div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
              gap: "10px",
              position: "absolute",
              left: "0",
              right: "0",
            }}
          >
            <div
              style={{
                backgroundColor: "#11141A",
                border: "1px solid gray",
                width: "100%",
                borderLeft: "none",
                borderRight: "none",
                position: "relative",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "100%",
                  height: "200px",
                  textAlign: "right",
                  backgroundColor: "#11141A",
                  borderRadius: "5px",
                  padding: "0 500px 0 25%",
                  justifyContent: "center",
                  color: "white",
                  fontSize: "14px",
                }}
              >
                <span>
                  شرکت راکرموتورز با هدف ارتقاع سطح کیفی معاملات خودرویی و عقد قرارداد در بستری
                  مطمعن تاسیس شد,{" "}
                </span>
                <span>
                  مجموعه راکرموتورز با دارا بودن 7 پارکینگ اختصاصی توانایی پذیرش خودرو های مراجعه
                  کنندگان گرامی را داشته و مراجعه کنندگان میتوانند خودرو ی خود را با رسید امانت به
                  مجموعه سپرده تا خودرو در فضایی امن به رویت خریداران برسد
                </span>
              </div>
              <div style={{ position: "absolute", right: "20px", top: "-15%" }}>
                <img style={{ width: "60%" }} src={FlagImage} alt="" />
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                backgroundColor: "#11141A",
                border: "1px solid gray",
                width: "70%",
                height: "70px",
                borderRadius: "5px",
                paddingRight: "350px",
                justifyContent: "center",
                color: "white",
                textAlign: "right",
              }}
            >
              <span style={{ color: "#DCDCDC", fontSize: "14px" }}>
                آدرس دفتر: تهران, محمودیه, خیابان سالار, پلاک14, ساختمان سالوک4, واحد401
              </span>
              <span>0912 505 1070</span>
            </div>
          </div>
        </div>
        <div
          style={{
            margin: "20% 0",
            display: "flex",
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div style={{ display: "flex", width: "80%", gap: "50px" }}>
            {array.length > 0 &&
              array.map((item, index) => {
                return (
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-evenly",
                      alignItems: "center",
                      textAlign: "center",
                      height: "200px",

                      width: "50%",
                      borderRadius: "10px",
                      background:
                        "linear-gradient(180deg, rgba(21,24,30,1) 0%, rgba(0,0,0,0) 80%)",
                    }}
                  >
                    <span style={{ color: "white" }}>{item.title}</span>
                    <span
                      style={{
                        color: "#acacac",
                        fontWeight: "lighter",
                        fontSize: "14px",
                        lineBreak: "normal",
                        padding: "0px 30px 20px",
                      }}
                    >
                      {item.description}
                    </span>
                    <div>
                      <img style={{ width: "50%" }} src={item.image} alt="CustomerSatisfaction" />
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
}
