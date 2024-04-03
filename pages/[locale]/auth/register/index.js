/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-no-comment-textnodes */
import { useForm } from "react-hook-form";
import React, { useRef, useState, useContext } from "react";
import { useRouter } from "next/router";
import Link from "components/molecules/Link";
import Head from "next/head";
import axios from "axios";
import { AiOutlineReload } from "react-icons/ai";
import Layout from "components/organisms/LayoutTemplate";
import Image from "next/image";

function Login(props) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const [error, setError] = useState(null);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    const endpoint = `https://crm-nodejs.vercel.app/v1/auth/register`;
    setError("");
    setLoading(true);
    try {
      const response = await axios.post(
        endpoint,
        {
          username: data.username,
          email: data.email,
          password: data.password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.status === 201) {
        router.push("/auth/login");
      } else {
        console.log("Error");
      }
    } catch (error) {
      setError(error.response.data);
      console.error(error);
    }
    setLoading(false);
  };

  return (
    <>
      <Head>
        <title>Register-Nguyễn Ngọc Trí</title>{" "}
        <meta name="description" content="Blog Page Nguyễn Ngọc Trí"></meta>
        <meta name="description" content="Register Page Nguyễn Ngọc Trí"></meta>
      </Head>
      <Layout>
        <section className="dark:bg-bgHome-dark  h-screen    bg-bgHome-white  ">
          <div className="container h-full">
            <div className="row flex-col items-center justify-center h-full ">
              <div className="lg:col-6 xl:col-5">
                <h1 className="flex mt-5 text-2xl lg:text-3xl items-center justify-center mb-6 lg:mb-10  font-semibold dark:text-white text-gray-800">
                  <Image
                    width={40}
                    height={40}
                    className="w-10 h-10 mr-2 "
                    src="/assets/logo.png"
                    alt="logo"
                  />
                  NT Website
                </h1>
                <div className="w-full bg-white rounded-lg  shadow-xl md:mt-0 ">
                  <div className="p-6 space-y-4 md:space-y-4 sm:p-6">
                    <h3 className="text-lg font-medium  tracking-tight text-gray-900 md:text-2xl ">
                      Sign Up
                    </h3>

                    <form
                      className="space-y-4 md:space-y-6"
                      onSubmit={handleSubmit(onSubmit)}
                    >
                      <div>
                        <input
                          className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 block w-full p-2.5  placeholder-gray-400  focus:border-blue-500"
                          type="text"
                          placeholder="User Name"
                          label="User Name"
                          {...register("username", { required: true })}
                        />
                      </div>
                      <div>
                        <input
                          className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 block w-full p-2.5  placeholder-gray-400  focus:border-blue-500"
                          type="email"
                          placeholder="Email Address"
                          label="Email Address"
                          {...register(
                            "email",
                            { required: true },

                            {
                              pattern: {
                                value:
                                  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: "invalid email address",
                              },
                            }
                          )}
                        />

                        {errors.email && (
                          <p className="text-sm text-red-600 mt-2 ml-2">
                            Email is required
                          </p>
                        )}
                        {error?.message && (
                          <p className="text-sm text-red-600 mt-2 ml-2">
                            {error?.message}
                          </p>
                        )}
                      </div>
                      <div>
                        <input
                          type="password"
                          placeholder="Password"
                          className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 block w-full p-2.5  placeholder-gray-400  focus:border-blue-500"
                          label="Password"
                          {...register("password", {
                            required: true,
                            minLength: 6,
                          })}
                        />

                        {errors.password &&
                          errors.password.type === "required" && (
                            <p className="text-sm text-red-600 mt-2 ml-2">
                              This field is required.
                            </p>
                          )}
                        {errors.password &&
                          errors.password.type === "minLength" && (
                            <p className="text-sm text-red-600 mt-2 ml-2">
                              Minimum length is 6 characters.
                            </p>
                          )}
                      </div>
                      <div>
                        <input
                          type="password"
                          placeholder="Confirm Password"
                          className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 block w-full p-2.5  placeholder-gray-400  focus:border-blue-500"
                          label="Confirm Password"
                          {...register("confirm_password", {
                            required: true,
                            validate: (val) => {
                              if (watch("password") != val) {
                                return "Your passwords do no match";
                              }
                            },
                          })}
                        />
                        {errors?.confirm_password?.type && (
                          <p className="text-sm text-red-600 mt-2 ml-2">
                            Your passwords do no match
                          </p>
                        )}
                      </div>
                      <div className="flex items-start ">
                        <div className="flex items-center h-5">
                          <input
                            {...register("checkbox", { required: true })}
                            type="checkbox"
                            className="w-4 h-4 cursor-pointer border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 "
                          />
                        </div>

                        <div className="ml-3 text-sm">
                          <label htmlFor="terms" className="font-light  ">
                            I accept the{" "}
                            <a
                              className="font-medium hover:text-blue-600 hover:underline "
                              href="#"
                            >
                              Terms and Conditions
                            </a>
                          </label>
                        </div>
                      </div>
                      {errors?.checkbox && (
                        <p className="text-sm text-red-600 !mt-1  ">
                          Please accept the Terms and Conditions
                        </p>
                      )}
                      <button className="w-full text-black bg-cyan-300 hover:bg-cyan-500 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                        {loading ? (
                          <div className="flex justify-center">
                            <AiOutlineReload className="animate-spin font-semibold h-5 w-5 mr-3 " />
                            Loading...
                          </div>
                        ) : (
                          "Sign Up"
                        )}
                      </button>
                      <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                        Already have an account?{" "}
                        <Link
                          href="/auth/login"
                          className=" text-blue-600 hover:underline dark:text-primary-500"
                        >
                          Login here
                        </Link>
                      </p>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}

Login.propTypes = {};

export default Login;
