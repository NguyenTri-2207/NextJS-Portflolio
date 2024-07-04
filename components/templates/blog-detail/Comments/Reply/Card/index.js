import React from "react";
import { MdDelete } from "react-icons/md";
import Image from "next/image";
import { formatDate } from "common/formatDate";
import { fetchComments } from "lib/slice/comments";
import { useDispatch } from "react-redux";
import axios from "axios";

function CardReply({ data, idCardComments, urlBlog }) {
  const dispatch = useDispatch();
  const DeleteComments = (item) => {
    const replyIdToDelete = item;
    axios
      .delete(
        `http://localhost:4000/api/comments/${idCardComments}/reply/${replyIdToDelete}`
      )
      .then((response) => {
        console.log(`Deleted post with ID ${replyIdToDelete}`);
        dispatch(fetchComments(urlBlog));
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <article className="px-6 mb-6 text-base bg-white rounded-lg dark:bg-gray-900 ">
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
          <div className="flex">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              <time dateTime="2022-02-08" title="February 8th, 2022">
                {formatDate(data.createdAt)}
              </time>
            </p>
          </div>

          <button onClick={() => DeleteComments(data._id)} className="ml-10">
            <MdDelete />
          </button>
        </div>
      </div>
      <p className="text-gray-500 dark:text-gray-400">{data.content}</p>
    </article>
  );
}

export default CardReply;
