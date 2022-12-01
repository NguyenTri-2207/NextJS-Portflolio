import React from "react";
import Header from "components/templates/Layout/Header";
import AboutUS from "components/organisms/About";
function About() {
  return (
    <>
      <Header />
      <section className="bg-[#272b44]  relative h-[calc(100vh-80px)] flex justify-center items-center">
        <AboutUS />
      </section>
    </>
  );
}

export default About;
