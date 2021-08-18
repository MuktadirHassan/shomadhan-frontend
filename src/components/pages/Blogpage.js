import { motion } from "framer-motion";
import React from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import img from "../../assets/img.jpg";
import { fetcher } from "./../../lib/fetcher";
import Image from "./../Image";
export default function Blogpage() {
  const { id } = useParams();
  const { data, error } = useSWR(
    `https://shomadhan.herokuapp.com/api/v1/article/${id}`,
    fetcher
  );
  if (error) return <div>Failed to load.</div>;
  //   Loader
  if (!data)
    return (
      <>
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
        <div className="w-5/6 mx-auto bg-gray-400 rounded animate-pulse md:h-80 h-52"></div>
        <div className="w-full max-w-2xl py-3 mx-auto">
          <div className="flex space-x-4 animate-pulse">
            <div className="flex-1 py-1 space-y-4">
              <div className="w-1/4 h-4 bg-gray-400 rounded"></div>
              <div className="space-y-2">
                <div className="h-4 bg-gray-400 rounded"></div>
                <div className="w-full h-4 bg-gray-400 rounded"></div>
                <div className="h-4 bg-gray-400 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  const articleAnimate = {
    init: {
      y: 60,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.4,
      },
    },
  };
  return (
    <main className="container px-5 pb-5 mx-auto">
      <motion.article
        variants={articleAnimate}
        initial="init"
        animate="animate"
      >
        {/* Header */}
        <motion.div className="py-5 container-2xl">
          <h1 className="text-2xl font-medium text-gray-900 md:text-5xl md:mb-6">
            {data?.data[0].title}
          </h1>
          <p className="mt-3 text-sm">
            <span className="text-gray-500">
              {`By ${data?.data[0].authorEmail} on
               ${new Date(data?.data[0].date).toLocaleDateString("en-BD", {
                 weekday: "long",
                 year: "numeric",
                 month: "long",
                 day: "numeric",
               })}`}
            </span>
          </p>
        </motion.div>
        <motion.div variants={articleAnimate}>
          <Image height="5" width="16" src={img} alt="alt-text" />
        </motion.div>
        {/* Content */}
        <motion.div
          variants={articleAnimate}
          initial="init"
          animate="animate"
          className="mt-5 text-gray-600 blog-content container-2xl"
        >
          <p>{data?.data[0].body}</p>
        </motion.div>
      </motion.article>
    </main>
  );
}
