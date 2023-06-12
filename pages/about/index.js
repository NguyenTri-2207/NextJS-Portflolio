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
        <section className="bg-[#1f2336] pt-28 lg:pt-0  relative lg:h-screen  lg:pl-[84px] flex justify-center items-center">
          <AboutUS />
        </section>
      </Layout>
    </>
  );
}

export default About;
