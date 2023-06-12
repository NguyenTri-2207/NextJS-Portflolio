import React from "react";
import PropTypes from "prop-types";
import Project from "components/organisms/Project";

function ProjectTemplate({ data }) {
  console.log(data.project[0].company);
  return (
    <div className="lg:pl-[84px]">
      <Project data={data} />
    </div>
  );
}

ProjectTemplate.propTypes = {};

export default ProjectTemplate;
