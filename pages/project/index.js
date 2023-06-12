import React from "react";
import Layout from "components/templates/layout";
import ProjectTemplate from "components/templates/project";
import Head from "next/head";
import data from './data.json'
function About() {
  return (
    <>
      <Head>
        <title>Project-Nguyễn Ngọc Trí</title>
      </Head>
      <Layout>
        <section className="bg-[#1f2336]   relative  flex justify-center items-center pt-10">
          <ProjectTemplate data={data} />
        </section>
      </Layout>
    </>
  );
}

export default About;
