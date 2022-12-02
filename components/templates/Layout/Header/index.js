import { useState, useEffect, useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiChevronsDown } from "react-icons/fi";
import logo from "../../../../public/logo.png";
import { ThemContext } from "../../../../common/context";
import { data } from "browserslist";
export default function Header() {
  const dataMenu = [
    { name: "Home", id: "header", href: "/" },
    { name: "About", id: "about", href: "/about" },
    { name: "Resum", id: "resum", href: "/resum" },
    { name: "Skill", id: "skill", href: "/skill" },
    { name: "Project", id: "project", href: "/project" },
  ];
  const dataSocial = [
    { src: "fb", width: "8", height: "16" },
    { src: "inta", width: "16", height: "16" },
    { src: "sky", width: "16", height: "16" },
    { src: "tw", width: "18", height: "14" },
  ];
  const [active, setActive] = useState(0);
  const goToAbout = () => {
    const scrollToTable = document.querySelector('[id ^= "about"]');
    window.scrollTo({
      top: scrollToTable.offsetTop - 40,
      behavior: "smooth",
    });
  };

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
  const handClickMenu = () => {
    setOpen(!open);
  };
  const CardSocial = ({ src, height, width }) => {
    return (
      <a
        href="https://www.facebook.com/"
        target="_blank"
        rel="noreferrer"
        className="border border-[#bec1d1]  w-10 h-10 flex justify-center items-center rounded mb-4"
      >
        <Image
          src={`/assets/icons/${src}.svg`}
          className="w-full h-full"
          loading="lazy"
          width={width}
          height={height}
          alt="Icon"
        />
      </a>
    );
  };
  return (
    <header className="headerLayout relative" id="header">
      <nav className="flex items-center justify-between w-full pr-4 h-20 bg-[#272b44]">
        <div className="p-4 shadow-2xl border-r-2 border-b-2 border-[#1f2336]">
          <Image
            className="m-4"
            src="/assets/logo.png"
            alt="logo"
            width={50}
            height={50}
          />
        </div>
        <div className=" flex justify-between items-center lg:col-11 h-full lg:pl-20">
          <div className="lg:col-5 hidden lg:block">
            {" "}
            <ul className="flex">
              {dataMenu.map((item, index) => {
                return (
                  <Link href={item.href} key={index}>
                    <a className="uppercase font-Playfair cursor-pointer font-semibold mr-14">
                      {item.name}
                    </a>
                  </Link>
                );
              })}
            </ul>
          </div>
          <div className="flex ">
            <div className=" border-r-2 mr-10  border-[#1f2336]  relative font-poppins font-semibold  before:content-[''] before:h-0.5 before:w-3 before:bg-main before:absolute before:bottom-[11.5px] before:-left-6">
              <a
                className="text-main font-medium cursor-pointer0"
                href="tel:0337 368 371"
              >
                0337 368 371
              </a>
            </div>

            <button className="w-8 h-18 relative" onClick={handClickMenu}>
              <div
                className={`${
                  open ? "rotate-45 mb-0 h-1" : "mb-2"
                } h-0.5 bg-white w-full  transition-all duration-200 ease-in-out`}
              ></div>
              <div
                className={`${
                  open ? "hidden" : "block mb-2"
                } h-0.5 bg-white w-full   transition-all duration-200 ease-in-out`}
              ></div>
              <div
                className={`${
                  open ? "-rotate-45 h-1 absolute top-[10px]" : ""
                } h-0.5 bg-white w-full transition-all duration-200 ease-in-out`}
              ></div>
            </button>
          </div>
        </div>
      </nav>
      <div className="absolute w-[84px] bg-[#272b44]  h-[calc(100vh-80px)] z-20 pr-2 hidden lg:block">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          {dataSocial.map((item, index) => {
            return (
              <CardSocial
                key={index}
                src={item.src}
                width={item.width}
                height={item.height}
              />
            );
          })}
        </div>
      </div>
    </header>
  );
}
