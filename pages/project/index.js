import React from "react";
import Layout from "components/organisms/LayoutTemplate";
import ProjectTemplate from "components/templates/project";
import Head from "next/head";
import data from "./data.json";
const Project = () => {
  return (
    <>
      <Head>
        <title>Project-Nguyễn Ngọc Trí</title>
        <meta name="description" content="Project Page Nguyễn Ngọc Trí"></meta>
      </Head>
      <ProjectTemplate data={data} />
    </>
  );
};

export default Project;
Project.getLayout = function getLayout(page) {
  return <Layout footer={false}>{page}</Layout>;
};
