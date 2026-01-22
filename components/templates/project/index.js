import React from "react";
import Project from "components/organisms/Project";
import Banner from "./Banner";

const ProjectTemplate = ({ data, dataBanner }) => {
  return (
    <>
      <Banner data={dataBanner} />
      <div className="section-template">
        <Project data={data} />
      </div>
    </>
  );
};

export default ProjectTemplate;
