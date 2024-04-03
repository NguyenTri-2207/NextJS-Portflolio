import React from "react";
import { useTranslation } from "next-i18next";

import Layout from "components/organisms/LayoutTemplate";
import ProjectTemplate from "components/templates/project";
import { getStaticPaths, makeStaticProps } from "lib/getStatic.js";

import Head from "next/head";
import data from "./data.json";
const Project = () => {
  const { t } = useTranslation(["common", "about"]);

  const menu = t("common:menu", { returnObjects: true });

  return (
    <>
      <Head>
        <title>Project-Nguyễn Ngọc Trí</title>
        <meta name="description" content="Project Page Nguyễn Ngọc Trí"></meta>
      </Head>
      <Layout dataMenu={menu} socialLayoutLeft>
        <ProjectTemplate data={data} />
      </Layout>
    </>
  );
};

export default Project;

const getStaticProps = makeStaticProps(["common", "about"]);
export { getStaticPaths, getStaticProps };
