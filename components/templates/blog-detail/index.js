import React, { useContext } from "react";
import { ThemContext } from "common/context";

import SocialShare from "./SocialShare/SocialShare";
import Comments from "./Comments/index";
import dataJson from "./data?.json";
import Banner from "components/templates/new-blog/Banner";
import TableOfContents from "./TableOfContents/index";
import RelatedPost from "./RelatedPost/index";

const Content = ({ data, index }) => {
  const slug = data?.title
    .toLowerCase() // Chuyển thành chữ thường
    .replace(/\s+/g, "-") // Thay khoảng trắng bằng dấu gạch ngang
    .replace(/[^a-z0-9-]/g, ""); // Loại bỏ các ký tự không phải chữ cái, số, hoặc dấu gạch ngang

  return (
    <div className="mb-6">
      <h2 id={slug} className="text-xl lg:text-2xl font-medium mb-4 text-left">
        {index + 1}. {data?.title}
      </h2>
      <p className="mb-4">{data?.content}</p>
      {data?.image && (
        <img className=" w-full h-full" src={data?.image} alt={data?.title} />
      )}
    </div>
  );
};
function BlogDetailComponent({ data, repoPost, dataStatic }) {
  const { theme } = useContext(ThemContext);
  return (
    <div className=" pt-16 dark:bg-gray-900 dark:text-gray-100   mt-18 bg-white text-black min-h-screen">
      <Banner title={data?.title} described={data?.desc} />
      {/* Content */}
      <div className="mt-10 lg:mt-20 container ">
        <div className="flex justify-between mb-10 lg:mb-20">
          <div className="lg:col-8 px-4">
            {dataStatic.content.map((item, index) => {
              return <Content key={index} data={item} index={index} />;
            })}
            {data?.lastContent && <div>{dataStatic.lastContent}</div>}
          </div>
          {/* Table of Contents */}
          <TableOfContents data={dataStatic} />
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
            <Comments data={dataJson.dataComment} />
          </div>
        </section>
        {/* Related */}
        <RelatedPost repoPost={repoPost} />
      </div>
    </div>
  );
}

BlogDetailComponent.propTypes = {};

export default BlogDetailComponent;
