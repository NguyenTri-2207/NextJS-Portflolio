import React from "react";
import Layout from "components/templates/Layout";
import Project from "components/organisms/Project";
import Head from "next/head";
function About() {
  return (
    <>
      <Head>
        <title>Project-Nguyễn Ngọc Trí</title>
      </Head>
      <Layout>
        <section className="bg-[#1f2336]   relative  flex justify-center items-center pt-10">
          <Project />
        </section>
      </Layout>
    </>
  );
}

export default About;
