import { AiFillGithub } from "react-icons/ai";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaPhoneVolume,
  FaArrowUp,
} from "react-icons/fa";
import { MdMap } from "react-icons/md";
import { RiSendPlaneFill } from "react-icons/ri";
const Footer = () => {
  const goToTop = () => {
    const scrollToTable = document.querySelector('[id ^= "header"]');
    window.scrollTo({
      top: scrollToTable.offsetTop - 40,
      behavior: "smooth",
    });
  };
  return (
    <footer id="dk-footer" className="dk-footer position-relative">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-4">
            <div className="info">
              <div href="index.html" className="footer-logo"></div>
              <p className="footer-info-text">
                A winner never stops trying. a winner never stops trying.
              </p>
              <div className="footer-social-link">
                <h3>Follow us</h3>
                <ul>
                  <li>
                    <a href="#">
                      <i style={{ background: "#3b5998" }}>
                        <FaFacebookF />
                      </i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i style={{ background: "rgb(228 14 14)" }}>
                        <FaYoutube />
                      </i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i style={{ background: "rgb(58 57 105)" }}>
                        <AiFillGithub />
                      </i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i style={{ background: "rgb(22 132 210)" }}>
                        <FaTwitter />
                      </i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i style={{ background: "rgb(255 73 73 / 71%)" }}>
                        <FaInstagram />
                      </i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-8 d-none d-md-block">
            <div className="row">
              <div className="col-md-6">
                <div className="contact-us pl-5">
                  <div className="contact-icon">
                    <i>
                      <MdMap />
                    </i>
                  </div>
                  <div className="contact-info ">
                    <h3>Việt Nam</h3>
                    <p>Quận 10 - HCM</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="contact-us contact-us-last">
                  <div className="contact-icon">
                    <i>
                      <FaPhoneVolume />
                    </i>
                  </div>
                  <div className="contact-info">
                    <h3>0337368371</h3>
                    <p>Give us a call</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 col-lg-6">
                <div className="footer-widget pl-5">
                  <div className="section-heading ">
                    <h3>Useful Links</h3>
                    <span className="animate-border border-black" />
                  </div>
                  <ul>
                    <li>
                      <a href="#">About us</a>
                    </li>
                    <li>
                      <a href="#">Experience</a>
                    </li>

                    <li>
                      <a href="#">Skill</a>
                    </li>
                    <li>
                      <a href="#">Project</a>
                    </li>
                  </ul>
                </div>
                {/* End Footer Widget */}
              </div>

              <div className="col-md-12 col-lg-6 ml-md-5 ml-lg-0">
                <div className="footer-widget">
                  <div className="section-heading">
                    <h3>Subscribe</h3>
                    <span className="animate-border border-black" />
                  </div>
                  <p>
                    Reference site about Lorem Ipsum, giving information on its
                    origins, as well.
                  </p>
                  <form action="#">
                    <div className="form-row">
                      <div className="col dk-footer-form">
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Email Address"
                        />
                        <button type="submit">
                          <i>
                            <RiSendPlaneFill />
                          </i>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <span>Copyright © 2021 NNT</span>
            </div>
            {/* End Col */}
            <div className="col-md-6">
              <div className="copyright-menu">
                <ul>
                  <li>
                    <a href="#header">Home</a>
                  </li>
                  <li>
                    <a href="#about">About</a>
                  </li>
                  <li>
                    <a href="#resum">Experience</a>
                  </li>
                  <li>
                    <a href="#skill">Skill</a>
                  </li>
                  <li>
                    <a href="#project">Project</a>
                  </li>
                </ul>
              </div>
            </div>
            {/* End col */}
          </div>
          {/* End Row */}
        </div>
        {/* End Copyright Container */}
      </div>

      <div id="back-to-top" className="back-to-top">
        <button
          className="btn btn-dark"
          title="Back to Top"
          style={{ display: "block" }}
          onClick={goToTop}
        >
          <i>
            <FaArrowUp />
          </i>
        </button>
      </div>
    </footer>
  );
};
export default Footer;
