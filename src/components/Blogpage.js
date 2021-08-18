import React from "react";
import { useParams } from "react-router-dom";
import img from "../assets/img.jpg";
import useFetch from "./../lib/useFetch";
import "./css/Blogpage.css";
import Image from "./Image";
export default function Blogpage() {
  const { id } = useParams();
  const { data } = useFetch(
    `https://shomadhan.herokuapp.com/api/v1/article/${id}`
  );
  return (
    <main className="container px-5 pb-5 mx-auto">
      <article>
        <div className="pb-5">
          <h1 className="pt-4 pb-2 text-2xl font-medium md:text-4xl lg:text-6xl lg:py-4">
            {/* {data && data[0].title} */}
          </h1>
          <p className="pb-2 text-sm text-gray-600">
            by{" "}
            <span className="font-medium text-gray-700 underline">
              Muktadir
            </span>{" "}
            on{" "}
            <span>
              {/* {data &&
                new Date(data[0].date).toLocaleDateString("en-BD", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })} */}
            </span>
          </p>
        </div>
        <Image height="6" width="16" src={img} alt="alt-text" />
        <div className="text-gray-600 blog-content">
          {/* <p>{data && data[0].body}</p> */}
        </div>
      </article>
    </main>
  );
}
