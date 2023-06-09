import React from "react";
import Layout from "components/templates/Layout";
import Experience from "components/organisms/experience";
import data from "components/templates/Home/data.json";
import Head from "next/head";
function About() {
  return (
    <>
      <Head>
        <title>Resum-Nguyễn Ngọc Trí</title>
      </Head>
      <Layout>
        <section className="bg-[#1f2336]   relative  flex justify-center items-center pt-10">
          <Experience data={data} />
        </section>
      </Layout>
    </>
  );
}

export default About;
