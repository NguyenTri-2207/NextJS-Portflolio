import React from "react";
import { FiCalendar } from "react-icons/fi";
import Link from "components/molecules/Link";
import Image from "next/image";

function formatDate(inputDate) {
  const date = new Date(inputDate); // Tạo đối tượng Date từ chuỗi đầu vào

  // Lấy thông tin về ngày, tháng và năm từ đối tượng Date
  const day = date.getDate().toString().padStart(2, "0"); // Lấy ngày và thêm số 0 phía trước nếu cần
  const month = (date.getMonth() + 1).toString().padStart(2, "0"); // Lấy tháng và thêm số 0 phía trước nếu cần
  const year = date.getFullYear();

  // Trả về chuỗi ngày tháng định dạng "DD/MM/YYYY"
  return `${day}/${month}/${year}`;
}

function CardBlog({ item, read }) {
  return (
    <div className="col-12 md:col-6 lg:col-4 mb-5  ">
      <div className=" shadow-md  bg-white h-full border-gray-200 border rounded-lg  ">
        <Image
          className="rounded-t-lg w-full h-[200px]"
          src={item.image}
          width={300}
          height={200}
          alt={item.title}
        />

        <div className="p-5  ">
          <Link href={`/blog/${item.url}`}>
            <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2 line-clamp-2">
              {item.title}
            </h5>
          </Link>
          <p className="font-normal text-gray-700 mb-3 line-clamp-3 ">
            {item.desc}
          </p>

          <div className="flex flex-wrap justify-between">
            <div className="mt-6 inline-flex items-center rounded-md bg-blue-800 hover:bg-blue-500  px-2 py-0.5">
              <Link
                href={`/blog/${item.url}`}
                className="text-white  focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-xs p-2 text-center inline-flex items-center"
              >
                {read}
              </Link>
            </div>
            <div className="mt-6 inline-flex items-center">
              <FiCalendar size={18} />
              <span className="inline-block pl-2 text-sm">
                {formatDate(item?.updatedAt)}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardBlog;
