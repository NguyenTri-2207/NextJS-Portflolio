import React from "react";
import Layout from "components/templates/Layout";
import AboutUS from "components/organisms/About";
import Head from "next/head";
function About() {
  return (
    <>
      <Head>
        <title>About-Nguyễn Ngọc Trí</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="stylesheet" href="https://unpkg.com/transition-style"></link>
        <link
          rel="icon"
          href="https://seolenart.com/wp-content/uploads/2017/11/icon-web.jpg"
        />
      </Head>
      <Layout>
        <section className="bg-[#1f2336]  relative lg:h-[calc(100vh-80px)] flex justify-center items-center">
          <AboutUS />
        </section>
      </Layout>
    </>
  );
}

export default About;
