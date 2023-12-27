import React from "react";
import Layout from "components/organisms/LayoutTemplate";
import Head from "next/head";
import data from "./data.js";
import SkillTeamplate from "components/templates/skill";
const Skill = () => {
  return (
    <>
      <Head>
        <title>Skill-Nguyễn Ngọc Trí</title>
        <meta name="description" content="Skill Page Nguyễn Ngọc Trí"></meta>
      </Head>
      <SkillTeamplate data={data} />
    </>
  );
};

export default Skill;
Skill.getLayout = function getLayout(page) {
  return <Layout footer={false}>{page}</Layout>;
};
