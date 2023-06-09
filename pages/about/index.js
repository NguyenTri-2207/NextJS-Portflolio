import React from "react";
import Layout from "components/templates/Layout";
import AboutUS from "components/organisms/About";
import Head from "next/head";
function About() {
  return (
    <>
      <Head>
        <title>About-Nguyễn Ngọc Trí</title>
      </Head>
      <Layout footer={true}>
        <section className="bg-[#1f2336]  relative lg:h-[calc(100vh-80px)] flex justify-center items-center">
          <AboutUS />
        </section>
      </Layout>
    </>
  );
}

export default About;
