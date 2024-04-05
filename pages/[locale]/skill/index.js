import React from "react";
import Layout from "components/organisms/LayoutTemplate";
import Head from "next/head";
import data from "components/templates/skill/data.js";
import SkillTeamplate from "components/templates/skill";
import { getStaticPaths, makeStaticProps } from "lib/getStatic";
import { useTranslation } from "next-i18next";
const Skill = () => {
  const { t } = useTranslation(["common", "skill"]);
  const menu = t("common:menu", { returnObjects: true });
  const dataCardYear = t("skill:dataCardYear", { returnObjects: true });

  return (
    <>
      <Head>
        <title>Skill-Nguyễn Ngọc Trí</title>
        <meta name="description" content="Skill Page Nguyễn Ngọc Trí"></meta>
      </Head>
      <Layout dataMenu={menu} socialLayoutLeft>
        <SkillTeamplate data={data} dataCardYear={dataCardYear} />
      </Layout>
    </>
  );
};

export default Skill;

const getStaticProps = makeStaticProps(["common", "skill"]);
export { getStaticPaths, getStaticProps };
