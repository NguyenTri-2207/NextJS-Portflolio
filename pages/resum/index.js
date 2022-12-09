import React from "react";
import Layout from "components/templates/Layout";
import Experience from "components/organisms/experience";
import data from "components/templates/Home/data.json";
function About() {
  return (
    <Layout>
      <section className="bg-[#272b44]  relative  flex justify-center items-center pt-10">
        <Experience data={data} />
      </section>
    </Layout>
  );
}

export default About;
