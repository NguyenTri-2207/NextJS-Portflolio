import React from "react";
import Layout from "components/organisms/LayoutTemplate";
import AboutTempalte from "components/templates/about";
import Head from "next/head";
import data from "../../components/templates/about/data.js";

const About = () => {
  return (
    <>
      <Head>
        <title>About-Nguyễn Ngọc Trí</title>
        <meta name="description" content="About Page Nguyễn Ngọc Trí"></meta>
      </Head>

      <AboutTempalte data={data} />
    </>
  );
};

export default About;

About.getLayout = function getLayout(page) {
  return <Layout footer={false}>{page}</Layout>;
};
