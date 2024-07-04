import Link from "node_modules/next/link";
import { useRouter } from "next/router";
import React, { useContext } from "react";
import { FaRegComments } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { ReplyContext } from "common/context";
import axios from "axios";
import { fetchComments } from "lib/slice/comments";
import { useDispatch } from "react-redux";

function Reply({ login, idComent, urlBlog }) {
  const { reply, setReply } = useContext(ReplyContext);
  const dispatch = useDispatch();
  const router = useRouter();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    const author = "6602a71f6bf954fa2f98aa4a";
    const parent = idComent;
    const content = data.content;
    const abc = { author, parent, content };
    axios
      .post(`http://localhost:4000/api/comments/${idComent}/reply`, abc)
      .then((res) => {
        console.log(res),
          reset(),
          setReply(!reply),
          dispatch(fetchComments(urlBlog));
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <div className="mb-10">
        {login === "true" ? (
          <form className="mb-6" onSubmit={handleSubmit(onSubmit)}>
            <div className="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
              <label htmlFor="comment" className="sr-only">
                Your comment
              </label>
              <textarea
                {...register("content", { required: true })}
                id="comment"
                rows="1"
                className="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
                placeholder="Write a comment..."
                required
              ></textarea>
            </div>
            <div className="text-right">
              <button
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Reply
              </button>
            </div>
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
    </div>
  );
}

export default Reply;
