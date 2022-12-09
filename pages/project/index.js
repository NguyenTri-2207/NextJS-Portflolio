import React from "react";
import Header from "components/templates/Layout/Header";
import Project from "components/organisms/Project";
function About() {
  return (
    <fiv className="overflow-hidden">
      <Header />
      <section className="bg-[#272b44]  relative  flex justify-center items-center pt-10">
        <Project />
      </section>
    </fiv>
  );
}

export default About;
