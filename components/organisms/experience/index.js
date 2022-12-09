/* eslint-disable @next/next/no-img-element */
import React from "react";
import { SiWebmoney } from "react-icons/si";
const Card = ({ startYear, endYear, title, company, description }) => {
  return (
    <div className="timeline">
      <div className="timeline-content">
        <div className="timeline-icon">
          <SiWebmoney />
        </div>
        <div className="timeline-year">
          <p>{startYear}</p> <p>-</p> <p>{endYear}</p>
        </div>

        <h3 className="title">{title}</h3>
        <p className="company">{company}</p>
        <p className="description">{description}</p>
      </div>
    </div>
  );
};
const Experience = ({ data }) => {
  const dataExperience = data.experience;
  return (
    <div className="experience">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2>Experience</h2>
            <div className="main-timeline">
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
    </div>
  );
};
export default Experience;
