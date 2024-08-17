import React from 'react'
import Layout from '../../component/Layout/Layout'
import ASSET_PATHS from '../../constant'
// import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Responsive from '../../component/slider';
// import './Home.css';

export default function Home() {
  const imgRoute = ASSET_PATHS.IMG_URL


  return (
    <>
      <Layout>
        <div className='home'>
          <div className="bg-2">
            <div className="bg-3">
              <div className='bg-feature'>
                <div className="Bg-y">
                  <div className="bg-art">

                    <div className='hero-seciton ' >
                      <div className='content'>
                        <h1>Distributed supercomputer
                          that fits your needs
                        </h1>
                        <p>
                          Access GPU computing nodes from community members all around the world
                        </p>
                        <p> Rent a server </p>
                      </div>
                      <div className='content-btn'>
                        <div> <img src={`${imgRoute}/scroll1.png`} alt='img_1' /> </div>
                        <div>  <span> Scroll <br /> to explore </span> </div>
                      </div>
                    </div>

                    <div className='case-section m-section'>

                      <div className='case-heading'>
                        <h1> Use cases </h1>
                      </div>

                      <div className='main-case'>

                        <div className='case-card'>
                          <h4>AI Training</h4>
                          <img src={`${imgRoute}/case1.png`} alt='icon' />
                          <p>Leverage the power of high-end GPUs for efficient and scalable AI model training. Ensure compatibility with various deep learning frameworks while prioritizing robust data security.</p>
                        </div>

                        <div className='case-card'>
                          <h4>Mining</h4>
                          <img src={`${imgRoute}/case2.png`} alt='icon' />
                          <p>Maximize your cryptocurrency mining speed and profitability with our powerful GPUs, all while minimizing high energy costs and avoiding the hassles of home maintenance.</p>
                        </div>

                        <div className='case-card'>
                          <h4>Movie Render</h4>
                          <img src={`${imgRoute}/case3.png`} alt='icon' />
                          <p>Create professional-grade movie renders with our powerful GPUs that drastically cut rendering time and are fully compatible with a wide range of rendering software.</p>
                        </div>


                      </div>

                    </div>

                    <div className='run-section m-section'>

                      <h1> Anything that runs in Docker can run on ARM </h1>

                      <div className='run-img'>
                        <div className='img-box'>
                          <img src={`${imgRoute}/run4.png`} alt='img_1' />
                        </div>
                        <div className='img-box'>
                          <img src={`${imgRoute}/run3.png`} alt='img_1' />
                        </div>
                        <div className='img-box'>
                          <img src={`${imgRoute}/run2.png`} alt='img_1' />
                        </div>
                        <div className='img-box'>
                          <img src={`${imgRoute}/run1.png`} alt='img_1' />
                        </div>
                      </div>


                    </div>

                    <div className='claim-section m-section m-section-3'>

                      <div className='img-box'>
                        <img src={`${imgRoute}/c1.png`} alt='img_1' />
                      </div>
                      <div className='img-box-2'>
                        <h4>Claim $ARM</h4>
                        <img src={`${imgRoute}/wlogo.png`} alt='img_1' />
                      </div>

                    </div>

                    <div className='why-section m-section-3'>
                      <div className='why-heading'>
                        <h1> Why Us </h1>
                      </div>

                      <div className='why-box'>

                        <div className='box'>
                          <img src={`${imgRoute}/box1.png`} alt='img_1' />
                          <h4>Low Price</h4>
                          <p>Experience premium GPU services at a fraction of the cost, making high-performance computing accessible without compromising on quality.</p>
                        </div>

                        <div className='box'>
                          <img src={`${imgRoute}/box2.png`} alt='img_1' />
                          <h4>Low Price</h4>
                          <p>Experience premium GPU services at a fraction of the cost, making high-performance computing accessible without compromising on quality.</p>
                        </div>

                        <div className='box'>
                          <img src={`${imgRoute}/box3.png`} alt='img_1' />
                          <h4>Low Price</h4>
                          <p>Experience premium GPU services at a fraction of the cost, making high-performance computing accessible without compromising on quality.</p>
                        </div>


                      </div>


                    </div>

                    <div className='compliance-section m-section '>
                      <h1> Legal compliance </h1>
                      <p> ARM operates in full compliance with European laws, guaranteeing the legitimacy and reliability of our operations. </p>
                    </div>

                    {/* hassan work */}
                    <section className='d-flex justify-content-center  flex-column container relative '>

                      <div className='row'>
                        <div className="col-md-6 col-sm-6 col-6 col-lg-3 h-100">
                          <div className='d-flex flex-column'>
                            <div className='num-fonts'>1</div>
                            <div className='count-font'>13.378 <br />
                              video cards</div>
                            <div className='d-flex justify-content-center mt-3'>
                              <img src="./assest/image/Legal1.png" alt="" className='legal-img' />
                            </div>
                          </div>
                        </div>

                        <div className=" col-md-6 col-sm-6 col-6 col-lg-3 h-100">
                          <div className='d-flex flex-column'>
                            <div className='num-fonts'>2</div>
                            <div className='count-font'>3.361 <br />
                              machines</div>
                            <div className='d-flex justify-content-center mt-3'>
                              <img src="./assest/image/Legal2.png" alt="" className='legal-img' />
                            </div>
                          </div>
                        </div>

                        <div className=" col-md-6 col-sm-6 col-6 col-lg-3 h-100">
                          <div className='d-flex flex-column'>
                            <div className='num-fonts'>3</div>
                            <div className='count-font'>122.6m $ARM <br />
                              coins</div>
                            <div className='d-flex justify-content-center mt-3'>
                              <img src="./assest/image/Legal3.png" alt="" className='legal-img' />
                            </div>
                          </div>
                        </div>

                        <div className=" col-md-6 col-sm-6 col-6 col-lg-3 h-100">
                          <div className='d-flex flex-column'>
                            <div className='num-fonts'>4</div>
                            <div className='count-font'>330.516 <br />
                              orders</div>
                            <div className='d-flex justify-content-center mt-3'>
                              <img src="./assest/image/Legal4.png" alt="" className='legal-img' />
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>



                    <div className='proof-section m-section-3 '>
                      <div className='proof-heading m-section'>
                        <h2 className='my-2'> Proof of holding system </h2>
                        <p> Experience the rewarding benefits of our unique "Proof of Holding" solution,
                          designed to incentivize and empower users who hold ARM coins. </p>
                      </div>

                      <div className='proof-container'>

                        <div className='proof-box'>
                          <div className='proof-pack'>
                            <div className='proof-box-img'>
                              <img src={`${imgRoute}/ul.png`} alt='img_1' />
                            </div>
                            <div className='proof-box-heading'>
                              <h5>Increased Rewards:</h5>
                              <p>The more Arithmetic coins you hold, the more bonus
                                $ARM you receive for leasing your equipment.</p>
                            </div>
                          </div>
                          <div className='proof-pack'>
                            <div className='proof-box-img'>
                              <img src={`${imgRoute}/ul.png`} alt='img_1' />
                            </div>
                            <div className='proof-box-heading'>
                              <h5>Increased Rewards:</h5>
                              <p>The more Arithmetic coins you hold, the more bonus
                                $ARM you receive for leasing your equipment.</p>
                            </div>
                          </div>
                          <div className='proof-pack'>
                            <div className='proof-box-img'>
                              <img src={`${imgRoute}/ul.png`} alt='img_1' />
                            </div>
                            <div className='proof-box-heading'>
                              <h5>Increased Rewards:</h5>
                              <p>The more Arithmetic coins you hold, the more bonus
                                $ARM you receive for leasing your equipment.</p>
                            </div>
                          </div>
                        </div>

                        <div className='proof-img'>
                          <img src={`${imgRoute}/proof.png`} alt='img_1' />
                        </div>

                        <div className='proof-box'>
                          <div className='proof-pack'>
                            <div className='proof-box-img'>
                              <img src={`${imgRoute}/ul.png`} alt='img_1' />
                            </div>
                            <div className='proof-box-heading'>
                              <h5>Increased Rewards:</h5>
                              <p>The more Arithmetic coins you hold, the more bonus
                                $ARM you receive for leasing your equipment.</p>
                            </div>
                          </div>
                          <div className='proof-pack'>
                            <div className='proof-box-img'>
                              <img src={`${imgRoute}/ul.png`} alt='img_1' />
                            </div>
                            <div className='proof-box-heading'>
                              <h5>Increased Rewards:</h5>
                              <p>The more Arithmetic coins you hold, the more bonus
                                $ARM you receive for leasing your equipment.</p>
                            </div>
                          </div>
                          <div className='proof-pack'>
                            <div className='proof-box-img'>
                              <img src={`${imgRoute}/ul.png`} alt='img_1' />
                            </div>
                            <div className='proof-box-heading'>
                              <h5>Increased Rewards:</h5>
                              <p>The more Arithmetic coins you hold, the more bonus
                                $ARM you receive for leasing your equipment.</p>
                            </div>
                          </div>
                        </div>

                      </div>
                    </div>


                    <div className='arthmetic-section m-section'>
                      <h1> Arithmetic </h1>
                      <p>ARM coin, the heart of our ecosystem, is a transparently mined
                        cryptocurrency with unique tokenomics. In a world where decentralization and
                        fair distribution matter, Clore coin stands out with its commitment to integrity
                        and equitable rewards.</p>
                    </div>


                    <div className='arthmetic-card m-section-2'>
                      <div className='arth-card'>
                        <img src={`${imgRoute}/ar1.png`} alt='icon' />
                        <h3>Honest Launch</h3>
                        <p>There was no premine or ICO. ARM coin
                          had the most transparent launch, making
                          mining available to anyone from day one.</p>
                      </div>
                      <div className='arth-card'>
                        <img src={`${imgRoute}/ar1.png`} alt='icon' />
                        <h3>Honest Launch</h3>
                        <p>There was no premine or ICO. ARM coin
                          had the most transparent launch, making
                          mining available to anyone from day one.</p>
                      </div>
                      <div className='arth-card'>
                        <img src={`${imgRoute}/ar1.png`} alt='icon' />
                        <h3>Honest Launch</h3>
                        <p>There was no premine or ICO. ARM coin
                          had the most transparent launch, making
                          mining available to anyone from day one.</p>
                      </div>
                      <div className='arth-card'>
                        <img src={`${imgRoute}/ar1.png`} alt='icon' />
                        <h3>Honest Launch</h3>
                        <p>There was no premine or ICO. ARM coin
                          had the most transparent launch, making
                          mining available to anyone from day one.</p>
                      </div>
                      <div className='arth-card'>
                        <img src={`${imgRoute}/ar1.png`} alt='icon' />
                        <h3>Honest Launch</h3>
                        <p>There was no premine or ICO. ARM coin
                          had the most transparent launch, making
                          mining available to anyone from day one.</p>
                      </div>
                      <div className='arth-card'>
                        <img src={`${imgRoute}/ar1.png`} alt='icon' />
                        <h3>Honest Launch</h3>
                        <p>There was no premine or ICO. ARM coin
                          had the most transparent launch, making
                          mining available to anyone from day one.</p>
                      </div>
                    </div>

                    <div className='platform-card m-section'>
                      <div className='plat-card'>
                        <img src={`${imgRoute}/p1.png`} alt='icon' />
                      </div>
                      <div className='plat-card'>
                        <img src={`${imgRoute}/p2.png`} alt='icon' />
                      </div>
                      <div className='plat-card'>
                        <img src={`${imgRoute}/p3.png`} alt='icon' />
                      </div>
                      <div className='plat-card'>
                        <img src={`${imgRoute}/p4.png`} alt='icon' />
                      </div>
                      <div className='plat-card'>
                        <img src={`${imgRoute}/p5.png`} alt='icon' />
                      </div>
                      <div className='plat-card'>
                        <img src={`${imgRoute}/p6.png`} alt='icon' />
                      </div>
                    </div>

                    <div className='pricing-section m-section'>

                      <h2>Our Prices</h2>
                      <p>Free bandwidth</p>

                      <div class="pricing-table">

                        <div className="row w-100 mx-auto d-flex justify-content-center m-425">
                          <div className="col-lg-2 col-md-2 col-sm-3 col-3">Number of cards</div>
                          <div className="col-lg-2 col-md-3 col-sm-2 col-3">Processors</div>
                          <div className="col-lg-3 col-md-3 col-sm-3 col-3 ">Ram</div>
                        </div>

                        {/* <div class="pricing-row-1">
                    <div className='number1'>Number of cards </div>
                    <div className='processor1'>Processor</div>
                    <div className='ram1'>Ram</div>
                  </div> */}

                        <div class="pricing-row">
                          <div className='title' >RTX 3090</div>
                          <div class="number">x <br /> 1</div>
                          <div class="processor">6 core amd</div>
                          <div class="ram">60 gb</div>
                          <div class="total">0.255$ per hour</div>
                        </div>

                        <div class="pricing-row">
                          <div className='title' >RTX 3090</div>
                          <div class="number"> x <br /> 1</div>
                          <div class="processor">6 core amd </div>
                          <div class="ram">60 gb</div>
                          <div class="total">0.255$ per hour</div>
                        </div>

                        <div class="pricing-row">
                          <div className='title' >RTX 3090</div>
                          <div class="number">x <br /> 1</div>
                          <div class="processor">6 core amd</div>
                          <div class="ram">60 gb</div>
                          <div class="total">0.255$ per hour</div>
                        </div>

                      </div>

                      <div class="price-notes">
                        <p>Participate in the Arithmetic Aidrop, you'll receive $ARM as a bonus.</p>
                      </div>

                    </div>

                    <div className='Roadmap-section m-section'>
                      <h2 className="text-center">Roadmap</h2>

                      <div className="container ">

                        <Responsive />

                      </div>

                    </div>

                    <div className='feature-section '>

                      <h2>As featured in</h2>

                      <div className='feature-img'>

                        <div className='feature-box'>
                          <img src={`${imgRoute}/f1.png`} alt='img_1' />
                        </div>
                        <div className='feature-box'>
                          <img src={`${imgRoute}/f2.png`} alt='img_1' />
                        </div>
                        <div className='feature-box'>
                          <img src={`${imgRoute}/f3.png`} alt='img_1' />
                        </div>
                        <div className='feature-box'>
                          <img src={`${imgRoute}/f4.png`} alt='img_1' />
                        </div>
                        <div className='feature-box'>
                          <img src={`${imgRoute}/f5.png`} alt='img_1' />
                        </div>

                      </div>

                    </div>

                    <div className='faq-section '>
                      <div className='faq-heading'>
                        <h1> FAQ </h1>
                      </div>

                      <div className='faq-box'>
                        <div className='box'>
                          <p>What hardware can i provide on the platform?<span>+</span></p>
                        </div>
                      </div>

                      <div className='faq-box'>
                        <div className='box'>
                          <p>Are there any fees?<span>+</span></p>
                        </div>
                      </div>

                      <div className='faq-box'>
                        <div className='box'>
                          <p>What is included when i rent a server?<span>+</span></p>
                        </div>
                      </div>



                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </Layout >
    </>
  )
}
