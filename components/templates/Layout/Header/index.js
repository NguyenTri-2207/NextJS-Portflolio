import { useState, useEffect } from "react";
import Image from "next/image";
import logo from "../../../../public/logo.png";
export default function Header() {
  const [open, setOpen] = useState(false);
  const [isSticky, setSticky] = useState(false);
  const handleScroll = () => {
    if (window.pageYOffset > 80) {
      if (!isSticky) {
        setSticky(true);
      }
    } else {
      if (isSticky) {
        setSticky(!isSticky);
      }
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", () => handleScroll);
    };
  }, []);
  return (
    <div className="headerLayout">
      <div className={`header ${open ? "active" : ""}`}>
        <div className={`navbar ${isSticky ? "sticky" : "no"}`}>
          <div className="menu">
            <div className="d-flex justify-content-center align-items-center pt-2">
              <div className="logo">
                <Image src={logo} alt="logo" />
              </div>

              <h3 className="logoText">
                Front-End<span>Developer</span>
              </h3>
            </div>

            <div className="hamburger-menu" onClick={() => setOpen(!open)}>
              <div className="bar"></div>
            </div>
          </div>
        </div>
        <div className="main-container">
          <div className="main">
            <header>
              <div className="overlay">
                <h2 className="title">Nguyễn Ngọc Trí</h2>
                <p className="description">
                  “All our dreams can come true, if we have the courage to
                  pursue them.”
                </p>
                <a href="#" className="btn">
                  Read More
                </a>
              </div>
            </header>
          </div>
          <div className="shadow one"></div>
          <div className="shadow two"></div>
        </div>
        <div className={`links ${open ? "activeLink" : ""}`}>
          <ul>
            <li className="active">
              <a href="#" transition-style="--i: 0.05s">
                Home
              </a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">Service</a>
            </li>
            <li>
              <a href="#">Portfolio</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
