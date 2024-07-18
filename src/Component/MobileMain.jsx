import React, { useState } from "react";
import CarouselComponent from "./Carousel";
import ChevronLeft from "../assets/chevron-left.svg";
import FlagImage from "../assets/flagImage.png";
import CustomerSatisfaction from "../assets/customerSatisfaction.svg";
import Clock from "../assets/clock.svg";
import FinanceDocs from "../assets/financeDocs.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Car from "../assets/car.png";
import Phone from "../assets/phone.svg";
import SliderImage from "../assets/sliderImage.png";
import BackgroundImage from "../assets/backgroundImage.svg";

export default function MobileMain() {
  const [open, setOpen] = useState(false);
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
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
  const sliderItems = [
    { image: Car, title: "BMW x6", info: "2015 - 70kM", status: 1, phone: "" },
    { image: Car, title: "BMW x6", info: "2015 - 70kM", status: 2, phone: "" },
    { image: Car, title: "BMW x6", info: "2015 - 70kM", status: 2, phone: "" },
    { image: Car, title: "BMW x6", info: "2015 - 70kM", status: 3, phone: "" },
    { image: Car, title: "BMW x6", info: "2015 - 70kM", status: 1, phone: "" },
    { image: Car, title: "BMW x6", info: "2015 - 70kM", status: 1, phone: "" },
    { image: Car, title: "BMW x6", info: "2015 - 70kM", status: 3, phone: "" },
    { image: Car, title: "BMW x6", info: "2015 - 70kM", status: 2, phone: "" },
  ];
  const statusEnum = { 1: "موجود", 2: "ناموجود", 3: "نامشخص" };
  const deviceType = "desktop";
  return (
    <>
      <div
        style={{ display: "flex", flexDirection: "column", margin: "0 0 20% 0", gap: "150px" }}
        className="body"
      >
        <div style={{ position: "absolute" ,top: "10%" }}>
          <div style={{ display: "flex", flexDirection: "column", position: "relative" }}>
          <span style={{ fontSize: "28px", fontWeight: "bold", color: "white" }}>
              راکر موتورز
            </span>
            <span style={{ color: "white" }}>مرکز تخصصی معامله خودرو</span>
          <img
            style={{ width: "100%", height: "300px", objectFit: "cover" }}
            src={SliderImage}
            alt="image1"
          />
          </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                fontSize: "14px",
                color: "#FFA701",
                border: "1px solid #FFA701",
                width: "fit-content",
                borderRadius: "5px",
                gap: "5px",
              }}
            >
              <span>اطلاعات تماس</span>
              <img style={{ width: "18px", height: "18px" }} src={ChevronLeft} alt="chevron" />
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
              top: "50%" 
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
            display: "flex",
            flexDirection: "column",
          }}
        >
          <span
            style={{
              color: "white",
              fontWeight: "bold",
              fontSize: "16px",
              lineBreak: "normal",
              padding: "0px 0px 20px",
              textAlign: "center",
            }}
          >
            میهمانان اخیر راکرموتورز
          </span>
          <Carousel
            swipeable={false}
            draggable={true}
            showDots={false}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            autoPlay={deviceType !== "mobile" ? true : false}
            autoPlaySpeed={5000}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={1000}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            deviceType={deviceType}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
          >
            {sliderItems.length > 0 &&
              sliderItems.map((item, index) => {
                return (
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      margin: "10px",
                    }}
                    onClick={() => {
                      return setOpen(true);
                    }}
                  >
                    <img
                      style={{ backgroundColor: "gray", height: "250px" }}
                      src={item.image}
                      alt="slider1"
                    />
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "7px",
                      }}
                    >
                      <span
                        style={{
                          color: "white",
                          fontWeight: "bold",
                        }}
                      >
                        {item.title}
                      </span>
                      <span
                        style={{
                          color: "white",
                          fontSize: "12px",
                        }}
                      >
                        {item.info}
                      </span>
                      <span
                        style={{
                          color: "white",
                          fontSize: "12px",
                        }}
                      >
                        وضعیت :{" "}
                        <span
                          style={{
                            color:
                              item.status === 1 ? "#33FF00" : item.status === 2 ? "#FFA200" : "red",
                          }}
                        >
                          {statusEnum[item.status]}
                        </span>
                      </span>
                      <div
                        style={{
                          display: "flex",
                          borderRadius: "8px",
                          border: "1px solid #313131",
                          padding: "5px",
                          gap: "5px",
                        }}
                      >
                        <img src={Phone} alt="phone" />
                        <span
                          style={{
                            color: "white",
                            fontSize: "12px",
                          }}
                        >
                          اطلاعات تماس
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
          </Carousel>
        </div>
      </div>
      {open && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
            position: "fixed",
            zIndex: "1000",
            width: "100%",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.82)",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              background: "#16181E",
              border: "1px solid #FFA200",
              borderRadius: "10px",
              height: "50%",
              width: "50%",
            }}
          >
            test
          </div>
          <span
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#363636",
              color: "white",
              width: "20px",
              height: "20px",
              borderRadius: "50%",
            }}
            onClick={() => {
              setOpen(false);
            }}
          >
            X
          </span>
        </div>
      )}
    </>
  );
}
