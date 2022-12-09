import React from "react";
import Header from "components/templates/Layout/Header";
import Skill from "components/organisms/Skill";
function About() {
  return (
    <>
      <Header />
      <section className="bg-[#272b44]  relative  flex justify-center items-center pt-10">
        <Skill />
      </section>
    </>
  );
}

export default About;
