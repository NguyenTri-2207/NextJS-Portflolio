import axios from "axios";
import Image from "next/image";
import { useEffect } from "react";
import { BiCommentDetail } from "react-icons/bi";
import { FiDelete } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
function formatDate(inputDate) {
  const date = new Date(inputDate); // Tạo đối tượng Date từ chuỗi đầu vào

  // Lấy thông tin về ngày, tháng và năm từ đối tượng Date
  const day = date.getDate().toString().padStart(2, "0"); // Lấy ngày và thêm số 0 phía trước nếu cần
  const month = (date.getMonth() + 1).toString().padStart(2, "0"); // Lấy tháng và thêm số 0 phía trước nếu cần
  const year = date.getFullYear();

  // Trả về chuỗi ngày tháng định dạng "DD/MM/YYYY"
  return `${day}/${month}/${year}`;
}
const Card = ({ data, DeleteComments }) => {
  return (
    <div>
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
              {data.userName}
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              <time dateTime="2022-02-08" title="February 8th, 2022">
                {formatDate(data.createdAt)}
              </time>
            </p>
            <button onClick={DeleteComments} className="ml-10">
              <MdDelete />
            </button>
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
    </div>
  );
};

export default Card;
