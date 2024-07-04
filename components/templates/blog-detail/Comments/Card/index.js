import Image from "next/image";
import { useState } from "react";
import { BiCommentDetail } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import Reply from "../Reply/index";
import { ReplyContext } from "common/context";
import { formatDate } from "common/formatDate";
import axios from "axios";
import { fetchComments } from "lib/slice/comments";
import { useDispatch } from "react-redux";

const Card = ({ data, login, urlBlog }) => {
  const dispatch = useDispatch();
  const [reply, setReply] = useState(false);
  const handleReply = () => {
    setReply(!reply);
  };
  const deleteComments = (postIdToDelete) => {
    axios
      .delete(`http://localhost:4000/api/comments/${postIdToDelete}`)
      .then((response) => {
        console.log(`Deleted post with ID ${postIdToDelete}`);
        dispatch(fetchComments(urlBlog));
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <ReplyContext.Provider value={{ reply, setReply }}>
      <article className=" text-sm lg:px-6 lg:text-base bg-white rounded-lg dark:bg-gray-900 ">
        <div className="bg-[#e7f3ff] p-2 rounded-xl">
          <div className="flex justify-between items-center mb-2 ">
            <div className="flex items-center w-full justify-between ">
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
                <p className="text-xs">{data.userName}</p>
              </p>

              <div className=" mt-4 ">
                <div className="group">
                  <button className=" px-2" type="button">
                    ...
                  </button>
                  <div className="group-hover:block hidden absolute text-xs  shadow-lg ">
                    <button className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white ">
                      Report
                    </button>
                    <button
                      onClick={() => deleteComments(data._id)}
                      className="ml-10"
                    >
                      <MdDelete />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p className="text-gray-500 dark:text-gray-400">{data.content}</p>
        </div>
        <div className="flex text-sm px-2 mt-1 text-gray-600 dark:text-gray-400">
          <p>{formatDate(data.createdAt)}</p>
          <button className="ml-5 font-medium">Like</button>
          <button
            type="button"
            onClick={() => handleReply()}
            className="ml-5  hover:underline font-medium"
          >
            Reply
          </button>
        </div>

        {reply && <Reply login={login} idComent={data._id} urlBlog={urlBlog} />}
      </article>
    </ReplyContext.Provider>
  );
};

export default Card;
