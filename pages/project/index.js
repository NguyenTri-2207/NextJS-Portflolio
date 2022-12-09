import React from "react";
import Layout from "components/templates/Layout";
import Project from "components/organisms/Project";
function About() {
  return (
    <Layout>
      <section className="bg-[#272b44]  relative  flex justify-center items-center pt-10">
        <Project />
      </section>
    </Layout>
  );
}

export default About;
