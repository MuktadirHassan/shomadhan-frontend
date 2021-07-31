import React from "react";
import useFetch from "./../lib/useFetch";
import BlogCard from "./BlogCard";
import "./css/Homepage.css";
export default function Homepage() {
  const { data, loading, error } = useFetch(
    "http://localhost:5000/api/v1/articles"
  );

  return (
    <div className="container mx-auto">
      <main className="max-w-3xl mx-auto">
        <h1 className="px-5 text-5xl font-bold sm:text-6xl md:py-10 md:text-8xl text-animate">
          Shomadhan
        </h1>
        {loading
          ? "Loading"
          : data && data.map((blog) => <BlogCard data={blog} />)}
      </main>
    </div>
  );
}
