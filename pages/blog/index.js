import Layout from "components/organisms/LayoutTemplate";
import BlogTemplates from "components/templates/new-blog";
import React from "react";
import Head from "next/head";

const Blog = ({ repo }) => {
  return (
    <>
      <Head>
        <title>Blog-Nguyễn Ngọc Trí</title>
        <meta name="description" content="Blog Page Nguyễn Ngọc Trí"></meta>
      </Head>

      <BlogTemplates data={repo} />
    </>
  );
};

export default Blog;
Blog.getLayout = function getLayout(page) {
  return <Layout footer={true}>{page}</Layout>;
};
export const getStaticProps = async () => {
  const res = await fetch("https://crm-nodejs.vercel.app/api/post");
  const repo = await res.json();

  return { props: { repo } };
};
