import Layout from "components/templates/Layout";
import BlogTemplates from "components/templates/Blog";
import React from "react";
import Head from "next/head";

function Blog({ repo }) {
  return (
    <>
      <Head>
        <title>Blog-Nguyễn Ngọc Trí</title>
      </Head>
      <Layout footer={true}>
        <BlogTemplates data={repo} />
      </Layout>
    </>
  );
}

export default Blog;

export const getServerSideProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const repo = await res.json();

  return { props: { repo } };
};
