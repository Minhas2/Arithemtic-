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

        <div className="col-4 center">
          <div className="blue-box d-flex justify-content-center flex-column align-items-center">
            <div className="mt-3 slide-title">Success</div>
            <div className="mb-4 slide-date">February 2024</div>
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
            <div className="mb-4 slide-date">March 2024</div>
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
            <div className="mb-4 slide-date">April 2024</div>
            <img
              src="../assest/image/slide 4.png"
              alt=""
              className="w-slide mb-4"
            />

            <div className="relative">
              <img src="../assest/image/wave1.png" alt="" className="w-100" />
              <div className="abs-text1">
                Users can now top-up their accounts in dollars and view logs in
                their accounts.+ introduces maximum fair price feature.
              </div>
            </div>
          </div>
        </div>

        <div className="col-4 center">
          <div className="blue-box d-flex justify-content-center flex-column align-items-center">
            <div className="mt-3 slide-title">Success</div>
            <div className="mb-4 slide-date">May 2024</div>
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
            <div className="mt-3 slide-title">Success</div>
            <div className="mb-4 slide-date">June 2025</div>
            <img
              src="../assest/image/slide 6.png"
              alt=""
              className="w-slide mb-4"
            />

            <div className="relative">
              <img src="../assest/image/wave3.png" alt="" className="w-100" />
              <div className="abs-text1">
                Rolled out pre-selected OC profiles for mining-grade machines.
                Customers can choose specific OC profiles given by hosting
                providers. This feature helps specialized miners. Added more
                forwarding nodes for faster service. Introduced a referral
                system.
              </div>
            </div>
          </div>
        </div>

        <div className="col-4 center">
          <div className="blue-box d-flex justify-content-center flex-column align-items-center">
            <div className="mt-3 slide-title">Success</div>
            <div className="mb-4 slide-date">July 2024</div>
            <img
              src="../assest/image/slide 7.png"
              alt=""
              className="w-slide mb-4"
            />

            <div className="relative">
              <img src="../assest/image/wave1.png" alt="" className="w-100" />
              <div className="abs-text1">
                Introduced the Clore Mining feature. If a user's farm isn't
                rented out, it can automatically mine the top-paying coin and
                switch if a better one comes up.
              </div>
            </div>
          </div>
        </div>

        <div className="col-4 center">
          <div className="blue-box d-flex justify-content-center flex-column align-items-center">
            <div className="mt-3 slide-title">Success</div>
            <div className="mb-4 slide-date">June 2024</div>
            <img
              src="../assest/image/slide 8.png"
              alt=""
              className="w-slide mb-4"
            />

            <div className="relative">
              <img src="../assest/image/wave2.png" alt="" className="w-100" />
              <div className="abs-text1">
                Added more options like Tensorflow, Pytorch with Jupyter Lab,
                and fitcrack. Introduced a review function.
              </div>
            </div>
          </div>
        </div>

        <div className="col-4 center">
          <div className="blue-box d-flex justify-content-center flex-column align-items-center">
            <div className="mt-3 slide-title">Success</div>
            <div className="mb-4 slide-date">August 2024</div>
            <img
              src="../assest/image/slide 9.png"
              alt=""
              className="w-slide mb-4"
            />

            <div className="relative">
              <img src="../assest/image/wave3.png" alt="" className="w-100" />
              <div className="abs-text1">
                Used a neural network to set up MFP for new servers
                automatically.
              </div>
            </div>
          </div>
        </div>

        <div className="col-4 center">
          <div className="blue-box d-flex justify-content-center flex-column align-items-center">
            <div className="mt-3 slide-title">Success</div>
            <div className="mb-4 slide-date">september 2024</div>
            <img
              src="../assest/image/slide 10.png"
              alt=""
              className="w-slide mb-4"
            />

            <div className="relative">
              <img src="../assest/image/wave3.png" alt="" className="w-100" />
              <div className="abs-text1">
                Clore got listed on the MEXC exchange. Clore.ai reached 20k open
                orders on the marketplace. Started a blog on blog.clore.ai.
                Users have now locked over 60m CLORE coins in proof-of-holding,
                which is about 1/3 of all coins.
              </div>
            </div>
          </div>
        </div>

        <div className="col-4 center">
          <div className="blue-box d-flex justify-content-center flex-column align-items-center">
            <div className="mt-3 slide-title">Success</div>
            <div className="mb-4 slide-date">Octobar 2024</div>
            <img
              src="../assest/image/slide 11.png"
              alt=""
              className="w-slide mb-4"
            />

            <div className="relative">
              <img src="../assest/image/wave3.png" alt="" className="w-100" />
              <div className="abs-text1">
                Made major updates to MFP and set CLORE as the main payment
                method.
              </div>
            </div>
          </div>
        </div>

        <div className="col-4 center">
          <div className="blue-box d-flex justify-content-center flex-column align-items-center">
            <div className="mt-3 slide-title">Success</div>
            <div className="mb-4 slide-date">November 2024</div>
            <img
              src="../assest/image/slide 12.png"
              alt=""
              className="w-slide mb-4"
            />

            <div className="relative">
              <img src="../assest/image/wave3.png" alt="" className="w-100" />
              <div className="abs-text1">
                Added private containers, improved the entire functionality of
                interaction with containers, Сoinex listing, Rate listing
              </div>
            </div>
          </div>
        </div>
        
      </Slider>
    </div>
  );
}

export default Responsive;
