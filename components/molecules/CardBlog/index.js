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
    <div className="col-12 md:col-6 lg:col-4 mb-6">
      <div className="bg-white dark:bg-gray-800 h-full border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
        <Link href={`/blog/${item.url}`}>
          <div className="relative w-full h-48 overflow-hidden">
            <Image
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              src={item.image}
              width={400}
              height={200}
              alt={item.title}
            />
          </div>
        </Link>

        <div className="p-5">
          <Link href={`/blog/${item.url}`}>
            <h5 className="text-gray-900 dark:text-white font-semibold text-xl tracking-tight mb-3 line-clamp-2 hover:text-main dark:hover:text-main transition-colors">
              {item.title}
            </h5>
          </Link>
          <p className="font-normal text-gray-600 dark:text-gray-400 mb-4 line-clamp-3 text-sm leading-relaxed">
            {item.desc}
          </p>

          <div className="flex flex-wrap justify-between items-center pt-4 border-t border-gray-200 dark:border-gray-700">
            <div className="inline-flex items-center text-gray-500 dark:text-gray-400 text-xs">
              <FiCalendar size={16} className="mr-2" />
              <span>{formatDate(item?.updatedAt)}</span>
            </div>
            <Link
              href={`/blog/${item.url}`}
              className="inline-flex items-center text-sm font-medium text-main hover:text-main/80 dark:text-main dark:hover:text-main/80 transition-colors"
            >
              {read}
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardBlog;
