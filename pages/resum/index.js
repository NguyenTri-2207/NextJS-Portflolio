import React from "react";
import Header from "components/templates/Layout/Header";
import Experience from "components/organisms/experience";
import data from "components/templates/Home/data.json";
function About() {
  return (
    <>
      <Header />
      <section className="bg-[#272b44]  relative  flex justify-center items-center pt-10">
        <Experience data={data} />
      </section>
    </>
  );
}

export default About;
