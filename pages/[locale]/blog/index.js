import Layout from "components/organisms/LayoutTemplate";
import BlogTemplates from "components/templates/blog";
import { getI18nProps, getStaticPaths } from "lib/getStatic.js";
import { useTranslation } from "next-i18next";

import React from "react";
import Head from "next/head";

const Blog = ({ data }) => {
  const { t } = useTranslation(["common", "blog"]);
  const menu = t("common:menu", { returnObjects: true });
  const dataBanner = t("blog:banner", { returnObjects: true });

  return (
    <>
      <Head>
        <title>Blog-Nguyễn Ngọc Trí</title>
        <meta name="description" content="Blog Page Nguyễn Ngọc Trí"></meta>
      </Head>
      <Layout dataMenu={menu} socialLayoutLeft>
        <BlogTemplates data={data} dataBanner={dataBanner} />
      </Layout>
    </>
  );
};

export default Blog;
export { getStaticPaths };
export const getStaticProps = async (ctx) => {
  // some data fetched from anywhere...
  const res = await fetch("https://crm-nodejs.vercel.app/api/post");
  const data = await res.json();
  return {
    props: {
      ...(await getI18nProps(ctx, ["common", "blog"])),
      data,
    },
  };
};
// export const getStaticProps = async () => {
//   const res = await fetch("https://crm-nodejs.vercel.app/api/post");
//   const repo = await res.json();

//   return { props: { repo } };
// };
