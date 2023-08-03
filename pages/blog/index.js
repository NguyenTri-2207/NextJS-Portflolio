import Layout from "components/templates/Layout";
import React from "react";
import Head from "next/head";
function Blog({ repo }) {
  console.log(repo);
  return (
    <>
      <Head>
        <title>Blog-Nguyễn Ngọc Trí</title>
      </Head>
      <Layout>
        {" "}
        <section className="bg-[#1f2336] pt-[128px]">
          <div className=" container lg:pl-[80px] ">
            <div className="row items-stretch">
              {repo
                .filter((item) => item.title.length > 60)
                .map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="col-12 md:col-6 lg:col-4 mb-5  "
                    >
                      <div className=" shadow-md bg-white h-full border-gray-200 border rounded-lg  ">
                        <a href="">
                          <img
                            className="rounded-t-lg"
                            src="https://flowbite.com/docs/images/blog/image-1.jpg"
                            alt=""
                          />
                        </a>
                        <div className="p-5  ">
                          <a href={`/blog/${item.id}`}>
                            <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2 line-clamp-2">
                              {item.title}
                            </h5>
                          </a>
                          <p className="font-normal text-gray-700 mb-3 line-clamp-3 ">
                            {item.body}
                          </p>
                          <a
                            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center"
                            href={`/blog/${item.id}`}
                          >
                            Read more
                          </a>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </section>
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
