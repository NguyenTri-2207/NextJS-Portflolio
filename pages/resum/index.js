import React from "react";
import Layout from "components/templates/Layout";
import data from "components/templates/Home/data.json";
import Resum from "components/templates/resum";
import Head from "next/head";

function About() {
  return (
    <>
      <Head>
        <title>Resum-Nguyễn Ngọc Trí</title>
      </Head>
      <Layout>
        <section className="dark:bg-bgHome-dark h-full lg:pt-[230px] pt-10  bg-bgHome-white min-h-screen bg-no-repeat bg-center bg-cover bg-fixed md:pb-16 w-full ">
          <Resum data={data} />
        </section>
      </Layout>
    </>
  );
}

export default About;
