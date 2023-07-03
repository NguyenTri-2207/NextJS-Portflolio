/* eslint-disable @next/next/no-img-element */
import Social from "components/atoms/Social";
import React, { useContext } from "react";
import { ThemContext } from "common/context";
import { FaAngleDoubleDown } from "react-icons/fa";
import CardMe from "components/molecules/CardMe";

const Card = ({ startYear, endYear, title, company, description }) => {
  return (
    <div className="timeline">
      <div className="bg-[#fff4f4] dark:bg-transparent py-4 pl-5 pr-3 space-y-2 mb-6 rounded-lg dark:border-[#212425] dark:border-2">
        <span className="text-tiny text-gray-lite text-xs italic dark:text-[#b7b7b7]">
          {startYear + " - " + endYear}
        </span>
        <h3 className="text-lg dark:text-white">{title}</h3>
        <p className="dark:text-[#b7b7b7] mb-2 text-sm">{description}</p>
        <p className="dark:text-white text-xs italic">{company}</p>
      </div>
    </div>
  );
};
const Experience = ({ data }) => {
  const dataExperience = data.experience;
  const { theme } = useContext(ThemContext);

  return (
    <div className="container">
      <div className="row relative z-10 items-center">
        <CardMe />

        <div className="lg:col-8 col-12 lg:rounded-2xl ">
          <div className="sm:px-5 md:px-10 lg:px-14 shadow-2xl dark:bg-[#111111] bg-white rounded-lg ">
            <div className="py-12 px-4 md:px-0">
              <div className="">
                <div>
                  <div className="flex items-center space-x-2 mb-4">
                    <h4 className="text-3xl dark:text-white font-medium">
                      Experience
                    </h4>
                  </div>
                  <div className="lg:grid grid-cols-2 lg:grid-cols-2 gap-x-6 gap-y-6 mt-[30px]">
                    {dataExperience.map((item, index) => {
                      return (
                        <Card
                          key={index}
                          startYear={item.startYear}
                          endYear={item.endYear}
                          company={item.company}
                          description={item.description}
                          title={item.title}
                        />
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {theme && (
        <>
          <img
            className="absolute left-20 top-20 z-0 lg:block hidden animate-pulse"
            src="/assets/bg-about-tl.png"
            width={130}
            height={163}
            alt="a"
          />
          <img
            className="absolute right-0 top-0 z-0 lg:block hidden  "
            src="/assets/bg-about-tr.png"
            width={206}
            height={313}
            alt="a"
          />
        </>
      )}
    </div>
  );
};
export default Experience;
