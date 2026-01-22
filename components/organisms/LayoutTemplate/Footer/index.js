import Link from "components/molecules/Link";
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
      <section className="dark:bg-gray-900 bg-white border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 lg:px-8">
          <nav className="flex flex-wrap justify-center -mx-5 -my-2">
            {dataMenu.map((item, index) => {
              return (
                <div className="px-5 py-2" key={index}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </div>
              );
            })}
          </nav>
          <p className="mt-6 text-sm text-center text-gray-500 dark:text-gray-500">
            © {new Date().getFullYear()} Nguyễn Ngọc Trí. All rights reserved.
          </p>
          <div className="flex justify-end mt-4">
            <button
              onClick={() => goToTop()}
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              <BsFillArrowUpCircleFill size={24} />
            </button>
          </div>
        </div>
      </section>
    </footer>
  );
};
export default Footer;
