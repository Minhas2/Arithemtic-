import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CustomPrevArrow, CustomNextArrow } from "./Arrow";

function Responsive() {
  var settings = {
    dots: false,
    infinite: true, // Set to true to enable continuous looping
    speed: 500,
    slidesToShow: 3, // Display 3 slides at a time
    slidesToScroll: 1, // Scroll 1 slide at a time
    initialSlide: 0,
    autoplay: false, // Enable autoplay
    autoplaySpeed: 2000,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />, // Set autoplay speed in milliseconds (e.g., 2000ms = 2 seconds)
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
            <div className="mt-3 slide-title"> AIRDROP</div>
            <div className="mb-4 slide-date">August 2024</div>
            <img
              src="../assest/image/slide 3.png"
              alt=""
              className="w-slide mb-4"
            />

            <div className="relative">
              <img src="../assest/image/wave3.png" alt="" className="w-100" />
              <div className="abs-text1">
                The Arithmetic Market will be opened to the public, and $ARM
                will be used for payments.
              </div>
            </div>
          </div>
        </div>

        <div className="col-4 center">
          <div className="blue-box d-flex justify-content-center flex-column align-items-center">
            <div className="mt-3 slide-title">&nbsp;</div>
            <div className="mb-4 slide-date">September 2024</div>
            <img
              src="../assest/image/slide 1.png"
              alt=""
              className="w-slide mb-4"
            />

            <div className="relative">
              <img src="../assest/image/wave1.png" alt="" className="w-100" />
              <div className="abs-text1">
                Made big improvements based on user feedback, fixing hundreds of
                bugs.
              </div>
            </div>
          </div>
        </div>

        <div className="col-4 center">
          <div className="blue-box d-flex justify-content-center flex-column align-items-center">
            <div className="mt-3 slide-title">&nbsp;</div>
            <div className="mb-4 slide-date">October 2024</div>
            <img
              src="../assest/image/slide 2.png"
              alt=""
              className="w-slide mb-4"
            />

            <div className="relative">
              <img src="../assest/image/wave2.png" alt="" className="w-100" />
              <div className="abs-text1">
                ARM will be listed on the MEXC exchange. Arithmetic will reach
                20k open orders on the marketplace. A blog will launch on Arithmetic, and users will lock over 60 million ARM coins in proof-of-holding, about one-third of the total supply.
              </div>
            </div>
          </div>
        </div>

        <div className="col-4 center">
          <div className="blue-box d-flex justify-content-center flex-column align-items-center">
            <div className="mt-3 slide-title">&nbsp;</div>
            <div className="mb-4 slide-date">December 2024</div>
            <img
              src="../assest/image/slide 4.png"
              alt=""
              className="w-slide mb-4"
            />

            <div className="relative">
              <img src="../assest/image/wave1.png" alt="" className="w-100" />
              <div className="abs-text1">
                Users will be able to top-up their accounts in dollars and view
                logs in their accounts. Additionally, a maximum fair price
                feature will be introduced.
              </div>
            </div>
          </div>
        </div>

        <div className="col-4 center">
          <div className="blue-box d-flex justify-content-center flex-column align-items-center">
            <div className="mt-3 slide-title">&nbsp;</div>
            <div className="mb-4 slide-date">January 2025</div>
            <img
              src="../assest/image/slide 5.png"
              alt=""
              className="w-slide mb-4"
            />

            <div className="relative">
              <img src="../assest/image/wave2.png" alt="" className="w-100" />
              <div className="abs-text1">
                Launched a secure cloud by buying a data center. Users can now
                use our computing power. Popular media like Bloomberg, Yahoo,
                and MarketWatch covered this
              </div>
            </div>
          </div>
        </div>

        <div className="col-4 center">
          <div className="blue-box d-flex justify-content-center flex-column align-items-center">
            <div className="mt-3 slide-title">&nbsp;</div>
            <div className="mb-4 slide-date">February 2025</div>
            <img
              src="../assest/image/slide 6.png"
              alt=""
              className="w-slide mb-4"
            />

            <div className="relative">
              <img src="../assest/image/wave3.png" alt="" className="w-100" />
              <div className="abs-text1" >
                Pre-selected OC profiles for mining-grade machines will be
                rolled out. Customers will be able to choose specific OC
                profiles provided by hosting providers, which will help
                specialized miners. More forwarding nodes will be added for
                faster service, and a referral system will be introduced.
              </div>
            </div>
          </div>
        </div>

        <div className="col-4 center">
          <div className="blue-box d-flex justify-content-center flex-column align-items-center">
            <div className="mt-3 slide-title">&nbsp;</div>
            <div className="mb-4 slide-date">March 2025</div>
            <img
              src="../assest/image/slide 7.png"
              alt=""
              className="w-slide mb-4"
            />

            <div className="relative">
              <img src="../assest/image/wave1.png" alt="" className="w-100" />
              <div className="abs-text1">
                The ARM Mining feature will be introduced. If a user's farm
                isn’t rented out, it will automatically mine the top-paying coin
                and switch to a better one if a more profitable option becomes
                available.
              </div>
            </div>
          </div>
        </div>

        <div className="col-4 center">
          <div className="blue-box d-flex justify-content-center flex-column align-items-center">
            <div className="mt-3 slide-title">&nbsp;</div>
            <div className="mb-4 slide-date">June 2025</div>
            <img
              src="../assest/image/slide 8.png"
              alt=""
              className="w-slide mb-4"
            />

            <div className="relative">
              <img src="../assest/image/wave2.png" alt="" className="w-100" />
              <div className="abs-text1">
                More options will be added, including TensorFlow, PyTorch with
                Jupyter Lab, and Fitcrack. A review function will also be
                introduced.
              </div>
            </div>
          </div>
        </div>

        <div className="col-4 center">
          <div className="blue-box d-flex justify-content-center flex-column align-items-center">
            <div className="mt-3 slide-title">&nbsp;</div>
            <div className="mb-4 slide-date">August 2025</div>
            <img
              src="../assest/image/slide 9.png"
              alt=""
              className="w-slide mb-4"
            />

            <div className="relative">
              <img src="../assest/image/wave3.png" alt="" className="w-100" />
              <div className="abs-text1">
                A neural network will be used to set up MFP for new servers
                automatically.
              </div>
            </div>
          </div>
        </div>

        <div className="col-4 center">
          <div className="blue-box d-flex justify-content-center flex-column align-items-center">
            <div className="mt-3 slide-title">&nbsp;</div>
            <div className="mb-4 slide-date">October 2025</div>
            <img
              src="../assest/image/slide 10.png"
              alt=""
              className="w-slide mb-4"
            />

            <div className="relative">
              <img src="../assest/image/wave3.png" alt="" className="w-100" />
              <div className="abs-text1" style={{ lineHeight: "22px" }}>
                Major updates will be made to MFP, and ARM will be set as the
                main payment method.
              </div>
            </div>
          </div>
        </div>

        <div className="col-4 center">
          <div className="blue-box d-flex justify-content-center flex-column align-items-center">
            <div className="mt-3 slide-title">&nbsp;</div>
            <div className="mb-4 slide-date">November 2025</div>
            <img
              src="../assest/image/slide 4.png"
              alt=""
              className="w-slide mb-4"
            />

            <div className="relative">
              <img src="../assest/image/wave3.png" alt="" className="w-100" />
              <div className="abs-text1" style={{ lineHeight: "22px" }}>
                The Flux partnership will be established, Zellcore wallet
                integration will be added, the PAAL partnership will be formed,
                and an XT listing will be introduced.
              </div>
            </div>
          </div>
        </div>

        <div className="col-4 center">
          <div className="blue-box d-flex justify-content-center flex-column align-items-center">
            <div className="mt-3 slide-title">&nbsp;</div>
            <div className="mb-4 slide-date">December 2025</div>
            <img
              src="../assest/image/slide 10.png"
              alt=""
              className="w-slide mb-4"
            />

            <div className="relative">
              <img src="../assest/image/wave3.png" alt="" className="w-100" />
              <div className="abs-text1" style={{ lineHeight: "22px" }}>
                The Bitget listing will be introduced, and custom templates will
                be added to containers.
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default Responsive;
