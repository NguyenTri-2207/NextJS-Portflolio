import React from "react";
import { useTranslation } from "next-i18next";

import Layout from "components/organisms/LayoutTemplate";
import ProjectTemplate from "components/templates/project";
import { getStaticPaths, makeStaticProps } from "lib/getStatic.js";

import Head from "next/head";
import data from "./data.json";
const Project = () => {
  const { t } = useTranslation(["common", "project"]);

  const menu = t("common:menu", { returnObjects: true });
  const dataProject = t("project:project", { returnObjects: true });
  console.log(dataProject);
  return (
    <>
      <Head>
        <title>Project-Nguyễn Ngọc Trí</title>
        <meta name="description" content="Project Page Nguyễn Ngọc Trí"></meta>
      </Head>
      <Layout dataMenu={menu} socialLayoutLeft>
        <ProjectTemplate data={dataProject} />
      </Layout>
    </>
  );
};

export default Project;

const getStaticProps = makeStaticProps(["common", "project"]);
export { getStaticPaths, getStaticProps };
