import React from "react";
import BlogCard from "./BlogCard";
import "./css/Homepage.css";
export default function Homepage() {
  return (
    <div className="container mx-auto">
      <main className="max-w-3xl mx-auto">
        <h1 className="px-5 text-5xl font-bold sm:text-6xl md:py-10 md:text-8xl text-animate">
          Shomadhan
        </h1>
        <BlogCard />
      </main>
    </div>
  );
}
