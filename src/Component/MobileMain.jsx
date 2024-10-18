import React, { useState } from "react";
import CarouselComponent from "./MobileCarousel";
import ChevronLeft from "../assets/chevron-left.svg";
import FlagImage from "../assets/flagImageMobile.png";
import CustomerSatisfaction from "../assets/customerSatisfaction.svg";
import Clock from "../assets/clock.svg";
import FinanceDocs from "../assets/financeDocs.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Car from "../assets/car.png";
import Phone from "../assets/phone.svg";
import CarouselData from "../assets/data/CarouselData";
import closeBtn from "../assets/closebtn.png";

export default function MobileMain() {
  const [open, setOpen] = useState(false);
  const [selectedCarouselItem, setSelectedCarouselItem] = useState({});
  const [modalMainImage, setModalMainImage] = useState();
  const scrollToContactUs = () => {
    const contactUsSection = document.getElementById("contact-us");
    if (contactUsSection) {
      contactUsSection.scrollIntoView({ behavior: "smooth" });
    }
  };
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
  const statusEnum = { 1: "موجود", 2: "ناموجود", 3: "نامشخص" };
  return (
    <>
      <div style={{ display: "flex", flexDirection: "column" }} className="body">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            position: "relative",
            direction: "rtl",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", padding: "20px", gap: "5px" }}>
            <span style={{ fontSize: "26px", fontWeight: "bold", color: "white" }}>
              راکر موتورز
            </span>
            <span style={{ color: "#DCDCDC" }}>مرکز تخصصی معامله خودرو</span>
          </div>
          <CarouselComponent />
        </div>
        <div style={{ display: "flex", width: "100%", justifyContent: "center" }}>
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
              padding: "13px 30px",
              margin: "50px 0 100px 0",
            }}
          >
            <img style={{ width: "18px", height: "18px" }} src={ChevronLeft} alt="chevron" />
            <span onClick={scrollToContactUs}>اطلاعات تماس</span>
          </div>
        </div>

        <span
          style={{
            direction: "rtl",
            textAlign: "center",
            fontSize: "14px",
            color: "#DCDCDC",
            fontWeight: "lighter",
            padding: "0 20px",
          }}
        >
          شرکت راکرموتورز با{" "}
          <span style={{ fontWeight: "bold", color: "white" }}>هدف ارتقا سطح کیفی معاملات</span>{" "}
          خودرویی و{" "}
          <span style={{ fontWeight: "bold", color: "white" }}>عقد قرارداد در بستری مطمئن</span>{" "}
          تاسیس شد.{" "}
        </span>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
            margin: "50px 0",
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
                width: "98%",
                height: "auto",
                textAlign: "right",
                backgroundColor: "#11141A",
                borderRadius: "5px",
                padding: "15px 135px 15px 15px",
                justifyContent: "center",
                fontSize: "14px",
                direction: "rtl",
                fontWeight: "lighter",
                gap: "12px",
                color: "#DCDCDC",
              }}
            >
              <span>
                مجموعه راکرموتورز با دارا بودن
                <span style={{ fontWeight: "bold", color: "white" }}> 7 پارکینگ اختصاصی</span>{" "}
                توانایی <span style={{ fontWeight: "bold", color: "white" }}>پذیرش خودرو</span>
                های مراجعه کنندگان گرامی را داشته و مراجعه کنندگان میتوانند خودرو ی خود را با{" "}
                <span style={{ fontWeight: "bold", color: "white" }}>رسید امانت</span> به مجموعه
                سپرده تا خودرو{" "}
                <span style={{ fontWeight: "bold", color: "white" }}>در فضایی امن</span> به رویت
                خریداران برسد
              </span>
            </div>
            <div dir="rtl" style={{ position: "absolute", right: "0", top: "-15%" }}>
              <img style={{ width: "35%", height: "auto" }} src={FlagImage} alt="" />
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              backgroundColor: "#11141A",
              border: "1px solid gray",
              borderLeft: "none",
              borderRight: "none",
              borderRadius: "5px",
              color: "white",
              margin: "40px 0",
              width: "100%",
              justifyContent: "center",
              padding: "5px 15px",
            }}
          >
            <span
              dir="rtl"
              style={{ display: "flex", color: "#DCDCDC", fontSize: "12px", fontWeight: "lighter" }}
            >
              آدرس دفتر: تهران, محمودیه, خیابان سالار, پلاک14, ساختمان سالوک4, واحد401
            </span>
            <a
              style={{
                display: "flex",
                flexDirection: "row-reverse",
                fontSize: "12px",
                fontWeight: "bold",
              }}
              href={`tel:09125051070`}
            >
              09125051070
            </a>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{ display: "flex", flexDirection: "column-reverse", width: "80%", gap: "50px" }}
          >
            {array.length > 0 &&
              array.map((item, index) => {
                return (
                  <div
                    style={{
                      zIndex: "10",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-evenly",
                      alignItems: "center",
                      textAlign: "center",
                      height: "200px",
                      width: "100%",
                      borderRadius: "10px",
                      background:
                        "linear-gradient(180deg, rgba(21,24,30,1) 30%, rgba(0,0,0,0) 80%)",
                    }}
                  >
                    <span style={{ color: "white" }}>{item.title}</span>
                    <span
                      style={{
                        color: "#acacac",
                        fontWeight: "lighter",
                        fontSize: "14px",
                        lineBreak: "normal",
                        padding: "0px 50px 20px",
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

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            margin: "100px 0",
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
            swipeable={true}
            draggable={true}
            showDots={false}
            responsive={responsive}
            ssr={true}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={5000}
            keyBoardControl={true}
            transitionDuration={1000}
            customTransition="transform 1000ms ease"
            containerClass="carousel-container"
            // removeArrowOnDeviceType={["tablet", "mobile"]}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
          >
            {CarouselData?.length > 0 &&
              CarouselData.map((item, index) => {
                return (
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      margin: "10px",
                      cursor: "pointer",
                    }}
                    onClick={() => {
                      setSelectedCarouselItem(item);
                      setModalMainImage(item.images[0]);
                      return setOpen(true);
                    }}
                  >
                    <img
                      style={{ backgroundColor: "gray", height: "250px", objectFit: "cover" }}
                      src={item.defaultImage}
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
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            position: "fixed",
            zIndex: "1000",
            width: "100%",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.82)",
            gap: "10px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              background: "#16181E",
              border: "1px solid #FFA200",
              borderRadius: "10px",
              height: "fit-content",
              margin: "0 20px",
              padding: "10px",
              boxShadow: "0px 0px 63px -40px rgba(255,255,255,1)",
              width: "96%",
            }}
          >
            <span style={{ fontSize: "20px", color: "white", textAlign: "right" }}>
              {selectedCarouselItem.title}
            </span>
            <div
              style={{
                flex: 2,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                margin: "10px",
                gap: "10px",
              }}
            >
              <img
                src={modalMainImage}
                style={{ width: "100%", height: "200px", objectFit: "cover" }}
                alt="modalMainImage"
              />

              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  width: "100%",
                  justifyContent: "space-between",
                  gap: "inherit",
                }}
              >
                {selectedCarouselItem?.images?.length > 0 &&
                  selectedCarouselItem.images?.map((image, index) => {
                    return (
                      <img
                        key={index}
                        src={image}
                        style={{ width: "50px", objectFit: "cover" }}
                        alt="carImage"
                        id={`carImage ${index}`}
                        onClick={() => {
                          setModalMainImage(image);
                        }}
                      />
                    );
                  })}
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                width: "100%",
                height: "100%",
                padding: "10px",
                gap: "20px",
              }}
            >
              <div style={{ display: "flex", flexDirection: "row", gap: 10, width: "100%" }}>
                <div
                  style={{
                    display: "flex",
                    width: "30%",
                    flexDirection: "column",
                    borderRadius: "15px",
                    boxShadow: "rgb(0, 0, 0) 0px 0px 11px 1px inset",
                    fontSize: "16px",
                    color: "white",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: "15px",
                    gap: "5px",
                  }}
                >
                  <span style={{ color: "gray", fontSize: "8px" }}>:سال تولید</span>
                  <span style={{ color: "white", fontSize: "12px" }}>
                    {selectedCarouselItem.year}
                  </span>
                </div>
                <div
                  style={{
                    display: "flex",
                    width: "30%",
                    flexDirection: "column",
                    borderRadius: "15px",
                    boxShadow: "rgb(0, 0, 0) 0px 0px 11px 1px inset",
                    fontSize: "16px",
                    color: "white",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: "15px",
                    gap: "5px",
                  }}
                >
                  <span style={{ color: "gray", fontSize: "8px" }}>:کارکرد</span>
                  <span style={{ color: "white", fontSize: "12px" }}>
                    {selectedCarouselItem.kilometer}
                  </span>
                </div>
                <div
                  style={{
                    display: "flex",
                    width: "40%",
                    flexDirection: "column",
                    borderRadius: "15px",
                    boxShadow: "rgb(0, 0, 0) 0px 0px 11px 1px inset",
                    fontSize: "16px",
                    color: "white",
                    alignItems: "center",
                    padding: "15px",
                    gap: "5px",
                  }}
                >
                  <span style={{ color: "gray", fontSize: "8px" }}>:وضعیت بدنه</span>
                  <span style={{ color: "white", fontSize: "12px" }}>
                    {selectedCarouselItem.bodyCondition}
                  </span>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  gap: 10,
                  width: "100%",
                }}
              >
                <span
                  style={{
                    display: "flex",
                    textAlign: "right",
                    color: "white",
                    fontSize: "10px",
                    lineHeight: "20px",
                    fontWeight: "lighter",
                  }}
                >
                  {selectedCarouselItem.description}
                </span>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    direction: "rtl",
                    color: "white",
                    gap: "5px",
                    padding: "10px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      gap: "5px",
                      justifyContent: "right",
                      alignItems: "center",
                    }}
                  >
                    <span style={{ fontSize: "10px" }}>وضعیت:</span>
                    <span
                      style={{
                        fontSize: "10px",
                        color:
                          selectedCarouselItem.status === 1
                            ? "#33FF00"
                            : selectedCarouselItem.status === 2
                            ? "#FFA200"
                            : "red",
                      }}
                    >
                      {statusEnum[selectedCarouselItem.status]}
                    </span>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      gap: "5px",
                      justifyContent: "right",
                      alignItems: "center",
                    }}
                  >
                    <span style={{ fontSize: "10px" }}>قیمت:</span>
                    <span style={{ fontSize: "16px", color: "#FFA200" }}>
                      {selectedCarouselItem?.price?.toLocaleString()}
                    </span>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      gap: "5px",
                      justifyContent: "right",
                      alignItems: "center",
                    }}
                  >
                    <span style={{ fontSize: "10px" }}>شماره تماس:</span>
                    <a
                      style={{ fontSize: "14px" }}
                      href={`tel:${selectedCarouselItem?.phone?.replace(/-/g, "")}`}
                    >
                      {selectedCarouselItem.phone}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <span
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#363636",
              color: "white",
              width: "25px",
              height: "25px",
              borderRadius: "50%",
              cursor: "pointer",
            }}
            onClick={() => {
              setOpen(false);
            }}
          >
            <img src={closeBtn} style={{ width: "10px", height: "10px" }} alt="closebtn" />
          </span>
        </div>
      )}
    </>
  );
}
