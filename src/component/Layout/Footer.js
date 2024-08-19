import React, { useState, useEffect } from 'react';
import ASSET_PATHS from '../../constant';

const Footer = () => {
  const imgRoute = ASSET_PATHS.IMG_URL;

  // State to track whether the screen is mobile
  const [isMobile, setIsMobile] = useState(window.matchMedia("(max-width: 767px)").matches);

  useEffect(() => {
    // Function to handle screen size changes
    const handleResize = () => {
      setIsMobile(window.matchMedia("(max-width: 767px)").matches);
    };

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Clean up event listener on unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      {/* Mobile Footer */}
      {isMobile && (
        <div className='mobile-footer'>
          <div className='container'>
            <div className='text-center my-4'>
              <img src={`${imgRoute}/flogo.png`} alt='logo' className='w-50 mb-3' />
            
              <div className='offer mb-5'>
                <h4 className='text-center'>Sign in</h4>
                <div className='offer-list'>
                  <div><a href='/' className='account'>Create an account</a></div>
                </div>
              </div>

              <p><a href='/'>blog.ARITHMETIC.ai</a></p>




           
              <div className='twitter mb-3'>
              <p>marketing@ARM</p>
                <a href='https://x.com/arithmetic_ai?s=21' target='_blank' rel='noopener noreferrer'>
                  <img src={`${imgRoute}/twitter.png`} alt='twitter' />
                </a>
              </div>

              <span>© 2022-2024</span>
             
            </div>
          </div>
        </div>
      )}

      {/* Desktop Footer */}
      {!isMobile && (
        <div className='container my-5'>
          <div className="row">
            <div className="col-6 col-md-4 my-2">
              <div className='logo'>
                <img src={`${imgRoute}/flogo.png`} alt='logo' className='w-47' />
                <p><a href='/'>blog.ARITHMETIC.ai</a></p>
                <span>© 2022-2024</span>
                <p>marketing@ARM</p>
                <div className='twitter'>
                  <p><a href='https://x.com/arithmetic_ai?s=21' target='_blank' rel='noopener noreferrer'>
                    <img src={`${imgRoute}/twitter.png`} alt='twitter' />
                  </a></p>
                </div>
              </div>
            </div>
            <div className="col-6 col-md-4 col-lg-2 my-2">
              <div className='offer'>
                <h4>Main</h4>
                <div className='link-footer'>
                  <a href="#Usecase" className='text-none'><div>Use cases</div></a>
                  <a href="#ARM" className='text-none'><div>About ARAMS</div></a>
                </div>
              </div>
            </div>
            <div className="col-6 col-md-4 col-lg-2 my-2">
              <div className='offer'>
                <h4>Menu</h4>
                <div className='link-footer'>
                  <a href="#roadmap" className='text-none'><div>Roadmap</div></a>
                  <a href="#FAQ" className='text-none'><div>FAQ</div></a>
                </div>
              </div>
            </div>
            <div className="col-4 col-md-4 col-lg-2 my-2">
              <div className='offer'>
                <h4>Documents</h4>
                <div className='link-footer'>
                  <div>Terms of use</div>
                  <div>Privacy Policy</div>
                  <div>API</div>
                </div>
              </div>
            </div>
            <div className="col-4 col-md-4 col-lg-2 my-2">
              <div className='offer'>
                <h4>Sign in</h4>
                <div className='offer-list'>
                  <div><a href='/' className='account'>Create an account</a></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Footer;
