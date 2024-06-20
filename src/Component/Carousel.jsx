import Carousel from "react-bootstrap/Carousel";
import SliderImage from "../assets/sliderImage.png";

export default function CarouselComponent() {
  return (
    <>
      <Carousel style={{ width: "700px", paddingBottom: "50px" }} fade>
        <Carousel.Item>
          <img style={{ width: "inherit", height: "inherit" }} src={SliderImage} alt="image1" />
        </Carousel.Item>
        <Carousel.Item>
          <img style={{ width: "inherit", height: "inherit" }} src={SliderImage} alt="image2" />
        </Carousel.Item>
        <Carousel.Item>
          <img style={{ width: "inherit", height: "inherit" }} src={SliderImage} alt="image3" />
        </Carousel.Item>
      </Carousel>
    </>
  );
}
