import React from "react";
import Project from "components/organisms/Project";

const ProjectTemplate = ({ data }) => {
  return (
    <div className="section-template">
      <Project data={data} />
    </div>
  );
};

export default ProjectTemplate;
