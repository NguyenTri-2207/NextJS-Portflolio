import React from "react";
import {
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
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

const dataSocial = [
  {
    icon: <FaFacebookF size={16} />,
    src: "https://www.facebook.com/nguyenngoctri2207/",
    style: { background: "#036ce4" },
  },
  {
    icon: <FaInstagram size={16} />,
    src: "https://www.instagram.com/tri_nguyen2207/",
    style: styleInsta,
  },
  {
    icon: <FaGithub size={16} />,
    src: "https://github.com/NguyenTri-2207",
    style: { background: "#313131" },
  },
  {
    icon: <FaLinkedinIn size={16} />,
    src: "https://github.com/NguyenTri-2207",
    style: { background: "#0a66c2" },
  },
];
const CardSocial = ({ src, children, style }) => {
  return (
    <a
      style={style}
      href={src}
      target="_blank"
      rel="noreferrer"
      className="shadow-3xl  w-10 h-10 flex justify-center items-center rounded-xl mb-4 text-white hover:animate-pulse "
    >
      {children}
    </a>
  );
};
export default function Social(props) {
  const { className } = props;
  return (
    <div className={className}>
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
  );
}

// export function Facebook(props) {
//   const { title, href } = props;
//   return (
//     <div className="b animate-pulse mr-2 lg:mr-10 h-10 w-[130px]  lg:w-40 flex justify-center items-center">
//       <div className="i h-10 lg:w-40 w-[130px] bg-yellow items-center rounded-2xl shadow-2xl cursor-pointer absolute overflow-hidden transform hover:scale-x-110 hover:scale-y-105 transition duration-300 ease-out"></div>
//       <a
//         href={href}
//         className="text-center text-white font-medium text-sm z-10 pointer-events-none"
//       >
//         {title}
//       </a>
//     </div>
//   );
// }

// export function Instagram(props) {
//   const { title, href } = props;
//   return (
//     <div className="b animate-pulse mr-2 lg:mr-10 h-10 w-[130px]  lg:w-40 flex justify-center items-center">
//       <div className="i h-10 lg:w-40 w-[130px] bg-yellow items-center rounded-2xl shadow-2xl cursor-pointer absolute overflow-hidden transform hover:scale-x-110 hover:scale-y-105 transition duration-300 ease-out"></div>
//       <a
//         href={href}
//         className="text-center text-white font-medium text-sm z-10 pointer-events-none"
//       >
//         {title}
//       </a>
//     </div>
//   );
// }

// export function Github(props) {
//   const { title, href } = props;
//   return (
//     <div className="b animate-pulse mr-2 lg:mr-10 h-10 w-[130px]  lg:w-40 flex justify-center items-center">
//       <div className="i h-10 lg:w-40 w-[130px] bg-yellow items-center rounded-2xl shadow-2xl cursor-pointer absolute overflow-hidden transform hover:scale-x-110 hover:scale-y-105 transition duration-300 ease-out"></div>
//       <a
//         href={href}
//         className="text-center text-white font-medium text-sm z-10 pointer-events-none"
//       >
//         {title}
//       </a>
//     </div>
//   );
// }
