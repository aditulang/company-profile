import React from "react";
import { Carousel } from "react-bootstrap";
import Ptasmin1 from "../../../assets/img/Ptasmin1.png";
import Ptasmin2 from "../../../assets/img/Ptasmin2.png";
import Ptasmin3 from "../../../assets/img/Ptasmin3.png";
import Ptasmin4 from "../../../assets/img/Ptasmin4.png";
import Ptasmin5 from "../../../assets/img/Ptasmin5.png";

const PTasmin = () => {
  return (
    <div className="pt-asmin">
      <h2>PT Asmin Bara</h2>
      <p>VDA(Value Daily Assessment) Mobile</p>
      <Carousel variant="dark">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Ptasmin1}
            alt=""
            height="600px"
            width="80%"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Ptasmin2}
            alt=""
            height="600px"
            width="80%"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Ptasmin3}
            alt=""
            height="600px"
            width="80%"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Ptasmin4}
            alt=""
            height="600px"
            width="80%"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Ptasmin5}
            alt=""
            height="600px"
            width="80%"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default PTasmin;
