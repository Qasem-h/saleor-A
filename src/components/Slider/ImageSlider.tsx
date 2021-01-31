import "./scss/index.scss";
import React from "react";
import Slider from "react-animated-slider";
import { SLIDER_CONTENT } from "../../core/config";

const ImageSlider: React.FC = () => (
  <Slider classNames="slider" autoplay={5000}>
    {SLIDER_CONTENT &&
      SLIDER_CONTENT.map((item, index) => (
        <div
          key={index}
          className="sliderContent"
          style={{ background: `url('${item.image}') no-repeat center center` }}
        >
          <div className="inner">
            <h1>{item.title}</h1>
            <p>{item.description}</p>
            <button>{item.button}</button>
          </div>
        </div>
      ))}
  </Slider>
);
export default ImageSlider;
