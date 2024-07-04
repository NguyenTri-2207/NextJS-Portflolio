import React, { useContext } from "react";
import { ThemContext } from "common/context";

import SocialShare from "./SocialShare/SocialShare";
import Comments from "./Comments/index";
import dataJson from "./data.json";
import Banner from "../blog/Banner";
import TableOfContents from "./TableOfContents/index";
import RelatedPost from "./RelatedPost/index";
import { Provider } from "react-redux";
import { store } from "lib/store/index";

function BlogDetailComponent({ data, dataStaticBlog }) {
  return (
    <div className=" pt-16 dark:bg-gray-900 dark:text-gray-100   mt-18 bg-white text-black min-h-screen">
      <Banner data={dataStaticBlog?.banner} info />
      {/* Content */}
      <div className="mt-10 lg:mt-20 container ">
        <div className="flex justify-between mb-10 lg:mb-20">
          <div className="lg:col-8 px-4 content">
            <div dangerouslySetInnerHTML={{ __html: data?.contents }}></div>
          </div>
          {/* Table of Contents */}
          <TableOfContents data={data?.contents} />
        </div>
        {/* Social */}
        <div className="mb-10">
          <SocialShare
            iconWidth={30}
            iconHeight={30}
            title="Share this article"
            titleClass={"block mb-4"}
          />
        </div>
        {/* Comments */}
        <section>
          <div>
            <Comments urlBlog={data.url} />
          </div>
        </section>
        {/* Related */}
        {/* {repoPost && <RelatedPost repoPost={repoPost} />} */}
      </div>
    </div>
  );
}

BlogDetailComponent.propTypes = {};

export default BlogDetailComponent;
