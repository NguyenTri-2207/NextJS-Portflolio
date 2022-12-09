import React from "react";
import Layout from "components/templates/Layout";
import Skill from "components/organisms/Skill";
function About() {
  return (
    <Layout>
      <section className="bg-[#272b44]  relative  flex justify-center items-center pt-10">
        <Skill />
      </section>
    </Layout>
  );
}

export default About;
