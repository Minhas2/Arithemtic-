import React from 'react';

const CustomPrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="custom-prev-arrow d-flex justify-content-center align-items-center" onClick={onClick}>
      <span className='arrow-font'>&#8592;</span>
    </div>
  );
};

const CustomNextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="custom-next-arrow d-flex justify-content-center align-items-center" onClick={onClick}>
      <span className='arrow-font'>&#8594;</span>
    </div>
  );
};

export { CustomPrevArrow, CustomNextArrow };
