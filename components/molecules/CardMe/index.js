import React from "react";
import Social from "components/atoms/Social";
import Image from "next/image";
import {
  MdLocationOn,
  MdOutlineEmail,
  MdOutlineToday,
  MdPhoneIphone,
} from "react-icons/md";

const CardMe = ({ data }) => {
  const mapIconToComponent = (iconName) => {
    switch (iconName) {
      case "MdPhoneIphone":
        return <MdPhoneIphone size={18} className="text-gray-600 dark:text-gray-400" />;
      case "MdOutlineEmail":
        return <MdOutlineEmail size={18} className="text-gray-600 dark:text-gray-400" />;
      case "MdLocationOn":
        return <MdLocationOn size={18} className="text-gray-600 dark:text-gray-400" />;
      case "MdOutlineToday":
        return <MdOutlineToday size={18} className="text-gray-600 dark:text-gray-400" />;
      default:
        return null;
    }
  };

  return (
    <div className="col-12 md:col-8 lg:col-4 ">
      <div className="w-full mb-6 lg:mb-0 mx-auto bg-white dark:bg-gray-800 text-center px-6 py-8 rounded-lg border border-gray-200 dark:border-gray-700 lg:sticky lg:top-24">
        <Image
          width={200}
          height={200}
          src="/assets/banner/avt3.png"
          className="w-32 h-32 mx-auto rounded-full mb-4"
          alt="about avatar"
          priority
        />
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
          Tri Nguyen
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
          Cloud / DevOps Engineer
        </p>

        <Social className="flex justify-center space-x-3 mb-6" />

        <ul className="space-y-3">
          {data.map((item, index) => (
            <li key={index} className="flex items-center text-left">
              <span className="p-2 flex justify-center items-center">
                {mapIconToComponent(item.icon)}
              </span>
              <div className="ml-2">
                <p className="text-xs text-gray-500 dark:text-gray-400">{item.name}</p>
                <p className="text-sm text-gray-900 dark:text-gray-200">{item.content}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CardMe;
