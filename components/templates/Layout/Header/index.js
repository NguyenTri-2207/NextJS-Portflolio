import { useState, useEffect, useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import { Form } from "react-bootstrap";
import { FiChevronsDown } from "react-icons/fi";
import logo from "../../../../public/logo.png";
import { ThemContext } from "../../../../common/context";
export default function Header() {
  const menu = [
    { name: "Home", id: "header" },
    { name: "About", id: "about" },
    { name: "Resum", id: "resum" },
    { name: "Project", id: "project" },
    { name: "My Blog", id: "blog" },
  ];
  const [active, setActive] = useState(0);
  const goToAbout = () => {
    const scrollToTable = document.querySelector('[id ^= "about"]');
    window.scrollTo({
      top: scrollToTable.offsetTop - 40,
      behavior: "smooth",
    });
  };
  const dark = "#333";
  const light = "#fff";
  const [open, setOpen] = useState(false);
  const { theme, setTheme } = useContext(ThemContext);
  const [isToggleOn, setIsToggleOn] = useState(false);
  const onSwitchAction = () => {
    setTheme(!theme);
    setIsToggleOn(!isToggleOn);
  };

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
    <div
      className="headerLayout"
      id="header"
      style={{ color: `${!theme ? light : dark}` }}
    >
      <div
        className={`header ${open ? "active" : ""}`}
        // style={{ background: "#333" }}
      >
        <div className={`navbar ${isSticky ? "sticky" : "no"}`}>
          <div className="menu">
            <div className="d-flex justify-content-center align-items-center pt-2">
              <div className="logo">{/* <img src={logo} alt="logo" /> */}</div>

              <h3
                className={`logoText ${
                  !open && theme ? " text-dark" : " text-white"
                }`}
              >
                Front-End<span>Developer</span>
              </h3>
            </div>
            <div className="d-flex align-items-center">
              <div onClick={onSwitchAction} className="ToggleSwitch">
                <div className={isToggleOn ? "knob active" : "knob"} />
                {/* <div className="text">{!isToggleOn ? "Dark" : "Light"} </div> */}
              </div>
              <div
                className="hamburger-menu ml-3"
                onClick={() => setOpen(!open)}
              >
                <div className="bar"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="main-container  bg-dark">
          <div className="main">
            <header className={`bg ${!theme ? "bg-dark" : "bg-light"}`}>
              <div className="overlay container">
                <div className="overlay_left">
                  {" "}
                  <h2 className="title ">Trí Nguyễn</h2>
                  <p className="description">
                    All our dreams can come true, if we have the courage to
                    pursue them.
                  </p>
                  <div className="btn p-0">
                    <button
                      id="buttonBanner"
                      className="linkHoverBanner"
                      onClick={goToAbout}
                    >
                      Let{`'`}s Go
                      <FiChevronsDown
                        width={12}
                        height={12}
                        className="discover"
                      />
                    </button>
                  </div>
                </div>
                <div className="overlay_right">
                  <div className="overlay_right__img"></div>
                </div>
              </div>
            </header>
          </div>
          <div className="shadow one"></div>
          <div className="shadow two"></div>
        </div>
        <div className={`links ${open ? "activeLink" : ""}`}>
          <ul>
            {menu.map((item, index) => {
              return (
                <li
                  key={index}
                  className={index === active ? "active" : null}
                  onClick={() => setActive(index)}
                >
                  <Link href={`#${item.id}`}>{item.name}</Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
