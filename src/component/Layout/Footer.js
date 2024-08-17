import React from 'react'
import ASSET_PATHS from '../../constant'

export default function Footer() {
  const imgRoute = ASSET_PATHS.IMG_URL

  return (
    <>
      <div className='container my-5'>
        <div className="row">
          <div className="col-6 col-md-4 my-2">
            <div className='logo'>
              <img src={`${imgRoute}/flogo.png`} alt='logo' className='w-47'/>
              <p><a href='/'>blog.ARITHMETIC.ai</a></p>
              <span>© 2022-2024</span>
              <p>marketing@ARM</p>
              <div className='twitter'>
                
                <p><a href='https://x.com/arithmetic_ai?s=21' target='_blank'>
                
                <img src={`${imgRoute}/twitter.png`} alt='twitter' />
                </a></p>

              </div>

            </div>
          </div>
          <div className="col-6 col-md-4 col-lg-2 my-2">
            <div className='offer'>
              <h4>Main</h4>
              <div className='link-footer'>
                <div>Use cases</div>
                <div>Statistic</div>
                <div>Types of rentals</div>
                <div>Proof of holding system</div>
                <div>About CLORE</div>
                <div>Roadmap</div>
                <div>FAQ</div>
              </div>
            </div>
          </div>
          <div className="col-6 col-md-4 col-lg-2 my-2">
            <div className='offer '>
              <h4>Menu</h4>
              <div className='link-footer'>
                <div>Marketplace</div>
                <div>Wallet</div>
                <div>Explorer</div>
                <div>Roadmap</div>
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
    </>
  )
}
