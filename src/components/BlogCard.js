import React from "react";
import { Link } from "react-router-dom";
import img from "../assets/img.jpg";
import Image from "./Image";
export default function BlogCard({ data }) {
  return (
    <article className="overflow-hidden text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto md:py-10">
        <div className="-my-8 divide-y-2 divide-gray-100">
          <div className="flex flex-wrap md:py-8 md:flex-nowrap">
            <div className="flex flex-col flex-shrink-0 w-full mb-6 md:w-64 md:mb-0">
              <div className="md:px-3">
                <Image height="2" width="3" src={img} alt="alt-text" />
              </div>
            </div>
            <div className="md:flex-grow">
              <h2 className="mb-2 text-2xl font-medium text-gray-900 title-font">
                {data.title}
              </h2>

              <p className="leading-relaxed">{data.body}</p>
              <div className="mt-4 text-xs text-gray-500">
                {new Date(data.date).toLocaleDateString("en-BD", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </div>
              <Link
                to={`/blog/${data._id}`}
                className="inline-flex items-center mt-4 text-indigo-500"
              >
                Learn More
                <svg
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
