import { useRouter } from "next/router";
import { useContext, useEffect, useRef, useState } from "react";
import { MdOutlineLightMode, MdDarkMode } from "react-icons/md";
import { DarkModeContext } from "common/context";
import Social from "components/atoms/Social";
import ProfileMenu from "./Profile/index";
import useOnClickOutside from "common/useOnClickOutside";

import i18nextConfig from "../../../../next-i18next.config";
import SelectSwitchLanguage from "components/molecules/SelectSwitchLanguage";
import LinkComponent from "components/molecules/Link";
import MapIconToComponent from "../Header/Icons";

export default function Header({ socialLayoutLeft, dataMenu }) {
  const [open, setOpen] = useState(false);
  const { darkMode, setDarkMode } = useContext(DarkModeContext);
  const [isToggleOn, setIsToggleOn] = useState(true);
  const router = useRouter();
  const [tokenAndUser, setTokenAndUser] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setTokenAndUser(localStorage.getItem("login"));
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const onSwitchAction = () => {
    setDarkMode(!darkMode);
    setIsToggleOn(!isToggleOn);
  };
  const ref = useRef();
  useOnClickOutside(ref, setOpen);

  const checkLinkActive = (item) => {
    let result;
    if (router.asPath.length > 2 && router.asPath.endsWith("/")) {
      result = router.asPath.slice(0, -1);
    } else {
      result = router.asPath;
    }
    const lastSegment = `/${result.split("/").pop()}`;

    return (
      lastSegment === item.href ||
      (result === "/en" && item.href === "/") ||
      (result === "/vi" && item.href === "/")
    );
  };

  return (
    <header
      ref={ref}
      className={`fixed top-0 left-0 z-50 w-full border-b transition-all duration-300 ${
        isScrolled
          ? "border-gray-200/50 dark:border-gray-700/50 backdrop-blur-sm"
          : "border-transparent"
      }`}
      style={
        isScrolled
          ? {
              background: darkMode
                ? "linear-gradient(to bottom, #1a1d24 0%, #1f2329 50%, #252932 100%)"
                : "linear-gradient(to bottom, #ffffff 0%, #fafbfc 50%, #f5f6f7 100%)",
            }
          : {}
      }
      id="header"
    >
      <nav className="container">
        <div className="row py-4 items-center">
          <div className="lg:col-3 xl:col-1 col-4 h-8 flex items-center">
            <LinkComponent 
              href="/"
              className="text-lg lg:text-xl font-bold text-gray-900 dark:text-white hover:opacity-80 transition-opacity tracking-wider"
            >
              TRI<span className="text-main">NG</span>UYEN
            </LinkComponent>
          </div>
          <div className="lg:col-9 xl:col-11 col-8 flex lg:justify-start justify-end xl:justify-end items-center h-10">
            <div className="col-8 xl:col-7 hidden lg:flex lg:items-center">
              <ul className="flex items-center flex-wrap">
                {Array.isArray(dataMenu) &&
                  dataMenu?.map((item, index) => {
                    const isActive = checkLinkActive(item);
                    return (
                      <li key={index} className="mr-6 lg:mr-8 xl:mr-10 last:mr-0">
                        <LinkComponent
                          href={item.href}
                          className={`block cursor-pointer font-semibold transition-all duration-200 relative text-sm lg:text-base ${
                            isActive
                              ? "text-main dark:text-main"
                              : "text-gray-700 dark:text-gray-300 hover:text-main dark:hover:text-main"
                          }`}
                        >
                          {item.name}
                          {isActive && (
                            <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-main"></span>
                          )}
                        </LinkComponent>
                      </li>
                    );
                  })}
              </ul>
            </div>
            {/* <!-- dark and light mode toggle --> */}
            <div className="col-auto h-full flex-shrink-0">
              <div className="flex justify-end items-center h-full gap-2">
                {/* dark mode */}
                <button
                  onClick={() => onSwitchAction()}
                  type="button"
                  className="p-2 rounded-md text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                >
                  {isToggleOn ? (
                    <MdDarkMode size={20} />
                  ) : (
                    <MdOutlineLightMode size={20} />
                  )}
                </button>
                <div className="hidden md:block">
                  <SelectSwitchLanguage />
                </div>
                <div>
                  <button
                    className="w-8 h-8 relative block lg:hidden"
                    onClick={() => setOpen(!open)}
                  >
                    <div
                      className={`${
                        open ? "rotate-45 absolute top-[15px] " : "mb-2"
                      } h-0.5 dark:bg-white bg-black w-full transition-all duration-200 ease-in-out`}
                    ></div>
                    <div
                      className={`${
                        open ? "hidden" : "block mb-2"
                      } h-0.5 dark:bg-white bg-black w-full transition-all duration-200 ease-in-out`}
                    ></div>
                    <div
                      className={`${
                        open ? "-rotate-45   " : ""
                      } h-0.5 dark:bg-white bg-black w-full transition-all duration-200 ease-in-out`}
                    ></div>
                  </button>
                </div>
                {tokenAndUser === "true" ? <ProfileMenu /> : null}
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* nav left */}
      {socialLayoutLeft && (
        <div className="absolute w-16 bg-transparent h-[calc(100vh-80px)] z-20 hidden lg:block">
          <Social className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
        </div>
      )}
      {/* mobile */}
      <div
        className={`${
          open ? "right-0 opacity-100" : "-right-full opacity-0 pointer-events-none"
        } fixed transition-all duration-300 top-20 z-20 bg-white dark:bg-gray-900 border-l border-gray-200 dark:border-gray-800 shadow-lg w-64 max-w-[80vw] h-[calc(100vh-5rem)] overflow-y-auto`}
      >
        <div className="p-4 lg:hidden block">
          <div className="mb-4 md:hidden">
            <SelectSwitchLanguage />
          </div>
          <ul className="flex-col justify-start">
          {Array.isArray(dataMenu) &&
            dataMenu?.map((item, index) => {
              const isActive = checkLinkActive(item);
              return (
                <li key={index}>
                  <LinkComponent
                    className={`flex items-center gap-3 p-4 rounded-lg border cursor-pointer text-sm font-semibold mb-3 transition-all ${
                      isActive
                        ? "text-main dark:text-main bg-main/10 dark:bg-main/10 border-main dark:border-main"
                        : "dark:text-white text-black dark:bg-gray-800 bg-gray-50 border-gray-200 dark:border-gray-700 hover:bg-main/10 dark:hover:bg-main/10 hover:border-main dark:hover:border-main"
                    }`}
                    onClick={() => setOpen(!open)}
                    href={item.href}
                  >
                    {MapIconToComponent(item.icon)}
                    <span>{item.name}</span>
                  </LinkComponent>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </header>
  );
}
