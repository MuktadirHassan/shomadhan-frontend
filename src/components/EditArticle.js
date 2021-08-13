import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import useFetch from "./../lib/useFetch";
import { useAuth } from "./AuthContext";

export default function EditArticle() {
  const { user } = useAuth();
  const { articleId } = useParams();
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ defaultValues: null });

  const { data } = useFetch(
    "https://shomadhan.herokuapp.com/api/v1/article/" + articleId
  );
  useEffect(() => {
    reset(data);
  }, [data, reset]);

  const onSubmit = (data) => {
    setLoading(true);
    const schema = {
      title: data.title,
      body: data.content,
    };
    fetch(
      `https://shomadhan.herokuapp.com/api/v1/update-article/${user?.user?.uid}/${articleId}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: sessionStorage.getItem("token"),
        },
        body: JSON.stringify(schema),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setTimeout(() => {
          setLoading(false);
          setResponse(data);
          reset();
        }, 500);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
        setResponse(err);
      })
      .finally(() => data && reset(data));
  };

  return (
    <div className="flex flex-col w-full p-8 mx-auto mt-10 bg-gray-100 rounded-lg lg:w-2/3 md:w-2/3 md:mt-0">
      <p className="pb-2 text-sm text-gray-500">
        Author: {data && data[0].authorEmail}
      </p>
      <p className="pb-2 text-sm text-gray-500">
        Date Published: {data && new Date(data[0].date).toLocaleString("en-BD")}
      </p>
      <p className="pb-2 text-sm text-gray-500">
        Last Updated:{" "}
        {data && new Date(data[0].lastUpdated).toLocaleString("en-BD")}
      </p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="relative mb-4">
          <label htmlFor="title" className="text-sm leading-7 text-gray-600">
            Title
          </label>
          <input
            {...register("title", { required: true })}
            type="text"
            id="title"
            className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-white border border-gray-300 rounded outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
            defaultValue={data && data[0].title}
          />
          {errors.title && (
            <span className="text-xs leading-7">This field is required</span>
          )}
        </div>
        <div className="relative mb-4">
          <label htmlFor="content" className="text-sm leading-7 text-gray-600">
            Article
          </label>
          <textarea
            {...register("content", { required: true })}
            defaultValue={data && data[0].body}
            type="content"
            id="content"
            className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-white border border-gray-300 rounded outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
          ></textarea>
          {errors.content && (
            <span className="text-xs leading-7">This field is required</span>
          )}
        </div>
        <button
          type="submit"
          className="w-40 py-3 text-lg text-white bg-indigo-500 border-0 rounded focus:outline-none hover:bg-indigo-600"
        >
          {loading ? (
            <span className="flex items-center justify-center">
              <svg
                class="animate-spin h-6 w-6 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  class="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  stroke-width="4"
                ></circle>
                <path
                  class="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
            </span>
          ) : (
            <span>Update</span>
          )}
        </button>
      </form>
      {response.message && (
        <span className="mt-2 text-sm text-gray-600">{response.message}</span>
      )}
    </div>
  );
}
