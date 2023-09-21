import React from "react";
import Layout from "components/templates/LayoutTemplate";
import Skill from "components/organisms/Skill";
import Head from "next/head";
function About() {
  return (
    <>
      <Head>
        <title>Skill-Nguyễn Ngọc Trí</title>
        <meta name="description" content="Skill Page Nguyễn Ngọc Trí"></meta>
      </Head>
      <Layout >
        <section className="dark:bg-bgHome-dark   lg:pt-[150px] py-[100px] bg-bgHome-white ">
          <Skill />
        </section>
      </Layout>
    </>
  );
}

export default About;
