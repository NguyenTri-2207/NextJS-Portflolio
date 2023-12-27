import React, { useContext } from "react";
import Image from "next/image";
import CardMe from "components/molecules/CardMe";
import SlideScroll from "components/organisms/SlideScroll";
import { ThemContext } from "common/context";

const AboutTemplate = ({ data }) => {
  const { theme } = useContext(ThemContext);

  return (
    <div className="container">
      <div className="row ">
        <CardMe data={data.dataSocial} />
        <div className="about-text lg:col-8 col-12 lg:-mt-4 ">
          <div className="dark:text-yellow  text-xl leading-9 lg:font-medium">
            Who am i?
          </div>
          <div className=" text-2xl leading-10 lg:font-medium dark:text-gray-300">
            I&apos;m Tri and
            <span className="dark:text-yellow lg:font-medium">
              Front-End Developer
            </span>
          </div>
          <div className=" pb-7 border-b border-gray-700 dark:border-gray-50 dark:text-gray-300 text-sm">
            <p className="mb-3 leading-7 ">
              I&apos;m a Software Engineer with 3+ years of experience React and
              state management like Redux with proficiency in web technologies
              like HTML5, CSS3, JavaScript, building large-scale web
              applications, cross-browser platforms, and design constraints on
              the web, and building responsive user interfaces.
            </p>
            <ul>
              <li className=" mb-2">
                ✨ Version control system (GIT), Defect Tracking tool
                (Jira,Clickup), design platform (Figma), and testing framework
                such as Jet.
              </li>
              <li className=" mb-2">
                {" "}
                ✨ Languages: React, Typescript, JavaScript, NodeJS.
              </li>
              <li className=" mb-2">✨ Web technology : HTML5, CSS3, SASS</li>
              <li className=" mb-2">✨ Bootsrap4, TailwindCSS</li>
              <li className=" mb-2">✨ Databases: MongoDB</li>
              <li className=" mb-2">
                ✨Other Tools: Performance Optimization Tools, Cross-Browser
                Testing: BrowserStack, Web Hosting Platforms: Vercel, AWS,
                Content Management Systems (CMS):WordPress.
              </li>
            </ul>
          </div>
          <h3 className="text-2xl font-medium mt-6  dark:text-white">
            What I do!
          </h3>
          <SlideScroll data={data.experience} />
        </div>
      </div>
      {theme && (
        <>
          <Image
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
export default AboutTemplate;
