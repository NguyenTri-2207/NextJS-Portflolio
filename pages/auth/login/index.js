/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-no-comment-textnodes */
import { useForm } from "react-hook-form";
import React, { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Head from "next/head";
import axios from "axios";
import { LiaEyeSolid, LiaEyeSlash } from "react-icons/lia";
import { AiOutlineReload } from "react-icons/ai";
import Layout from "components/templates/LayoutTemplate";
function Login(props) {
  const router = useRouter();
  const [response, setResponse] = useState();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const togglePasswordVisiblity = () => {
    setShowPassword(showPassword ? false : true);
  };
  const onSubmit = async (data) => {
    setLoading(true);
    setError("");
    const endpoint = `https://crm-nodejs.vercel.app/v1/auth/login`;
    try {
      const response = await axios.post(endpoint, data, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.status === 200) {
        setResponse(response.data);
        localStorage.setItem("login", JSON.stringify(true));
        // setLogin(true)
        const userString = JSON.stringify(response.data);
        localStorage.setItem("tokenAndUser", userString);
        router.push(`/${router.query.url}#comment`);
      } else {
        console.log("Error");
      }
    } catch (error) {
      setError(error?.response?.data);
      console.error(error);
    }
    setLoading(false);
  };
  return (
    <>
      <Head>
        <title>Login-Nguyễn Ngọc Trí</title>
        <meta name="description" content="Login Page Nguyễn Ngọc Trí"></meta>

      </Head>
      <Layout >
        <section className="dark:bg-bgHome-dark h-screen bg-bgHome-white  ">
          <div className="container h-full">
            <div className=" dark:text-white text-gray-800 flex flex-col h-full justify-center">
              <div className=" px-4 py-8 mx-auto lg:col-6 ">
                <h1 className="flex mt-5 text-2xl lg:text-3xl items-center justify-center mb-6 lg:mb-10  font-semibold ">
                  <img className="w-10 h-10 mr-4 " src="/assets/logo.png" alt="logo" />
                  NT Website
                </h1>
                <div className="w-full bg-white rounded-lg  shadow-xl md:mt-0  xl:p-0  ">
                  <div className="p-6 space-y-4 md:space-y-8 sm:p-8">
                    <h3 className="text-lg font-medium  tracking-tight text-gray-900 md:text-2xl ">
                      Sign in to your account
                    </h3>
                    <form
                      className="space-y-4 md:space-y-6"
                      onSubmit={handleSubmit(onSubmit)}
                    >
                      <div className="relative">
                        <input
                          className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 block w-full p-2.5  placeholder-gray-400  focus:border-blue-500"
                          placeholder="Name or email"
                          label="name or email"
                          size="lg"
                          {...register(
                            "emailOrUsername",
                            { required: true },
                            {
                              pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: "invalid email address",
                              },
                            }
                          )}
                        />

                        {errors.emailOrUsername && (
                          <p className="text-sm text-red-600 mt-2 ml-2">
                            Email is required
                          </p>
                        )}
                      </div>
                      <div className="">
                        <div className="relative">
                          <input
                            className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 block w-full p-2.5  placeholder-gray-400  focus:border-blue-500"
                            placeholder="Password"
                            type={showPassword ? "text" : "password"}
                            size="lg"
                            label="Password"
                            {...register("password", { required: true })}
                          />

                          {errors.password && (
                            <p className="text-sm text-red-600 mt-2 ml-2">
                              Password is required
                            </p>
                          )}
                          <div className="absolute top-3 right-3 cursor-pointer">
                            <div onClick={togglePasswordVisiblity}>
                              {showPassword ? (
                                <LiaEyeSolid className="text-xl" />
                              ) : (
                                <LiaEyeSlash className="text-xl" />
                              )}
                            </div>
                          </div>
                        </div>
                        {error?.message && (
                          <p className="text-sm text-red-600 mt-2 ml-2">
                            {error?.message}
                          </p>
                        )}
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-start ">
                          <div className="flex items-center h-5 ">
                            <input
                              {...register("rememberMe")}
                              type="checkbox"
                              className="w-4 h-4 cursor-pointer border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 "
                            />
                          </div>
                          <div className=" text-sm">
                            <label className="text-gray-500 ml-3  ">Remember me</label>
                          </div>
                        </div>
                        <a
                          href=""
                          className="text-sm font-medium text-primary-600 hover:underline"
                        >
                          Forgot password?
                        </a>
                      </div>
                      {response?.status === 404 && (
                        <p className="text-sm text-red-600 mt-2 ml-2">
                          {response?.message}
                        </p>
                      )}
                      <button className="w-full fon text-black bg-cyan-300 hover:bg-cyan-500 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">
                        {loading ? (
                          <div className="flex justify-center">
                            <AiOutlineReload className="animate-spin font-semibold h-5 w-5 mr-3 " />
                            Loading...
                          </div>
                        ) : (
                          "Sign in"
                        )}
                      </button>
                    </form>

                    <p className="text-sm font-light text-gray-500 ">
                      Don’t have an account yet?{" "}
                      <Link href="/auth/register">
                        <a className=" text-blue-600 hover:underline dark:text-primary-500">
                          {" "}
                          Sign up
                        </a>
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
              {/* </section> */}
            </div></div>
        </section>
      </Layout>
    </>
  );
}

Login.propTypes = {};

export default Login;
