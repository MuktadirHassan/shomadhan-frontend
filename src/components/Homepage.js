import React, { useState } from "react";
import useFetch from "./../lib/useFetch";
import BlogCard from "./BlogCard";
import "./css/Homepage.css";
import Pagination from "./Pagination";
export default function Homepage() {
  const [page, setPage] = useState(1);
  const [limit] = useState(3);
  const { data, loading } = useFetch(
    `https://shomadhan.herokuapp.com/api/v1/articles?page=${page}&limit=${limit}`
  );

  return (
    <div className="container mx-auto">
      <main className="max-w-3xl mx-auto">
        <h1 className="px-5 text-5xl font-bold sm:text-6xl md:py-10 md:text-8xl text-animate">
          Shomadhan
        </h1>
        {loading
          ? "Loading"
          : data &&
            data.articles.map((blog) => (
              <BlogCard data={blog} key={blog?._id} />
            ))}

        {data && <Pagination data={data} setPage={setPage} />}
      </main>
    </div>
  );
}
