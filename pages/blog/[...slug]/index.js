import Layout from "components/organisms/LayoutTemplate";
import BlogDetailComponent from "components/templates/BlogDetailTemplate";
import React from "react";
import dataStatic from "../data.json";
import Head from "next/head";
const Slug = ({ repo, repoPost }) => {
  return (
    <>
      <Head>
        <title>{repo.title}</title>
        <meta name="description" content={repo.desc} />
        <meta name="keywords" content="từ khóa1, từ khóa2, từ khóa3" />

        <meta property="og:title" content={dataStatic.page.title} />
        <meta property="og:description" content={dataStatic.page.description} />
        <meta name="twitter:title" content={dataStatic.page.title} />
        <meta
          name="twitter:description"
          content={dataStatic.page.description}
        />
      </Head>

      <BlogDetailComponent
        data={repo}
        dataStatic={dataStatic}
        repoPost={repoPost}
      />
    </>
  );
};
export default Slug;
Slug.getLayout = function getLayout(page) {
  return <Layout footer={true}>{page}</Layout>;
};
export const getServerSideProps = async ({ params }) => {
  const uri = params?.slug[0];
  const res = await fetch(`https://crm-nodejs.vercel.app/api/post/${uri}`);
  const repo = await res.json();
  const resPost = await fetch("https://crm-nodejs.vercel.app/api/post");
  const repoPost = await resPost.json();

  return { props: { repo, repoPost } };
};
