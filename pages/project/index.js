import React from "react";
import Layout from "components/templates/LayoutTemplate";
import ProjectTemplate from "components/templates/ProjectTemplate";
import Head from "next/head";
import data from "./data.json";
function Project() {
  return (
    <>
      <Head>
        <title>Project-Nguyễn Ngọc Trí</title>
      </Head>
      <Layout>
        <section className="dark:bg-bgHome-dark h-full lg:pt-10 pt-12  bg-bgHome-white min-h-screen bg-no-repeat bg-center bg-cover bg-fixed md:pb-16 w-full ">
          <ProjectTemplate data={data} />
        </section>
      </Layout>
    </>
  );
}

export default Project;
