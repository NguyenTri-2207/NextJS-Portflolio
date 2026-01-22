import React from "react";
import CardMe from "components/molecules/CardMe";
import Skill from "components/organisms/Skill";
import SlideScroll from "components/organisms/SlideScroll";
import Banner from "./Banner";

const About = ({ dataInfo, dataSocial, dataSkill, dataExperience, dataBanner }) => {
  return (
    <>
      {dataBanner && <Banner data={dataBanner} />}
      <section className="section-template min-h-screen">
        <div className="container">
          <div className="row justify-center">
            <CardMe data={dataSocial} />
            <div className="about-text lg:col-8 col-12 ">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
                {dataInfo.who}
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                {dataInfo.im}{" "}
                <span className="font-medium text-gray-900 dark:text-white">
                  {dataInfo.position}
                </span>
              </p>
              <div className="pb-8 mb-8 border-b border-gray-200 dark:border-gray-700">
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  {dataInfo.company}
                </p>
                <ul className="space-y-2">
                  {dataInfo.responsibilities.map((item, index) => (
                    <li key={index} className="text-sm text-gray-600 dark:text-gray-400">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              {dataExperience && (
                <div className="mt-12">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                    {dataExperience.title}
                  </h3>
                  <SlideScroll data={dataExperience.list} />
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      <section className="section-template">
        <Skill dataSkills={dataSkill} />
      </section>
    </>
  );
};

export default About;
