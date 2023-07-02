import React from "react";
import { useRouter } from "next/router";
function Post({ post }) {
  console.log(post);
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <h2>
        {post.id} {post.title}
      </h2>
      <p>{post.body}</p>
    </>
  );
}

export default Post;

export const getStaticPaths = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  const paths = data.map((post) => {
    return {
      params: { slug: `${post.id}` },
    };
  });
  return {
    paths: paths,
    fallback: false,
  };
};
export async function getStaticProps(context) {
  const { params } = context;
  console.log(context);
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.slug}`
  );
  const data = await response.json();

  if (!data.id) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post: data,
    },
  };
}
