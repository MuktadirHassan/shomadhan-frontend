import React from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "./AuthContext";
export default function Login() {
  const { user } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <section className="text-gray-600 body-font">
      <div className="container flex flex-wrap items-center px-5 py-24 mx-auto">
        <div className="pr-0 lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0">
          {/* <h1 className="text-3xl font-medium text-gray-900 title-font">
            Slow-carb next level shoindcgoitch ethical authentic, poko scenester
          </h1>
          <p className="mt-4 leading-relaxed">
            Poke slow-carb mixtape knausgaard, typewriter street art gentrify
            hammock starladder roathse. Craies vegan tousled etsy austin.
          </p> */}
        </div>
        <div className="flex flex-col w-full p-8 mt-10 bg-gray-100 rounded-lg lg:w-2/6 md:w-1/2 md:ml-auto md:mt-0">
          <h2 className="mb-5 text-lg font-medium text-gray-900 title-font">
            Sign in
          </h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="relative mb-4">
              <label
                htmlFor="email"
                className="text-sm leading-7 text-gray-600"
              >
                Email
              </label>
              <input
                {...register("email", { required: true })}
                type="email"
                id="email"
                className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-white border border-gray-300 rounded outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
              />
              {errors.email && (
                <span className="text-xs leading-7">
                  This field is required
                </span>
              )}
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="password"
                className="text-sm leading-7 text-gray-600"
              >
                Password
              </label>
              <input
                {...register("password", { required: true })}
                type="password"
                id="password"
                className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-white border border-gray-300 rounded outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
              />
              {errors.password && (
                <span className="text-xs leading-7">
                  This field is required
                </span>
              )}
            </div>
            <button
              type="submit"
              className="px-8 py-2 text-lg text-white bg-indigo-500 border-0 rounded focus:outline-none hover:bg-indigo-600"
            >
              Login
            </button>
          </form>
          <p className="mt-3 text-xs text-gray-500">
            Random text just to make it look beautiful.
          </p>
        </div>
      </div>
    </section>
  );
}
