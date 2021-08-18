import { motion } from "framer-motion";
import React, { useState } from "react";
import useSWR from "swr";
import "../css/Homepage.css";
import { fetcher } from "./../../lib/fetcher";
import BlogCard from "./../BlogCard";
import Pagination from "./../Pagination";
export default function Homepage() {
  return (
    <main className="container-2xl">
      <h1 className="text-5xl font-bold sm:text-6xl md:py-10 md:text-8xl text-animate">
        Shomadhan
      </h1>
      <Articles />
    </main>
  );
}

function Articles() {
  const [page, setPage] = useState(1);
  const [limit] = useState(3);

  const { data, error } = useSWR(
    `https://shomadhan.herokuapp.com/api/v1/articles?page=${page}&limit=${limit}`,
    fetcher
  );

  if (error) return <div>failed to load</div>;
  if (!data) {
    //   Loader
    const counter = [0, 1, 2];
    return (
      <>
        {counter.map((i) => (
          <div className="w-full max-w-2xl py-3 mx-auto">
            <div className="flex space-x-4 animate-pulse">
              <div className="flex-1 py-1 space-y-4">
                <div className="w-1/4 h-4 bg-gray-400 rounded"></div>
                <div className="space-y-2">
                  <div className="h-4 bg-gray-400 rounded"></div>
                  <div className="w-full h-4 bg-gray-400 rounded"></div>
                  <div className="w-4/6 h-4 bg-gray-400 rounded"></div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </>
    );
  }
  const articlesAnimate = {
    init: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.2,
      },
    },
  };
  const articleAnimate = {
    init: {
      y: 60,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
    },
  };
  return (
    <>
      <motion.div animate="animate" initial="init" variants={articlesAnimate}>
        {data?.data.articles.map((blog) => (
          <motion.div variants={articleAnimate} key={blog?._id}>
            <BlogCard data={blog} />
          </motion.div>
        ))}
      </motion.div>
      {data && <Pagination data={data.data} setPage={setPage} />}
    </>
  );
}
