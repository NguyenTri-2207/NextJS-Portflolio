import React from "react";
import Layout from "components/templates/Layout";
import AboutUS from "components/organisms/About";
function About() {
  return (
    <Layout>
      <section className="bg-[#272b44]  relative lg:h-[calc(100vh-80px)] flex justify-center items-center">
        <AboutUS />
      </section>
    </Layout>
  );
}

export default About;
