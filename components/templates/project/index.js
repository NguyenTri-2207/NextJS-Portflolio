import React from "react";
import Project from "components/organisms/Project";

function ProjectTemplate({ data }) {
  return (
    <section className="section-tempale h-full  ">
      <Project data={data} />
    </section>
  );
}

ProjectTemplate.propTypes = {};

export default ProjectTemplate;
