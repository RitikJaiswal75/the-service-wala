import React, { Component } from "react";
import Slider from "react-slick";
import "./slider.css";

export default class PauseOnHover extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      pauseOnHover: true
    };
    return (
      <div className="slide">
    
        <Slider {...settings}>
          <div className="bimg">
            <img src="assets/c1.png" alt="img"/>
          </div>
          <div className="bimg">
            <img src="assets/c2.jpg" alt="img"/>
          </div>
          <div className="bimg">
            <img src="assets/c4.png" alt="img"/>
          </div>
          <div className="bimgg">
            <img src="assets/c7.jpg" alt="img"/>
          </div>
          <div className="bimg">
            <img src="assets/c34.jpg" alt="img"/>
          </div>
          <div className="bimg">
            <img src="assets/c6.jpg" alt="img"/>
          </div>
          <div className="bimg">
            <img src="assets/c5.png" alt="img"/>
          </div>
        </Slider>
      </div>
    );
  }
}