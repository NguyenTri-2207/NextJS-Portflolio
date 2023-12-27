import React from "react";
import AboutTemplate from "components/organisms/About";

const About = ({ data }) => {
  return (
    <section className="section-tempale lg:pt-36 pt-10 2xl:h-screen overflow-hidden">
      <AboutTemplate data={data} />
    </section>
  );
};
export default About;
