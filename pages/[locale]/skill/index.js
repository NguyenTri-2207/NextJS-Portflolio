import React from "react";
import Layout from "components/organisms/LayoutTemplate";
import Head from "next/head";
import data from "components/templates/skill/data.js";
import SkillTeamplate from "components/templates/skill";
import Header from "components/organisms/LayoutTemplate/Header";
import { useTranslation } from "react-i18next";
const Skill = () => {
  const { t, i18n } = useTranslation(["common"], {
    bindI18n: "languageChanged loaded",
  });
  console.log(t("h1"));
  return (
    <>
      <Head>
        <title>Skill-Nguyễn Ngọc Trí</title>
        <meta name="description" content="Skill Page Nguyễn Ngọc Trí"></meta>
      </Head>
      {/* <Header /> */}
      <SkillTeamplate data={data} />
    </>
  );
};
export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});
export default Skill;
