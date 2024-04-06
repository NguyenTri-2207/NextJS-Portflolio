import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { BiCommentDetail } from "react-icons/bi";
import { FaRegComments } from "react-icons/fa";
import Link from "components/molecules/Link";
import Image from "next/image";
import axios from "axios";
/*** Vendors ***/

/*** components ***/
function formatTimestamp(timestamp) {
  const date = new Date(timestamp * 1000);
  const options = { year: "numeric", month: "short", day: "numeric" };
  return date.toLocaleDateString("en-US", options);
}

const timestamp = 1677649428;
const formattedDate = formatTimestamp(timestamp);
function formatDate(inputDate) {
  const date = new Date(inputDate); // Tạo đối tượng Date từ chuỗi đầu vào

  // Lấy thông tin về ngày, tháng và năm từ đối tượng Date
  const day = date.getDate().toString().padStart(2, "0"); // Lấy ngày và thêm số 0 phía trước nếu cần
  const month = (date.getMonth() + 1).toString().padStart(2, "0"); // Lấy tháng và thêm số 0 phía trước nếu cần
  const year = date.getFullYear();

  // Trả về chuỗi ngày tháng định dạng "DD/MM/YYYY"
  return `${day}/${month}/${year}`;
}

/*** ========== ***/
const Card = ({ data }) => {
  return (
    <article className="p-6 text-base bg-white rounded-lg dark:bg-gray-900 ">
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center">
          <p className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white font-semibold">
            <Image
              width={24}
              height={24}
              className="mr-2 w-6 h-6 rounded-full"
              src={
                data.image
                  ? data.image
                  : "https://flowbite.com/docs/images/people/profile-picture-2.jpg"
              }
              alt="Michael Gough"
            />
            {data.author}
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            <time dateTime="2022-02-08" title="February 8th, 2022">
              {formatDate(data.createdAt)}
            </time>
          </p>
        </div>
      </div>
      <p className="text-gray-500 dark:text-gray-400">{data.content}</p>
      <div className="flex items-center mt-4 space-x-4">
        <button
          type="button"
          className="flex items-center text-sm text-gray-500 hover:underline dark:text-gray-400 font-medium"
        >
          <BiCommentDetail className="mr-2" size={18} />
          Reply
        </button>
        <div className="group">
          <button
            id="dropdownComment1Button"
            data-dropdown-toggle="dropdownComment1"
            className=" inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 dark:text-gray-400 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 dark:bg-gray-900 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            type="button"
          >
            <svg
              className="w-4 h-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 16 3"
            >
              <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
            </svg>
            <span className="sr-only">Comment settings</span>
          </button>
          <div className="group-hover:block hidden absolute text-xs  shadow-lg ">
            <button className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white ">
              Report
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};
export default function Comments({ data, idBlog }) {
  console.log(idBlog)
  const router = useRouter();
  const [login, setLogin] = useState(false);
  const [dataComment, setDataComment] = useState(null)
  useEffect(() => {
    axios.get(`http://localhost:4000/api/comments/${idBlog}`).then((res) => setDataComment(res.data))
    setLogin(localStorage.getItem("login"));
  }, []);
  return (
    <div>
      <section className="py-8 lg:py-16 antialiased" id="comment">
        <div className=" ">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg lg:text-2xl font-bold text-gray-900 dark:text-white">
              Discussion (20)
            </h3>
          </div>
          <div className="mb-10">
            {" "}
            {login === "true" ? (
              <form className="mb-6">
                <div className="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                  <label htmlFor="comment" className="sr-only">
                    Your comment
                  </label>
                  <textarea
                    id="comment"
                    rows="6"
                    className="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
                    placeholder="Write a comment..."
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"
                >
                  Post comment
                </button>
              </form>
            ) : (
              <div className="text-center border border-white dark:border-[#2a2d46] p-4 rounded-lg shadow">
                <Link
                  href={`/auth/login?url=${router.asPath}#comment`}
                  className="text-center mb-1 cursor-pointer"
                >
                  <div className="flex items-center hover:text-blue-500">
                    <FaRegComments className="mr-2" />
                    <span>Login to comment</span>
                  </div>
                </Link>
              </div>
            )}
          </div>
          {dataComment.map((item, index) => {
            return <Card key={index} data={item} />;
          })}
        </div>
      </section>
    </div>
  );
}
