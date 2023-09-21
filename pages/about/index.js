import React from "react";
import Layout from "components/templates/LayoutTemplate";
import AboutTempalte from "components/templates/AboutTemplate";
import Head from "next/head";
function About() {
  return (
    <>
      <Head>
        <title>About-Nguyễn Ngọc Trí</title>
        <meta name="description" content="About Page Nguyễn Ngọc Trí"></meta>

      </Head>
      <Layout footer={false}>
        <section className="dark:bg-bgHome-dark  bg-gray-100 pt-10 lg:pt-[200px] 3xl:h-screen overflow-hidden lg:rounded-tl-3xl   bg-bgHome-white min-h-screen bg-no-repeat bg-center bg-cover bg-fixed md:pb-16 w-full ">

          <AboutTempalte />
        </section>
      </Layout>
    </>
  );
}

export default About;
