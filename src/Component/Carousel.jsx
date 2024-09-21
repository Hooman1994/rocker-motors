import Carousel from "react-bootstrap/Carousel";
import SliderImage from "../assets/sliderImage.png";
import SliderImage2 from "../assets/sliderImage2.jpg";
import SliderImage3 from "../assets/sliderImage3.jpg";

export default function CarouselComponent() {
  return (
    <>
      <Carousel style={{ width: "750px", height: "450px", paddingBottom: "50px" }} fade>
        <Carousel.Item>
          <img
            style={{ width: "750px", height: "400px", objectFit: "cover" }}
            src={SliderImage}
            alt="image1"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ width: "750px", height: "400px", objectFit: "cover" }}
            src={SliderImage2}
            alt="image2"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ width: "750px", height: "400px", objectFit: "cover" }}
            src={SliderImage3}
            alt="image3"
          />
        </Carousel.Item>
      </Carousel>
    </>
  );
}
