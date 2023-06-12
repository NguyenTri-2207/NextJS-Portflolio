import React from "react";
import Layout from "components/templates/Layout";
import Skill from "components/organisms/Skill";
import Head from "next/head";
function About() {
  return (
    <>
      <Head>
        <title>Skill-Nguyễn Ngọc Trí</title>
      </Head>
      <Layout>
        <section className="bg-[#1f2336] lg:pl-[84px] relative h-full pt-28  flex justify-center items-center ">
          <Skill />
        </section>
      </Layout>
    </>
  );
}

export default About;
