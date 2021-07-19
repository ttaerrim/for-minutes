import React from "react";

import Header from "../component/Header.js";
import Footer from "../component/Footer.js";
import "./Main.css";
import "./animate.css";
import WOW from 'wow.js';

import ScrollAnimation from 'react-animate-on-scroll';

class Main extends React.Component {
  render() {
    
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"> </link>
    return (
      
      <div>
      <Header />

      <body data-spy="scroll" data-target=".navbar-collapse" data-offset="50">


      <section id="home">

      <div class="container">
            <div class="row">

                  <div class="col-md-offset-1 col-md-2 col-sm-3">
                        
                  </div>

                  <div class="col-md-8 col-sm-8">
                        <h1 class="wow fadeInUp" data-wow-delay="0.6s">Hey there, <br/> My name is "For-minutes"</h1>
                        <a href="/post" class="wow fadeInUp btn btn-default section-btn" data-wow-delay="1s">Get Started</a>
                  </div>

            </div>
      </div>
      </section>

      <section id="about">
          <div class="container">
                <div class="row">

                    <div class="col-md-8 col-sm-12">
                          <div class="about-thumb">
                              <div class="wow fadeInUp section-title" data-wow-delay="0.6s">
                                    <h2>A Little Bit Of Information</h2>
                                    <p><strong>Artificial intelligence meeting minutes summary service</strong></p>
                              </div>
                              <div class="wow fadeInUp" data-wow-delay="0.8s">
                                    <p>Award winning interdisciplinary Designer & Art director. We have a team who specialise in coding websites and themes perfect blend of style and function for a wide range of interactive product design.</p>
                              </div>
                              <ul class="social-icon">
                                    <li class="wow fadeInLeft" data-wow-delay="1s"><a href="#" class="fa fa-twitter"></a></li>
                                    <li class="wow fadeInUp" data-wow-delay="1.2s"><a href="#" class="fa fa-linkedin"></a></li>
                                    <li class="wow fadeInRight" data-wow-delay="1.4s"><a href="#" class="fa fa-dribbble"></a></li>
                              </ul>
                          </div>
                    </div>

                    <div class="col-md-4 col-sm-12">
                          <div class="wow fadeInUp" data-wow-delay="0.4s">
                              <h2>On Instagram</h2>
                          </div>

                          <div class="wow fadeInUp" data-wow-delay="0.6s">
                              <a href="https://www.instagram.com/p/cqED9yjN0j/">
                                    <img src="https://www.pixsy.com/wp-content/uploads/2021/04/ben-sweet-2LowviVHZ-E-unsplash-1.jpeg" class="img-responsive" alt="instagram image" width="100%"/>
                              </a>

                              <a href="https://www.instagram.com/p/enL0SsDN51/">
                                    <img src="https://www.pixsy.com/wp-content/uploads/2021/04/ben-sweet-2LowviVHZ-E-unsplash-1.jpeg" class="img-responsive" alt="instagram image" width="100%"/>
                              </a>

                              <a href="https://www.instagram.com/p/apOuRTDNwJ/">
                                    <img src="https://www.pixsy.com/wp-content/uploads/2021/04/ben-sweet-2LowviVHZ-E-unsplash-1.jpeg" class="img-responsive" alt="instagram image" width="100%"/>
                              </a>

                              <a href="https://www.instagram.com/p/ZXIj33jN2v/">
                                    <img src="https://www.pixsy.com/wp-content/uploads/2021/04/ben-sweet-2LowviVHZ-E-unsplash-1.jpeg" class="img-responsive" alt="instagram image" width="100%"/>
                              </a>

                              <a href="https://www.instagram.com/p/Xwev1FjN9-/">
                                    <img src="https://www.pixsy.com/wp-content/uploads/2021/04/ben-sweet-2LowviVHZ-E-unsplash-1.jpeg" class="img-responsive" alt="instagram image" width="100%"/>
                              </a>
                          </div>
                    </div>

                </div>
          </div>
      </section>


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
                              <img src="https://pbs.twimg.com/profile_images/758509270786646016/DcWSe9Qf_400x400.jpg" class="img-responsive" alt="Work" width="100%"/>
                         </a>
                    </div>
                    <h4>Frontend_LTL</h4>
               </div>

               <div class="wow fadeInUp col-md-3 col-sm-6" data-wow-delay="0.6s">
                    
                    <div class="work-thumb">
                         <a href="images/work-2.jpg" class="image-popup">
                              <img src="https://mblogthumb-phinf.pstatic.net/MjAxODA4MzFfMzMg/MDAxNTM1NzI0NTE4NzQ5.3iTpSkd2G6IL4sn1xhpVWHcHHxaencMCtItlxDG5GuEg.6pqoa-gJpLNSTv8yDsMjOrzCcRvtFPkB8HtU7GgkVKMg.JPEG.minuk0916/KakaoTalk_20180831_224832685.jpg?type=w800" class="img-responsive" alt="Work" width="100%"/>
                         </a>
                    </div>
                    <h4>Frontend_YJJ</h4>
               </div>

               <div class="wow fadeInUp col-md-3 col-sm-6" data-wow-delay="0.8s">
                    
                    <div class="work-thumb">
                         <a href="images/work-3.jpg" class="image-popup">
                              <img src="https://t1.daumcdn.net/cfile/tistory/99B00E3D5C57C5E621" class="img-responsive" alt="Work" width="100%"/>
                         </a>
                    </div>
                    <h4>Backend_KSJ</h4>
               </div>

               <div class="wow fadeInUp col-md-3 col-sm-6" data-wow-delay="0.8s">
                    
                    <div class="work-thumb">
                         <a href="images/work-4.jpg" class="image-popup">
                              <img src="https://lh3.googleusercontent.com/proxy/DY0vsyNmWp2cxK6AVAMxxurHFoDQjANGMYa8HJYnWOulgZnLS7EUGHJUxCImy27BQ_9nutqlenTShBTmOuIgLRSCgzhqXZ4Gk1BX6b16TDSc" class="img-responsive" alt="Work" width="100%"/>
                         </a>
                    </div>
                    <h4>Backend_LHY</h4>
               </div>

          </div>
     </div>
</section>

<section id="contact">
     <div class="container">
          <div class="row">

               <div class="col-md-12 col-sm-12">
                    <div class="wow fadeInUp section-title" data-wow-delay="0.2s">
                         <h2>You got projects?</h2>
                         <p>Lorem ipsum dolor sit amet, consectetur venenatis tincidunt.</p>
                    </div>
               </div>

               <div class="col-md-12 col-sm-12">
                    <div class="wow fadeInUp" data-wow-delay="0.6s">
                        <form id="contact-form">
                              <div class="col-md-4 col-sm-4">
                                   <input type="text" class="form-control" name="name" placeholder="Name"/>
                              </div>
                              <div class="col-md-4 col-sm-4">
                                   <input type="email" class="form-control" name="email" placeholder="Email"/>
                              </div>
                              <div class="col-md-4 col-sm-4">
                                   <input type="text" class="form-control" name="name" placeholder="Subject"/>
                              </div>
                              <div class="col-md-12 col-sm-12">
                                   <textarea class="form-control" rows="5" name="message" placeholder="Message"></textarea>
                              </div>
                              <div class="col-md-offset-9 col-md-3 col-sm-offset-3 col-sm-6">
                                   <button id="submit" type="submit" class="form-control" name="submit">Send Message</button>
                              </div>
                        </form>
                    </div>
               </div>

          </div>
     </div>
</section>

      
        </body>
      <Footer />
      </div>
      
    );
  }
}

export default Main;