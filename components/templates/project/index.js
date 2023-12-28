import React from "react";
import Project from "components/organisms/Project";

function ProjectTemplate({ data }) {
  return (
    <section className="section-tempale h-screen overflow-hidden  ">
      <Project data={data} />
    </section>
  );
}

ProjectTemplate.propTypes = {};

export default ProjectTemplate;
