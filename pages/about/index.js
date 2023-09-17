import React from "react";
import Layout from "components/templates/Layout";
import AboutUS from "components/templates/About";
import Head from "next/head";
function About() {
  return (
    <>
      <Head>
        <title>About-Nguyễn Ngọc Trí</title>
      </Head>
      <Layout footer={false}>
        <section className="dark:bg-bgHome-dark xl:h-screen lg:pt-[230px] pt-10  bg-bgHome-white min-h-screen bg-no-repeat bg-center bg-cover bg-fixed md:pb-16 w-full ">
          <AboutUS />
        </section>
      </Layout>
    </>
  );
}

export default About;
