import React, { useState, useEffect } from "react";
import "./cardslider.css";

export default function Price() {
  // State to track if the screen is mobile-sized
  const [isMobile, setIsMobile] = useState(
    window.matchMedia("(max-width: 425px)").matches
  );

  useEffect(() => {
    // Function to update the state based on screen size
    const handleResize = () => {
      setIsMobile(window.matchMedia("(max-width: 425px)").matches);
    };

    // Add event listener for screen size changes
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const testimonials = [
    {
      Card: "RTX 3090",
      NOC: "Number of cards",
      Number: "x1",
      pro:"Processor",
      Processor: "6 core amd",
      R:"RAM",
      Ram: "60gb",
      per: "0.25$ per hour",
    },
    {
        Card: "RTX 3090TI",
        NOC: "Number of cards",
        Number: "x1",
        pro:"Processor",
        Processor: "Intel xeon",
        R:"RAM",
        Ram: "126gb",
        per: "0.22$ per hour",
    },
    {
        Card: "RTX 4090",
        NOC: "Number of cards",
        Number: "x2",
        pro:"Processor",
        Processor: "8 core amd",
        R:"RAM",
        Ram: "170gb",
        per: "1.05$ per hour",
    },
    {
        Card: "RTX 3070",
        NOC: "Number of cards",
        Number: "x12",
        pro:"Processor",
        Processor: "g4400",
        R:"RAM",
        Ram: "8gb",
        per: "0.2$ per hour",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to go to the next testimonial
  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  // Function to go to the previous testimonial
  const prevTestimonial = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <div className="w-100">
      {/* Render desktop pricing table */}
      {!isMobile && (
        <div className="pricing-table" style={{ display: "none" }}>
          <div className="row w-100 mx-auto d-flex justify-content-center">
            <div className="col-lg-2 col-md-2 col-sm-3 col-3">
              Number of cards
            </div>
            <div className="col-lg-2 col-md-3 col-sm-2 col-3">Processors</div>
            <div className="col-lg-3 col-md-3 col-sm-3 col-3">RAM</div>
          </div>

          <div className="pricing-row">
            <div className="title">RTX 3090</div>
            <div className="number">
              x <br /> 1
            </div>
            <div className="processor">6 core AMD</div>
            <div className="ram">60 GB</div>
            <div className="total">0.255$ per hour</div>
          </div>

          <div className="pricing-row">
            <div className="title">RTX 3090</div>
            <div className="number">
              x <br /> 1
            </div>
            <div className="processor">6 core AMD</div>
            <div className="ram">60 GB</div>
            <div className="total">0.255$ per hour</div>
          </div>

          <div className="pricing-row">
            <div className="title">RTX 3090</div>
            <div className="number">
              x <br /> 1
            </div>
            <div className="processor">6 core AMD</div>
            <div className="ram">60 GB</div>
            <div className="total">0.255$ per hour</div>
          </div>
        </div>
      )}

      {/* Render mobile testimonial slider */}
      {isMobile && (
        <div className="testimonial-slider">
          <div className="testimonial-card">
            <p >{testimonials[currentIndex].Card}</p>
            <div className="d-flex justify-content-start  align-items-center">
              <span className="prices-slide__item-title">
                {testimonials[currentIndex].NOC}
              </span>
              <span className="num"> {testimonials[currentIndex].Number}</span>
            </div>
            <div className="d-flex justify-content-start  align-items-center">
              <span className="prices-slide__item-title">
                {testimonials[currentIndex].pro}
              </span>
              <span className="num"> {testimonials[currentIndex].Processor}</span>
            </div>
            <div className="d-flex justify-content-start  align-items-center">
              <span className="prices-slide__item-title">
                {testimonials[currentIndex].R}
              </span>
              <span className="num"> {testimonials[currentIndex].Ram}</span>
            </div>

            <div className="border-margin"></div>

            <div className="prices-slide__price">{testimonials[currentIndex].per}</div>
            
          </div>

          <div className="indicator-container">
            {testimonials.map((_, index) => (
              <span
                key={index}
                className={`indicator ${
                  currentIndex === index ? "active" : ""
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
