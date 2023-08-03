import Layout from "components/templates/Layout";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

const Slug = ({ repo }) => {
  const router = useRouter();
  console.log(repo);
  return (
    <Layout>
      <div className="bg-white text-black min-h-screen">
        <div className="container">
          <h2>{repo.title}</h2>
          <div>{repo.body}</div>
        </div>
      </div>
    </Layout>
  );
};
export default Slug;

export const getServerSideProps = async ({ params }) => {
  const uri = params?.slug[0];
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${uri}`);
  const repo = await res.json();

  return { props: { repo } };
};
