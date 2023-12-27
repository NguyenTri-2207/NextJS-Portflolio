import Link from "next/link";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
const dataMenu = [
  { name: "Home", id: "header", href: "/" },
  { name: "About", id: "about", href: "/about" },
  { name: "Skill", id: "skill", href: "/skill" },
  { name: "Project", id: "project", href: "/project" },
];
const Footer = () => {
  const goToTop = () => {
    const scrollToTable = document.querySelector('[id ^= "header"]');
    window.scrollTo({
      top: scrollToTable.offsetTop - 40,
      behavior: "smooth",
    });
  };
  return (
    <footer id="dk-footer" className="relative">
      <section className="dark:bg-[#272b44] bg-white">
        <div className="max-w-screen-xl px-4 py-8 mx-auto overflow-hidden sm:px-6 lg:px-8">
          <nav className="flex flex-wrap justify-center -mx-5 -my-2">
            {dataMenu.map((item, index) => {
              return (
                <div className="px-5 py-2" key={index}>
                  <Link
                    href={item.href}
                    className="text-base leading-2 dark:text-white  hover:text-main"
                  >
                    {item.name}
                  </Link>
                </div>
              );
            })}
          </nav>
          <p className="mt-6 text-base leading-2 text-center dark:text-gray-400 text-gray-600">
            © 2021 SomeCompany, Inc. All rights reserved.
          </p>
          <div className="flex justify-end">
            <button onClick={() => goToTop()}>
              <BsFillArrowUpCircleFill size={26} className="dark:text-white " />
            </button>
          </div>
        </div>
      </section>
    </footer>
  );
};
export default Footer;
