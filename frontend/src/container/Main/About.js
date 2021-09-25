import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "./About.css";
import CardItem from "../Cards/CardItem";

import OH_1 from "../../images/OH_1.jpg";
import OH_2 from "../../images/OH_2.jpg";
import OH_3 from "../../images/OH_3.PNG";
import PI_1 from "../../images/PI_1.PNG";
import PI_2 from "../../images/PI_2.PNG";
import PI_3 from "../../images/PI_3.PNG";
import HY from "../../images/HY.png";
import JJ from "../../images/JJ.jpg";
import TL from "../../images/TL.jpg";
import SJ from "../../images/SJ.jpg";
import T_JJ from "../../images/T_JJ.jpg";
import T_HY from "../../images/T_HY.jpg";
import T_TR from "../../images/T_TR.jpg";
import T_SJ from "../../images/T_SJ.jpg";

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div>
        <div className="grids">
          <div data-aos="fade-up" className="boxes">
            <section id="nino-latestBlog">
              <div className="container">
                <h2 className="nino-sectionHeading">Our History</h2>
                <div className="sectionContent">
                  <div className="row">
                    <div className="col-md-4 col-sm-4">
                      <article>
                        <div className="articleThumb">
                          <img src={OH_1} alt="" />
                          <div className="date">
                            <span className="number">27</span>
                            <span className="text">Mar</span>
                          </div>
                        </div>
                        <h3 className="articleTitle">
                          <div>프로젝트 기획 발표</div>
                        </h3>
                        <p className="articleDesc">
                          인공지능 회의 요약 서비스 'For-Minutes' 기획 <br />{" "}
                          적용 기술에 대한 자료 수집
                        </p>
                      </article>
                    </div>
                    <div className="col-md-4 col-sm-4">
                      <article>
                        <div className="articleThumb">
                          <img src={OH_2} alt="" />
                          <div className="date">
                            <span className="number">6</span>
                            <span className="text">May</span>
                          </div>
                        </div>
                        <h3 className="articleTitle">
                          <div>프로젝트 진행 및 회의</div>
                        </h3>
                        <p className="articleDesc">
                          프로젝트의 전반적인 기반 구축과 각 담당 포지션
                          프로그래밍 진행
                        </p>
                      </article>
                    </div>
                    <div className="col-md-4 col-sm-4">
                      <article>
                        <div className="articleThumb">
                          <img src={OH_3} alt="" />
                          <div className="date">
                            <span className="number">21</span>
                            <span className="text">June</span>
                          </div>
                        </div>
                        <h3 className="articleTitle">
                          <div>캡스톤 1학기 가전시</div>
                        </h3>
                        <p className="articleDesc">프로젝트 진행 상황 발표</p>
                      </article>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>

          <div data-aos="fade-up" className="boxes">
            <section id="nino-story">
              <div className="container">
                <h2 className="nino-sectionHeading">Paticipate In</h2>
                <p className="nino-sectionDesc">
                  인공지능 회의 요약 서비스 "For-minutes"
                  <br />
                  참여 중인 프로젝트
                </p>
                <div className="sectionContent">
                  <div className="row nino-hoverEffect">
                    <div className="col-md-4 col-sm-4">
                      <div className="item">
                        <a className="overlay" href="#">
                          <span className="content">
                            <i className="mdi mdi-account-multiple nino-icon"></i>
                            덕성여자대학교 <br />
                            졸업 작품 프로젝트
                          </span>
                          <img src={PI_1} alt="" />
                        </a>
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-4">
                      <div className="item">
                        <a className="overlay" href="#">
                          <span className="content">
                            <i className="mdi mdi-image-filter-center-focus-weak nino-icon"></i>
                            한이음 ICT 멘토링
                          </span>
                          <img src={PI_2} alt="" />
                        </a>
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-4">
                      <div className="item">
                        <a class="overlay" href="#">
                          <span className="content">
                            <i className="mdi mdi-airplay nino-icon"></i>
                            공개SW 개발자대회
                          </span>
                          <img src={PI_3} alt="" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>

          <div data-aos="fade-up" className="boxes">
            <section id="work">
              <div className="container">
                <div className="row">
                  <div className="col-md-12 col-sm-12">
                    <div
                      className="wow fadeInUp section-title"
                      data-wow-delay="0.2s"
                    >
                      <h2 className="nino-sectionHeading">Team JDJS</h2>
                    </div>
                  </div>
                  <CardItem />
                </div>
              </div>
            </section>
          </div>

          <div data-aos="fade-up" className="boxes">
            <section id="nino-happyClient">
              <div className="container">
                <h2 className="nino-sectionHeading">What we say</h2>
                <div className="sectionContent">
                  <div className="row">
                    <div className="col-md-6">
                      <div layout="row" class="item">
                        <div className="nino-avatar fsr">
                          <img className="img-circle" src={T_TR} alt="" />
                        </div>
                        <div className="info">
                          <h4 className="name">Lee Tae Rim</h4>
                          <span className="regency">Frontend</span>
                          <p className="desc">
                            이태림 말했잖아 언젠가 이런 날이 온다면 난 널 혼자
                            내버려두지 않을 거라고 죄다 낭떠러지야, 봐 예상했던
                            것보다 더 아플지도 모르지만 내 손을 잡으면 하늘을
                            나는 정도 그 이상도 느낄 수 있을 거야 눈 딱 감고
                            낙하- 하- 믿어 날 눈 딱 감고 낙하 눈 딱 감고 낙하-
                            하- 믿어 날 눈 딱 감고 낙하
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div layout="row" class="item">
                        <div className="nino-avatar fsr">
                          <img className="img-circle" src={T_JJ} alt="" />
                        </div>
                        <div className="info">
                          <h4 className="name">Yoo Jin Joo</h4>
                          <span className="regency">Frontend</span>
                          <p className="desc">
                            유진주 음... 후기... 뭐라쓰지
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div layout="row" class="item">
                        <div className="nino-avatar fsr">
                          <img className="img-circle" src={T_SJ} alt="" />
                        </div>
                        <div className="info">
                          <h4 className="name">Kang Su Ji</h4>
                          <span className="regency">Backend</span>
                          <p className="desc">
                            강수지 말했잖아 언젠가 이런 날이 온다면 난 널 혼자
                            내버려두지 않을 거라고 죄다 낭떠러지야, 봐 예상했던
                            것보다 더 아플지도 모르지만 내 손을 잡으면 하늘을
                            나는 정도 그 이상도 느낄 수 있을 거야 눈 딱 감고
                            낙하- 하- 믿어 날 눈 딱 감고 낙하 눈 딱 감고 낙하-
                            하- 믿어 날 눈 딱 감고 낙하
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div layout="row" class="item">
                        <div className="nino-avatar fsr">
                          <img className="img-circle" src={T_HY} alt="" />
                        </div>
                        <div className="info">
                          <h4 className="name">Lee Ha Yeon</h4>
                          <span className="regency">Backend</span>
                          <p className="desc">
                            이하연 말했잖아 언젠가 이런 날이 온다면 난 널 혼자
                            내버려두지 않을 거라고 죄다 낭떠러지야, 봐 예상했던
                            것보다 더 아플지도 모르지만 내 손을 잡으면 하늘을
                            나는 정도 그 이상도 느낄 수 있을 거야 눈 딱 감고
                            낙하- 하- 믿어 날 눈 딱 감고 낙하 눈 딱 감고 낙하-
                            하- 믿어 날 눈 딱 감고 낙하
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
       </div>
      </div>
  );
};

export default About;
