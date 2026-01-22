import React from "react";
import SlideScroll from "components/organisms/SlideScroll";

const Experience = ({ dataExperience }) => {
  return (
    <section className="section-tempale min-h-screen">
      <div className="container py-12">
        <div className="row">
          <div className="col-12 lg:col-10 mx-auto">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
              {dataExperience.title}
            </h1>
            <SlideScroll data={dataExperience.list} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

