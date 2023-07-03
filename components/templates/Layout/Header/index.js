import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { FiPhone } from "react-icons/fi";
import { MdOutlineLightMode, MdDarkMode } from "react-icons/md";
import { GoLocation } from "react-icons/go";
import { MdEmail } from "react-icons/md";
import { ThemContext } from "../../../../common/context";
import Social from "components/atoms/Social";

export default function Header({ socialLayoutLeft }) {
  const dataMenu = [
    { name: "Home", id: "header", href: "/" },
    { name: "About", id: "about", href: "/about" },
    { name: "Resum", id: "resum", href: "/resum" },
    { name: "Skill", id: "skill", href: "/skill" },
    { name: "Project", id: "project", href: "/project" },
  ];

  const [open, setOpen] = useState(false);
  const { theme, setTheme } = useContext(ThemContext);
  const [isToggleOn, setIsToggleOn] = useState(true);
  const router = useRouter();

  // slice '/' url
  const routerAsPath = () => {
    let result;
    if (router.asPath.length > 2 && router.asPath.endsWith("/")) {
      result = router.asPath.slice(0, -1);
    } else {
      result = router.asPath;
    }
    return result;
  };
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

  return (
    <header
      className="fixed top-0 left-0 z-50 w-full bg-[#272b44] text-gleads-oxfordBlue-900 h-20 shadow-2xl"
      id="header"
    >
      <nav className="flex items-center justify-between w-full pr-4 h-20 bg-[#272b44]">
        <div className="p-4  shadow-2xl ">
          <Image
            className="m-4"
            src="/assets/logo.png"
            alt="logo"
            width={50}
            height={50}
          />
        </div>
        <div className=" flex justify-between items-center lg:col-11 h-full lg:pl-20">
          <div className="lg:col-8 hidden lg:block">
            <ul className="flex">
              {dataMenu.map((item, index) => {
                return (
                  <li key={index} className="mr-14 last:mr-0">
                    <Link href={item.href}>
                      <a
                        className={`${
                          routerAsPath() === item.href
                            ? "text-main "
                            : "text-white "
                        }    block cursor-pointer font-semibold hover:text-main text-lg  before:transition-all before:delay-150 before:duration-150 before:ease-in-out 
                         relative before:absolute before:left-0 before:-bottom-1 before:w-0 hover:before:w-full before:h-0.5  before:bg-main`}
                      >
                        {item.name}
                      </a>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          {/* <!-- dark and light mode toggle --> */}
          <button
            onClick={() => onSwitchAction()}
            type="button"
            className=" bg-white rounded-full p-2 mr-4 shadow-xl text-black hover:bg-main  transition-all hover:duration-150 delay-200 ease-in-out"
          >
            {isToggleOn ? (
              <MdDarkMode className=" transition ease-in-out" />
            ) : (
              <MdOutlineLightMode className=" transition ease-in-out" />
            )}
          </button>
          <div className="flex ">
            {/* dark mode */}
            <div className="flex items-center"></div>
            <div
              className="  mr-10  relative font-poppins font-semibold  before:content-[''] before:h-0.5 before:w-3
             before:bg-main before:absolute before:bottom-[11.5px] before:-left-6"
            >
              <a
                className="text-main font-medium cursor-pointer"
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
      {/* nav left */}
      {socialLayoutLeft && (
        <div className="absolute w-[84px] bg-[#272b44] shadow-2xl  h-[calc(100vh-80px)] z-20  hidden lg:block">
          <Social className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
        </div>
      )}
      {/* mobile */}
      <div
        className={`${
          open ? "right-0" : "-right-[1000px]"
        } absolute transition-all duration-200 w-[300px] bg-[#272b44]  h-[calc(100vh-80px)] z-20 pr-2  `}
      >
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
          <ul className="flex-col justify-center border-b border-dashed mb-4 pb-2 lg:hidden block">
            {dataMenu.map((item, index) => {
              return (
                <Link href={item.href} key={index}>
                  <a className="  cursor-pointer text-lg font-medium block mb-4">
                    {item.name}
                  </a>
                </Link>
              );
            })}
          </ul>
          <h3 className="text-3xl  text-main font-Playfair font-bold mb-6   text-center">
            Contact
          </h3>
          <p className="mb-10">
            Please see the information below for more details about me
          </p>
          <a href="tel:0337368371" className="inline-flex items-center mb-2">
            <FiPhone className="mr-4" color="#08D565" />
            0337368371
          </a>
          <a className="inline-flex items-center mb-2">
            <MdEmail className="mr-4" color="#08D565" /> ngoctri2207@gmail.com
          </a>
          <a className="inline-flex items-center mb-2">
            <GoLocation className="mr-4" color="#08D565" /> Ho Chi Minh City
          </a>
        </div>
      </div>
    </header>
  );
}
