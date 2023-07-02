import React from "react";
import dataJson from "./data.json";
function Blog({ posts }) {
  console.log(posts);
  return (
    <div>
      <h1 className="my-10 text-4xl"> Blog</h1>
      {posts.map((item, index) => (
        <div key={index} className="mb-10">
          <a href={`/blog/${item.id}`}>{item.title}</a>
        </div>
      ))}
    </div>
  );
}

Blog.propTypes = {};

export default Blog;

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  console.log(data);
  return {
    props: {
      posts: data,
    },
  };
}
