import Layout from "components/templates/LayoutTemplate";
import BlogTemplates from "components/templates/Blog";
import React from "react";
import Head from "next/head";

function Blog({ repo }) {
  return (
    <>
      <Head>
        <title>Blog-Nguyễn Ngọc Trí</title>
        <meta name="description" content="Blog Page Nguyễn Ngọc Trí"></meta>
      </Head>
      <Layout footer={true}>
        <BlogTemplates data={repo} />
      </Layout>
    </>
  );
}

export default Blog;

export const getStaticProps = async () => {
  const res = await fetch("https://crm-nodejs.vercel.app/api/post");
  const repo = await res.json();

  return { props: { repo } };
};
