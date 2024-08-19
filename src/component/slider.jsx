import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CustomPrevArrow, CustomNextArrow } from './Arrow';

function Responsive() {
  var settings = {
    dots: false,
    infinite: true, // Set to true to enable continuous looping
    speed: 500,
    slidesToShow: 3, // Display 3 slides at a time
    slidesToScroll: 1, // Scroll 1 slide at a time
    initialSlide: 0,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 2000, 
    prevArrow: <CustomPrevArrow />,
  nextArrow: <CustomNextArrow />,// Set autoplay speed in milliseconds (e.g., 2000ms = 2 seconds)
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 0,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="slider-container my-100">
      <Slider {...settings} className="row">
        <div className="col-4 center">
          <div className="blue-box d-flex justify-content-center flex-column align-items-center">
            <div className="mt-3 slide-title">AIRDROP</div>
            <div className="mb-4 slide-date">August 2024</div>
            <img
              src="../assest/image/slide 1.png"
              alt=""
              className="w-slide mb-4"
            />

            <div className="relative">
              <img src="../assest/image/wave1.png" alt="" className="w-100" />
              <div className="abs-text1">
                Arithmetic market was opened to the public for the masses $ARM
                is used for payments
              </div>
            </div>
          </div>
        </div>

        <div className="col-4 center">
          <div className="blue-box d-flex justify-content-center flex-column align-items-center">
            <div className="mt-3 slide-title">Success</div>
            <div className="mb-4 slide-date">October 2024</div>
            <img
              src="../assest/image/slide 2.png"
              alt=""
              className="w-slide mb-4"
            />

            <div className="relative">
              <img src="../assest/image/wave2.png" alt="" className="w-100" />
              <div className="abs-text1">
                Made big improvements based on user feedback, fixing hundreds of
                bugs.
              </div>
            </div>
          </div>
        </div>
        <div className="col-4 center">
          <div className="blue-box d-flex justify-content-center flex-column align-items-center">
            <div className="mt-3 slide-title">Success</div>
            <div className="mb-4 slide-date">January 2025</div>
            <img
              src="../assest/image/slide 3.png"
              alt=""
              className="w-slide mb-4"
            />

            <div className="relative">
              <img src="../assest/image/wave3.png" alt="" className="w-100" />
              <div className="abs-text1">
                Introduced an innovative proof-of-holding system. Users with ARM
                coins get big bonuses for using the arm platform. Added Hive OS
                support.
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default Responsive;
