import React from "react";
import AboutTempalte from "components/templates/about";
import Head from "next/head";
import Header from "components/organisms/LayoutTemplate/Header";
import { getStaticPaths, makeStaticProps } from "lib/getStatic.js";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation(["about"]);
  const dataInfo = t("about:info", { returnObjects: true });
  const dataExperience = t("about:experience", { returnObjects: true });
  const dataSocial = t("about:dataSocial", { returnObjects: true });

  return (
    <>
      <Head>
        <title>About-Nguyễn Ngọc Trí</title>
        <meta name="description" content="About Page Nguyễn Ngọc Trí"></meta>
      </Head>
      <Header />

      <AboutTempalte
        dataExperience={dataExperience}
        dataInfo={dataInfo}
        dataSocial={dataSocial}
      />
    </>
  );
};

export default About;

const getStaticProps = makeStaticProps(["about"]);
export { getStaticPaths, getStaticProps };
