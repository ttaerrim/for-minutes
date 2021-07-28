import React, { useEffect } from "react";
import Aos from "aos"; 
import "aos/dist/aos.css";
import Header from "../component/Header.js";
import Footer from "../component/Footer.js";
import "./Main.css";
import Navigation from "../component/Navigation.js";


const About=() => {
    useEffect(()=>{
        Aos.init({duration:2000});
    },[]);

    return (
      <div>
      <Navigation />
        <div>
            <div className="grids">
                
                <div data-aos="fade-up" className="boxes">
                    <section id="about">
                    <div class="container">
                         <div class="row">

                              <div class="col-md-8 col-sm-12">
                                   <div class="about-thumb">
                                        <div class="wow fadeInUp section-title" data-wow-delay="0.6s">
                                             <h2>Project</h2>
                                             <p><strong>Artificial intelligence meeting minutes summary service</strong></p>
                                        </div>
                                        <div class="wow fadeInUp" data-wow-delay="0.8s">
                                             <p>Award winning interdisciplinary Designer & Art director. We have a team who specialise in coding websites and themes perfect blend of style and function for a wide range of interactive product design.</p>
                                        </div>
                                   </div>
                              </div>

                              <div class="col-md-4 col-sm-12">
                                   <div class="wow fadeInUp" data-wow-delay="0.4s">
                                        <h2>On Instagram</h2>
                                   </div>

                                   <div class="wow fadeInUp" data-wow-delay="0.6s">
                                        <a href="https://www.instagram.com/p/cqED9yjN0j/">
                                             <img src="https://photo.coolenjoy.net/data/editor/1801/20180115165108_qrveklet.jpg" class="img-responsive" alt="instagram image" width="100%"/>
                                        </a>

                                        <a href="https://www.instagram.com/p/enL0SsDN51/">
                                             <img src="https://i.pinimg.com/originals/9c/69/f0/9c69f0361aa1eae7aaedb00bbf94b541.png" class="img-responsive" alt="instagram image" width="100%"/>
                                        </a>

                                        <a href="https://www.instagram.com/p/apOuRTDNwJ/">
                                             <img src="https://lh3.googleusercontent.com/proxy/Jyg9CvLMirom6d6OXOgEi5WHXDka9dv8JQbFgJTYDfJMtjBtt4HSn1YFfH5kTINZ1J9vEs91ETKZLV9HS9zI3EDsPemnYeNyMHADO_IQbviCcOdSmxBwSlbpDUNHwzXzCts0rS_MsXtUQbUO8K7Csy5C-6PzNiJfuAw1n9SD6CkDZXpJNj3hjc-rbeDINi7rbD0wkTbLVoQa4fLHBtwfT37NvFU" class="img-responsive" alt="instagram image" width="100%"/>
                                        </a>

                                        <a href="https://www.instagram.com/p/ZXIj33jN2v/">
                                             <img src="https://www.apple.com/newsroom/images/product/os/macos/standard/Apple-macOS-Mojave-iMac-Pro-dark-mode-screen-09242018_big.jpg.large.jpg" class="img-responsive" alt="instagram image" width="100%"/>
                                        </a>

                                        <a href="https://www.instagram.com/p/Xwev1FjN9-/">
                                             <img src="http://thumbnail.10x10.co.kr/webimage/image/add2/310/A003104550_02.jpg?cmd=thumb&w=400&h=400&fit=true&ws=false" class="img-responsive" alt="instagram image" width="100%"/>
                                        </a>
                                   </div>
                              </div>

                         </div>
                    </div>
               </section>
                </div>

                <div data-aos="fade-right" className="boxes">
                              <section id="work">
                              <div class="container">
                                   <div class="row">

                                        <div class="col-md-12 col-sm-12">
                                             <div class="wow fadeInUp section-title" data-wow-delay="0.2s">
                                                  <h2>Team JDJS</h2>
                                                  <p>Collective intelligence refers to the result of cooperative participation and communication among multiple computer users, the result of collective action, the accumulation of judgment and knowledge, or the process thereof.</p>
                                             </div>
                                        </div>

                                        <div class="wow fadeInUp col-md-3 col-sm-6" data-wow-delay="0.4s">
                                             
                                             <div class="work-thumb">
                                                  <a href="images/work-1.jpg" class="image-popup">
                                                       <img src="images\TL.jpg" class="img-responsive" alt="Work" width="100%"/>
                                                  </a>
                                             </div>
                                             <h4>Frontend_LTL</h4>
                                        </div>

                                        <div class="wow fadeInUp col-md-3 col-sm-6" data-wow-delay="0.6s">
                                             
                                             <div class="work-thumb">
                                                  <a href="images/work-2.jpg" class="image-popup">
                                                       <img src="images\JJ.jpg" class="img-responsive" alt="Work" width="100%"/>
                                                  </a>
                                             </div>
                                             <h4>Frontend_YJJ</h4>
                                        </div>

                                        <div class="wow fadeInUp col-md-3 col-sm-6" data-wow-delay="0.8s">
                                             
                                             <div class="work-thumb">
                                                  <a href="images/work-3.jpg" class="image-popup">
                                                       <img src="images\SJ.jpg" class="img-responsive" alt="Work" width="100%"/>
                                                  </a>
                                             </div>
                                             <h4>Backend_KSJ</h4>
                                        </div>

                                        <div class="wow fadeInUp col-md-3 col-sm-6" data-wow-delay="0.8s">
                                             
                                             <div class="work-thumb">
                                                  <img src="images\HY.png" class="img-responsive" alt="Work" width="100%"/>
                                             </div>
                                             <h4>Backend_LHY</h4>
                                        </div>

                                   </div>
                              </div>
               </section>
                </div>
                
            </div>
        </div>
        <Footer />
      </div>
    );
    };


export default About;