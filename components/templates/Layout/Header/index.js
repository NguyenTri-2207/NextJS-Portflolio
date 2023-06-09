import { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import { FiPhone } from "react-icons/fi";
import { FaFacebookF, FaInstagram, FaGithub } from "react-icons/fa";
import { GoLocation } from "react-icons/go";
import { MdEmail, MdLocationPin } from "react-icons/md";
import logo from "../../../../public/logo.png";
import { ThemContext } from "../../../../common/context";
import { data } from "browserslist";
import { Children } from "node_modules/react/cjs/react.production.min";

const styleInsta = {
  background: "#f09433",
  background:
    " -moz-linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)",
  background:
    "-webkit-linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)",
  background:
    "linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)",
  filter:
    "progid:DXImageTransform.Microsoft.gradient( startColorstr='#f09433', endColorstr='#bc1888',GradientType=1 )",
};
const styleFb = { background: "#036ce4" };
const styleGh = { background: "#000000" };
export default function Header() {
  const dataMenu = [
    { name: "Home", id: "header", href: "/" },
    { name: "About", id: "about", href: "/about" },
    { name: "Resum", id: "resum", href: "/resum" },
    { name: "Skill", id: "skill", href: "/skill" },
    { name: "Project", id: "project", href: "/project" },
  ];
  const dataSocial = [
    {
      icon: <FaFacebookF size={22} />,
      src: "https://www.facebook.com/nguyenngoctri2207/",
      style: styleFb,
    },
    {
      icon: <FaInstagram size={22} />,
      src: "https://www.instagram.com/tri_nguyen2207/",
      style: styleInsta,
    },
    {
      icon: <FaGithub size={22} />,
      src: "https://github.com/NguyenTri-2207",
      style: styleGh,
    },
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
  const CardSocial = ({ src, children, style }) => {
    return (
      <a
        style={style}
        href={src}
        target="_blank"
        rel="noreferrer"
        className="shadow-2xl  w-10 h-10 flex justify-center items-center rounded-xl mb-4"
      >
        {children}
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
                    <a
                      className={`${
                        routerAsPath() === item.href
                          ? "text-main "
                          : "text-white hover:text-main"
                      }  font-Playfair cursor-pointer font-bold mr-14  text-xl`}
                    >
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
      <div className="absolute w-[84px] bg-[#272b44]  h-[calc(100vh-80px)] z-20 pr-2 hidden lg:block">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          {dataSocial.map((item, index) => {
            return (
              <CardSocial
                key={index}
                src={item.src}
                style={item.style}
                width={item.width}
                height={item.height}
              >
                {item.icon}
              </CardSocial>
            );
          })}
        </div>
      </div>{" "}
      <div
        className={`${
          open ? "right-0" : "-right-[1000px]"
        } absolute transition-all duration-200 w-[300px] bg-[#272b44]  h-[calc(100vh-80px)] z-20 pr-2 `}
      >
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
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
