import React, { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

import { ThemContext } from "common/context";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FiCalendar, FiUser } from "react-icons/fi";
import { FaRegClock, FaRegComments } from "react-icons/fa";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import Slider from "react-slick";
import Social from "components/atoms/Social";
import SocialShare from "./SocialShare/SocialShare";
import Title from "components/atoms/Title";
import Comments from "./Comments";
import dataJson from "./data.json";
const listTable = [
  { name: "Singapore e-commerce", id: "Singapore-e-commerce" },
  { name: "Data security", id: "Data-security" },
  {
    name: "Contracts and payment methods",
    id: "Contracts-payment-methods",
  },
];
const SampleNextArrow = (props) => {
  const { onClick } = props;
  return (
    <button className="nextArrow" onClick={onClick}>
      <IoIosArrowForward />
    </button>
  );
};
const SamplePrevArrow = (props) => {
  const { onClick } = props;
  return (
    <button className="prevArrow" onClick={onClick}>
      <IoIosArrowBack />
    </button>
  );
};
var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
  pauseOnHover: true,
  // nextArrow: <SampleNextArrow />,
  // prevArrow: <SamplePrevArrow />,
  responsive: [
    {
      breakpoint: 1300,
      settings: {
        slidesToShow: 3,
        arrows: true,
      },
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 2,
        arrows: true,
      },
    },
    {
      breakpoint: 550,
      settings: {
        slidesToShow: 1,
        arrows: true,
      },
    },
  ],
};
function BlogDetailComponent({ data, repoPost }) {
  const [scrollbarHeight, setScrollbarHeight] = useState(false);
  useEffect(() => {
    window.onscroll = function () {
      const scrollHight = document.documentElement.scrollTop;
      if (scrollHight > 300) {
        setScrollbarHeight(true);
      } else {
        setScrollbarHeight(false);
      }
    };
  }, []);

  const ScrollToTitles = (e, id) => {
    const scrollToTable = document.getElementById(id);
    window.scrollTo({
      top: scrollToTable.getBoundingClientRect().top + window.pageYOffset - 100,
      behavior: "smooth",
    });
    e.preventDefault();
  };
  const { theme } = useContext(ThemContext);

  return (
    <div className="dark:bg-gray-900 dark:text-white  mt-20">
      <div className=" w-full h-full">
        {!theme ? (
          <img
            className=" w-full h-full "
            src="/assets/banner/blog-detail-light.png"
            layout="fill"
            alt="bg"
          />
        ) : (
          <img
            className=" w-full h-full"
            src="/assets/banner/blog-detail-dark.png"
            layout="fill"
            alt="bg"
          />
        )}
      </div>
      {/* Content */}
      <div className="mt-10 lg:mt-20 container ">
        <div className="flex justify-between mb-10 lg:mb-20">
          <div className="lg:col-8">
            <Title> {data.title}</Title>

            <div className="mb-10 text-xs">
              <div className={"lg:mr-6 mr-2 items-center inline-flex"}>
                <FiUser size={20} className="lg:mr-2 p-0.5" />
                <i className="font-medium">Tri Nguyen</i>
              </div>
              <div className={"lg:mr-6 mr-2 items-center inline-flex"}>
                <FaRegClock size={20} className="mr-2 p-0.5" />{" "}
                <i className="font-medium">6 minutes read</i>
              </div>
              <div className={"inline-flex items-center lg:mr-6 mr-2"}>
                <FiCalendar size={20} className="mr-2 p-0.5" />
                <i className="font-medium">22/07/2023</i>
              </div>
            </div>

            <div>
              <h2
                id="Singapore-e-commerce"
                className="text-xl font-medium mb-4 text-left"
              >
                Singapore e-commerce
              </h2>
              <div className={"mb-4"}>
                {data.body}
                eligendi iste nostrum consequuntur adipisci praesentium sit
                beatae perferendis similique fugit est illum et dolorum harum et
                voluptate eaque quidem exercitationem quos nam commodi possimus
                cum odio nihil nulla dolorum exercitationem magnam ex et a et
                distinctio debitis V3 - THE FRONTLINE BLOG Like Computing V3,
                another member of the Incisive Media publishing family has been
                designed to provide 24/7 technology news and analysis.
                Consequently, this makes its ‘frontline’ blog an incredibly
                useful resource for technology professionals as it offers
                in-depth analysis across a range of technology related topics.
                ZD NET ZD Net is a blog specifically targeted at IT
                professionals and brings together news, analysis and reviews
                from across the industry. It is a user friendly blog which
                contains a number of links to the individual blogs of members of
                its editorial team. ECONSULTANCY.COM UK BLOG Econsultancy is an
                online community for digital marketing and ecommerce
                professionals to discuss strategy and share ideas. The
                Econsultancy blog is updated throughout the working day with
                news and commentary from the world of digital marketing. BLOG
                The Telegraph’s blog largely contains posts from guest writers
                in the form of industry experts. Posts are published along with
                a short summary meaning that users can glance over the blog feed
                and be provided with a snapshot of the latest industry news, or
                click on the posts to access more in-depth analysis. THE
                FINANCIAL TIMES TECH HUB The Financial Times’ ‘Tech Hub’ blog
                covers the latest finanace-orientated technological developments
                and news and serves as a great resource for keeping informed
                about how technology is affecting the financial world more
                generally. FASTHOSTS BLOG The Fasthosts blog focuses on
                providing information and advice to industry professionals
                covering everything from cloud computing to digital marketing.
                The site is visually attractive with images accompanying,
                detailed posts from guest writers and contains plenty of links
                to news stories displayed on other blogs. DAVID BLOG –
                WIRED.CO.UK David Rowan is the editor of Wired magazine. His
                blog offers well-presented content that discusses some of the
                industry’s most topical issues. TUBBLOG Tubblog is maintained by
                Richard Tubb, the Microsoft Small Business Specialist Partner
                Area Lead for FY12 and independent business consultant. His blog
                offers opinion, news and information for IT companies.
                COMPUTERWORLD UK Computerworld UK describs itself as its blog is
                clearly laid out with posts grouped by different sections
                including open source, public sector, security, applications,
                Windows and Apple. It is updated by Computerworld’s own
                editorial team as well as guest writers. REAL POINT BLOG Real
                Point Blog is a space to share tips as well as industry news and
                opinion from sectors including technology and IT, digital
                marketing as well as business more generally. There is a vast
                amount of information contained within the blog, fortunately the
                search function makes it easy to find posts on a particular
              </div>
              <h2
                id="Data-security"
                className="text-xl font-medium mb-4 text-left"
              >
                Data security
              </h2>
              subject. CRAVE Crave is the gadget blog from CNET UK and provides
              all the latest gadget news and advice as well as product reviews
              and ‘how to guides’. It is a useful resource for any business
              wanting to find out more about the latest gadgets in the market.
              SAGE BLOG Sage develops software for the UK market that helps
              businesses to better manage their finances, staff, customers and
              suppliers. The Sage blog provides advice from experts within the
              company regarding how technology can help to refine existing
              business processes and drive efficiencies. WHICH? TECH DAILY The
              Which? technology blog aims to put the hype that surrounds the
              launch of new technology products into perspective by carrying out
              objective and thorough product reviews. It is a particularly
              useful blog to visit if you are considering in investing in new
              technology for your business. MIGHTY GADGET The Mighty Gadget blog
              contains posts regarding the latest technology news and reviews
              relating specifically to the UK. Posts are separated by sections,
              making the blog easy to navigate.
              <h2
                id="Contracts-payment-methods"
                className="text-xl font-medium mb-4 text-left"
              >
                Contracts and payment methods
              </h2>
              subject. CRAVE Crave is the gadget blog from CNET UK and provides
              all the latest gadget news and advice as well as product reviews
              and ‘how to guides’. It is a useful resource for any business
              wanting to find out more about the latest gadgets in the market.
              SAGE BLOG Sage develops software for the UK market that helps
              businesses to better manage their finances, staff, customers and
              suppliers. The Sage blog provides advice from experts within the
              company regarding how technology can help to refine existing
              business processes and drive efficiencies. WHICH? TECH DAILY The
              Which? technology blog aims to put the hype that surrounds the
              launch of new technology products into perspective by carrying out
              objective and thorough product reviews. It is a particularly
              useful blog to visit if you are considering in investing in new
              technology for your business. MIGHTY GADGET The Mighty Gadget blog
              contains posts regarding the latest technology news and reviews
              relating specifically to the UK. Posts are separated by sections,
              making the blog easy to navigate.
            </div>
          </div>
          {/* Table of Contents */}
          <div className="lg:col-3 hidden lg:block ">
            <div className=" top-[120px]  mb-10 lg:sticky lg:mb-0 ">
              <div
                id="tableOfContents"
                className={`  group rounded-xl  top-20  px-4 cursor-pointer dark:bg-transparent bg-white lg:py-2 shadow-xl `}
              >
                <div className="flex items-center justify-between group-hover:text-blue-500">
                  <h3 className="font-medium py-2  ">Table Of Contents</h3>
                  <svg
                    stroke="currentColor"
                    fill="none"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="float-right hidden align-middle lg:inline-block "
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <polyline points="7 13 12 18 17 13"></polyline>
                    <polyline points="7 6 12 11 17 6"></polyline>
                  </svg>
                </div>
                <div
                  id="post"
                  className={`${scrollbarHeight ? "h-0" : "h-[300px] "
                    } mt-2 group-hover:h-[300px]  transition-all duration-300 ease-in-out overflow-hidden`}
                >
                  {listTable.map((item, index) => {
                    return (
                      <div key={index} className="mb-2 hover:text-blue-500">
                        <a
                          href={`#${item.id}`}
                          onClick={(e) => ScrollToTitles(e, item.id)}
                        >
                          {item.name}
                        </a>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
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
        <section className="mt-10 pb-10 lg:mb-20 overflow-hidden">
          <Title>Related</Title>
          <div className=" relative z-10 ">
            <Slider {...settings}>
              {repoPost
                .filter((item) => item.title.length > 60)
                .map((item, index) => {
                  return (
                    <div key={index} className=" px-4 overflow-hidden ">
                      <div className=" shadow-xl bg-white dark:bg-[#272b44] h-full rounded-l g  ">
                        <a href="">
                          <img
                            className="rounded-t-lg"
                            src="https://flowbite.com/docs/images/blog/image-1.jpg"
                            alt=""
                          />
                        </a>
                        <div className="p-5  ">
                          <a href={`/blog/${item.id}`}>
                            <h5 className=" font-bold text-2xl tracking-tight mb-2 line-clamp-2">
                              {item.title}
                            </h5>
                          </a>
                          <p className="font-normal  mb-3 line-clamp-3 ">
                            {item.body}
                          </p>
                          <a
                            className=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center"
                            href={`/blog/${item.id}`}
                          >
                            Read more
                          </a>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </Slider>
          </div>
        </section>
      </div>

      {/* <Footer /> */}
    </div>
  );
}

BlogDetailComponent.propTypes = {};

export default BlogDetailComponent;
