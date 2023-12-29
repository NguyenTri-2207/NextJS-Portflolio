import {
  FaBook,
  FaChartPie,
  FaHome,
  FaSortAmountUpAlt,
  FaUserEdit,
} from "react-icons/fa";

export const dataMenu = [
  { name: "Home", id: "header", href: "/", icon: <FaHome /> },
  { name: "About", id: "about", href: "/about", icon: <FaUserEdit /> },
  { name: "Skill", id: "skill", href: "/skill", icon: <FaSortAmountUpAlt /> },
  { name: "Project", id: "project", href: "/project", icon: <FaBook /> },
  { name: "Blog", id: "blog", href: "/blog", icon: <FaChartPie /> },
];
