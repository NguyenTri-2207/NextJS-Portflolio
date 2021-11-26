import React, { useContext } from "react";
import { FaBirthdayCake } from "react-icons/fa";
import { BiMale } from "react-icons/bi";
import { BsBookmarksFill } from "react-icons/bs";
import { MdLocationOn } from "react-icons/md";
import { HiOutlineMail } from "react-icons/hi";
import { ImPhone } from "react-icons/im";
import { ThemContext } from "../../../common/context";
import Image from "next/image";
import img from "../../../public/working-at-night.jpg";
const About = () => {
  const { theme } = useContext(ThemContext);
  return (
    <div className="container ">
      <div className="about" id="about">
        <h2 className="about-name">About Us</h2>
        <div className="about-content">
          <div className="about-img col-lg-4  col-12">
            <Image src={img} alt="avt" />
            <div className="about-button d-none d-lg-block mt-4">
              <a
                href="https://www.topcv.vn/xem-cv/e8e3b19ebe45fcd1b26130dedc009ad5"
                target="_blank"
                rel="noreferrer"
              >
                <button>Download CV</button>
              </a>
              <a
                href="https://www.facebook.com/messages/t/100008894625672"
                target="_blank"
                rel="noreferrer"
              >
                <button>Send Messenger</button>{" "}
              </a>
            </div>
          </div>
          <div className="about-text col-lg-8 col-12">
            <div className="about-text1 mt-4 mt-lg-0">Who am i?</div>
            <div className="about-text2">
              I{`'`}m Tri and
              <span className="about-text3"> Front-End Developer</span>
            </div>
            <div className="about-text4">
              I{`'`}m a Web Developer, I am passionate and dedicated to my work.
              With the knowledge I learned in college and self-study at home, I
              gained the skills and knowledge needed to create a website
              interface. I am trying every day to improve my skills to become a
              senior front end developer
            </div>
            <div className="about-icon">
              <div className="about-icon-left">
                <div className="info-item">
                  <i>
                    <FaBirthdayCake />
                  </i>
                  <label>Birth day:</label>
                  <span className="pl-2">22/07/1996</span>
                </div>
                <div className="info-item">
                  <i>
                    <BiMale />
                  </i>
                  <label>Age:</label>
                  <span className="pl-2">25</span>
                </div>
                <div className="info-item">
                  <i>
                    <MdLocationOn />
                  </i>
                  <label>Location:</label>
                  <span className="pl-2">3/2 St, 10Dist,HCM</span>
                </div>
              </div>
              <div className="about-icon-reight pl-0 pl-md-5 mr-0 mr-md-3">
                <div className="info-item">
                  <i>
                    <BsBookmarksFill />
                  </i>
                  <label>Degree:</label>
                  <span className="pl-2">Junior</span>
                </div>
                <div className="info-item">
                  <i>
                    <HiOutlineMail />
                  </i>
                  <label>Mail:</label>
                  <a
                    className="pl-2"
                    href="mailto:ngoctri2207@gmail.com"
                    style={{ color: `${!theme ? "#fff" : "#333"}` }}
                  >
                    ngoctri2207@gmail.com
                  </a>
                </div>
                <div className="info-item">
                  <i>
                    <ImPhone />
                  </i>
                  <label>Phone:</label>

                  <a
                    className="pl-2"
                    href="tel:(+84)337.368.371"
                    style={{ color: `${!theme ? "#fff" : "#333"}` }}
                  >
                    (+84)337.368.371
                  </a>
                </div>
              </div>
            </div>
            <div className="about-button d-block d-lg-none">
              <a
                href="https://www.topcv.vn/xem-cv/e8e3b19ebe45fcd1b26130dedc009ad5"
                target="_blank"
                rel="noreferrer"
              >
                <button>Download CV</button>
              </a>
              <a
                href="https://www.facebook.com/messages/t/100008894625672"
                target="_blank"
                rel="noreferrer"
              >
                <button>Send Messenger</button>{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
