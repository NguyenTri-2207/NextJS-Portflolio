import { useState, useEffect, useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiChevronsDown } from "react-icons/fi";
import logo from "../../../../public/logo.png";
import { ThemContext } from "../../../../common/context";
export default function Header() {
  const dataMenu = [
    { name: "Home", id: "header" },
    { name: "About", id: "about" },
    { name: "Resum", id: "resum" },
    { name: "Skill", id: "skill" },
    { name: "Project", id: "project" },
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
  return (
    <header className="headerLayout" id="header">
      <nav className="flex items-center h-20 bg-[#272b44]">
        <div className="p-4 shadow-2xl border-r-2 border-b-2 border-[#1f2336]">
          <Image
            className="m-4"
            src="/assets/logo.png"
            alt="logo"
            width={50}
            height={50}
          />
        </div>
        <div className=" flex justify-between items-center col-11 h-full px-10">
          <div className="col-5 ">
            {" "}
            <ul className="flex">
              {dataMenu.map((item, index) => {
                return (
                  <li className="uppercase mr-10" key={index}>
                    {item.name}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="flex ">
            <div className=" border-r-2 mr-10  border-[#1f2336]">
              <a>0337 368 371</a>
            </div>

            <div>
              <div className="h-0.5 bg-white w-8 my-1"></div>
              <div className="h-0.5 bg-white w-8 my-1"></div>
              <div className="h-0.5 bg-white w-8 my-1"></div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
