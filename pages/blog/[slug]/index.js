import Layout from "components/organisms/LayoutTemplate";
import BlogDetailComponent from "components/templates/blog-detail";
import React from "react";
import dataStatic from "../data.json";
import Head from "next/head";
const Slug = ({ repo, repoPost }) => {
  console.log(repo);
  console.log(repoPost);
  return (
    <>
      <Head>
        <title>{repo?.title}</title>
        <meta name="description" content={repo?.desc} />
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
export async function getStaticPaths() {
  try {
    const resPost = await fetch("https://crm-nodejs.vercel.app/api/post");
    if (!resPost.ok) {
      throw new Error("Failed to fetch post slugs");
    }
    const posts = await resPost.json();

    const paths = posts.map((post) => ({
      params: { slug: post.url.toString() },
    }));

    return { paths, fallback: false };
  } catch (error) {
    console.error("Error fetching post slugs:", error);
    return { paths: [], fallback: false };
  }
}

export const getStaticProps = async ({ params }) => {
  try {
    const uri = params?.slug;
    const res = await fetch(`https://crm-nodejs.vercel.app/api/post/${uri}`);
    const resPost = await fetch("https://crm-nodejs.vercel.app/api/post");
    if (!res.ok) {
      throw new Error(`Failed to fetch post with slug ${uri}`);
    }
    const repo = await res.json();
    const posts = await resPost.json();

    return { props: { repo, repoPost: posts } };
  } catch (error) {
    console.error("Error fetching post:", error);
    return { props: { repo: null, repoPost: [] } };
  }
};
