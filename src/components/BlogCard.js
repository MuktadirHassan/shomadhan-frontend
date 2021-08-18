import React from "react";
import { Link } from "react-router-dom";
export default function BlogCard({ data }) {
  return (
    <div className="mt-4">
      <p className="py-4 text-xs text-gray-500">
        {new Date(data.date).toLocaleDateString("en-BD", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </p>
      <h2 className="py-2 text-4xl font-semibold text-gray-900 title-font">
        {data.title}
      </h2>
      <p className="leading-relaxed text-gray-700 line-clamp-2">{data.body}</p>
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
      <hr className="w-2/3 mt-5 opacity-75" />
    </div>
  );
}
