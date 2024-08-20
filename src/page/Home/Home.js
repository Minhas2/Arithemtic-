import React, { useState } from 'react';
import Layout from '../../component/Layout/Layout'
import ASSET_PATHS from '../../constant'
// import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Responsive from '../../component/slider';
import Price from '../../component/Layout/price';
// import './Home.css';

export default function Home() {
  const imgRoute = ASSET_PATHS.IMG_URL

  const [expanded, setExpanded] = useState(null);

  const toggleExpand = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  const faqs = [
    {
      question: "What hardware can i provide on the platform? ",
      answer: "Any reasonably modern computer/server with NVIDIA GPU"
    },
    {
      question: "What is included when i rent a server? ",
      answer: "You can forward up to 5 TCP ports to internet, which one of them can be runned through HTTPS proxy, so if you run any app with web interface you can connect securely to it. You can run any docker image that is available on hub.docker.com or some of our ready to use images with ubuntu"
    },
    {
      question: "Are there any fees? ",
      answer: "We currently charge 2.5% fee from orders placed on spot market and 10% from on demand orders for bitcoin payments, for USD payments we charge 19.5% fee due to higher transaction fees + very low order creation fee (lower than $0.01)"
    },

  ];





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
                        {/* <p> Rent a server </p> */}
                      </div>
                      <div className='content-btn'>
                        {/* <div> <img src={`${imgRoute}/scroll1.png`} alt='img_1' /> </div>
                        <div>  <span> Scroll <br /> to explore </span> </div> */}
                      </div>
                    </div>

                    <div className='case-section m-section' id='Usecase'>

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
                        <h1> Why Us ? </h1>
                      </div>

                      <div className='why-box my-res-425'>

                        <div className='box '>
                          <img src={`${imgRoute}/box1.png`} alt='img_1' />
                          <div>
                            <h4 className='font-blue'>Low Price</h4>
                            <p>Experience premium GPU services at a fraction of the cost, making high-performance computing accessible without compromising on quality.</p>
                          </div>
                        </div>

                        <div className='box'>
                          <img src={`${imgRoute}/box2.png`} alt='img_1' />
                          <div>
                            <h4 className='font-blue'>Bonus ARAM</h4>
                            <p>Earn ARM rewards when you lease
                              your video cards on our platform,
                              monetizing your resources and
                              building your crypto wealth.</p>
                          </div>
                        </div>

                        <div className='box mb-425'>
                          <img src={`${imgRoute}/box3.png`} alt='img_1' />
                          <div>
                            <h4 className='font-blue'>Powerful API</h4>
                            <p>Our robust API enables seamless
                              integration and customization, providing
                              you flexible control over your GPU leasing
                              and rental operations.</p>
                          </div>
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
                        <div className="col-md-6 col-sm-6 col-12 res-mt col-lg-3 h-100">
                          <div className='d-flex flex-column'>
                            {/* <div className='num-fonts'>1</div> */}
                            <div className='count-font'>13.378 <br />
                              video cards</div>
                            <div className='d-flex justify-content-center mt-3'>
                              <img src="./assest/image/Legal1.png" alt="" className='legal-img' />
                            </div>
                          </div>
                        </div>

                        <div className=" col-md-6 col-sm-6 col-12 res-mt col-lg-3 h-100">
                          <div className='d-flex flex-column'>
                            {/* <div className='num-fonts'>2</div> */}
                            <div className='count-font'>3.361 <br />
                              machines</div>
                            <div className='d-flex justify-content-center mt-3'>
                              <img src="./assest/image/Legal2.png" alt="" className='legal-img' />
                            </div>
                          </div>
                        </div>

                        <div className=" col-md-6 col-sm-6 col-12 res-mt col-lg-3 h-100">
                          <div className='d-flex flex-column'>
                            {/* <div className='num-fonts'>3</div> */}
                            <div className='count-font'>122.6m $ARM <br />
                              coins</div>
                            <div className='d-flex justify-content-center mt-3'>
                              <img src="./assest/image/Legal3.png" alt="" className='legal-img' />
                            </div>
                          </div>
                        </div>

                        <div className=" col-md-6 col-sm-6 col-12 res-mt col-lg-3 h-100">
                          <div className='d-flex flex-column'>
                            {/* <div className='num-fonts'>4</div> */}
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
                              <img src={`${imgRoute}/ul.png`} alt='img_1' className='proof_img' />
                            </div>
                            <div className='proof-box-heading'>
                              <h5>Increased Rewards:</h5>
                              <p>The more Arithmetic coins you hold, the more bonus
                                $ARM you receive for leasing your equipment.</p>
                            </div>
                          </div>
                          <div className='proof-pack'>
                            <div className='proof-box-img'>
                              <img src={`${imgRoute}/ul.png`} alt='img_1' className='proof_img' />
                            </div>
                            <div className='proof-box-heading'>
                              <h5>Hassle-Free Usage:</h5>
                              <p>No need to transfer money to our wallet. Simply
                                sign the transaction from your desktop wallet
                                to participate.</p>
                            </div>
                          </div>
                          <div className='proof-pack'>
                            <div className='proof-box-img'>
                              <img src={`${imgRoute}/ul.png`} alt='img_1' className='proof_img' />
                            </div>
                            <div className='proof-box-heading'>
                              <h5>No Blocking:</h5>
                              <p>Your money is not blocked; you're free to
                                withdraw it for exchange or sale at your
                                convenience.</p>
                            </div>
                          </div>
                        </div>

                        <div className='proof-img'>
                          <img src={`${imgRoute}/proof.png`} alt='img_1' />
                        </div>

                        <div className='proof-box'>
                          <div className='proof-pack'>
                            <div className='proof-box-img'>
                              <img src={`${imgRoute}/ul.png`} alt='img_1' className='proof_img' />
                            </div>
                            <div className='proof-box-heading'>
                              <h5>Service Discounts:</h5>
                              <p>ARM coin holders enjoy up to a 50% discount
                              on our commission for services.</p>
                            </div>
                          </div>
                          <div className='proof-pack'>
                            <div className='proof-box-img'>
                              <img src={`${imgRoute}/ul.png`} alt='img_1' className='proof_img' />
                            </div>
                            <div className='proof-box-heading'>
                              <h5>Optional Use:</h5>
                              <p>Participation in Proof of Holding is entirely
optional, but it's a great way to maximize the
benefits of owning ARM coins.</p>
                            </div>
                          </div>
                          <div className='proof-pack'>
                            <div className='proof-box-img'>
                              <img src={`${imgRoute}/ul.png`} alt='img_1' className='proof_img' />
                            </div>
                            <div className='proof-box-heading'>
                              <h5>No Penalties:</h5>
                              <p>No restrictions or penalties apply if you decide
                              to withdraw money from Proof of Holding.</p>
                            </div>
                          </div>
                        </div>

                      </div>
                    </div>


                    <div className='arthmetic-section m-section'>
                      <h1> Arithmetic </h1>
                      <p>ARM coin, the heart of our ecosystem, is a transparently mined
                        cryptocurrency with unique tokenomics. In a world where decentralization and
                        fair distribution matter, ARM coin stands out with its commitment to integrity
                        and equitable rewards.</p>
                    </div>


                    <div className='arthmetic-card m-section-2'>
                      <div className='arth-card'>
                        <img src={`${imgRoute}/ar1.png`} alt='icon' className='ar-image-425' />
                        <h3 className='font-blue'>Honest Launch</h3>
                        <p>There was no premine or ICO. ARM coin
                          had the most transparent launch, making
                          mining available to anyone from day one.</p>
                      </div>
                      <div className='arth-card'>
                        <img src={`${imgRoute}/ar2.png`} alt='icon' className='ar-image-425' />
                        <h3 className='font-blue'>Fair distribution</h3>
                        <p>Our halving process gradually reduces
                          rewards with each block, ensuring fairness,
                          unlike Bitcoin's</p>
                      </div>
                      <div className='arth-card'>
                        <img src={`${imgRoute}/ar3.png`} alt='icon' className='ar-image-425' />
                        <h3 className='font-blue'>Does not mine on asics</h3>
                        <p>ARM coin is ASIC-resistant, preserving
                          decentralization and the democratic spirit
                          of cryptocurrency by mining without ASICs.</p>
                      </div>
                      <div className='arth-card'>
                        <img src={`${imgRoute}/ar4.png`} alt='icon' className='ar-image-425' />
                        <h3 className='font-blue'>Limited supply</h3>
                        <p>With a maximum cap of 1.3 billion coins set
                          to be fully mined in 20 years, scarcity is
                          ensured.</p>
                      </div>
                      <div className='arth-card'>
                        <img src={`${imgRoute}/ar5.png`} alt='icon' className='ar-image-425' />
                        <h3 className='font-blue'>Supports Ecosystem</h3>
                        <p>Holding ARM coins unlocks ecosystem
                          benefits, such as discounts and bonuses
                          through our Proof of Holding solution.</p>
                      </div>
                      <div className='arth-card'>
                        <img src={`${imgRoute}/ar6.png`} alt='icon' className='ar-image-425' />
                        <h3 className='font-blue'>Equitable Distribution</h3>
                        <p>The tokenomics ensures fair distribution,
                          with 50% of each block going to miners,
                          40% to hosters, and 10% to the team.</p>
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

                    <div className='pricing-section m-section' id='ARM'>

                      <h2>Our Prices</h2>
                      <p>Free bandwidth</p>

                      <Price />
                      <div className="pricing-table dis-none-425">
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



                      <div class="price-notes">
                        <div>Participate in the Arithmetic Aidrop, you'll receive $ARM as a bonus.</div>
                      </div>

                    </div>

                    <div className='Roadmap-section m-section' id='roadmap'>
                      <h2 className="text-center mar-100 road-header">Roadmap</h2>

                      <div className="slider-custom-container">

                        <Responsive />

                      </div>

                    </div>

                    <div className='feature-section ' id='market'>

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



                    <div className='faq-section ' id='FAQ'>
                      <div className='faq-heading'>
                        <h1> FAQ </h1>
                      </div>

                      <div >

                        {faqs.map((faq, index) => (
                          <div key={index}>
                            <p className='FAQ_BOX d-flex justify-content-between' onClick={() => toggleExpand(index)} style={{ cursor: 'pointer' }}>
                              {faq.question}  <span>{expanded === index ? '-' : '+'}</span>
                            </p>
                            {expanded === index && <p className='FAQ_answer'>{faq.answer}</p>}
                          </div>
                        ))}
                      </div>

                      {/* <div className='faq-box'>
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
                      </div> */}



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
