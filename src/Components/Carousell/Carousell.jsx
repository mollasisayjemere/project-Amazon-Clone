
import React from "react";
import { Carousel } from "react-responsive-carousel";
import { imageList } from "./data";
import "react-responsive-carousel/lib/styles/carousel.min.css";
function Carousell() {
  return (
    <div className="">
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showIndicators={false}
        showThumbs={false}
        showStatus
      >
        {imageList.map((Image, i) => {
          return <img src={Image} alt="" key={i} />;
        })}
      </Carousel>

      <div className="carsole__effct::before"></div>
    </div>
  );
}

export default Carousell;