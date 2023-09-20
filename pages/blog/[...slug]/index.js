import Layout from "components/templates/LayoutTemplate";
import BlogDetailComponent from "components/templates/BlogDetailTemplate";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import dataStatic from "../data.json";

const Slug = ({ repo, repoPost }) => {
  const router = useRouter();

  return (
    <Layout footer={true}>
      <div className="bg-white text-black min-h-screen">
        <BlogDetailComponent
          // data={repo}
          data={dataStatic}
          repoPost={repoPost}
        />
      </div>
    </Layout>
  );
};
export default Slug;

export const getServerSideProps = async ({ params }) => {
  const uri = params?.slug[0];
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${uri}`);
  const repo = await res.json();
  const resPost = await fetch("https://jsonplaceholder.typicode.com/posts");
  const repoPost = await resPost.json();

  return { props: { repo, repoPost } };
};
