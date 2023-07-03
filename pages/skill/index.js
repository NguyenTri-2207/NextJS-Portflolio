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
        <section className="dark:bg-bgHome-dark h-full lg:pt-[120px] pt-10  bg-bgHome-white min-h-screen bg-no-repeat bg-center bg-cover bg-fixed md:pb-16 w-full ">
          <Skill />
        </section>
      </Layout>
    </>
  );
}

export default About;
