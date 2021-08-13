import React from "react";
import useFetch from "./../lib/useFetch";

export default function AllArticles() {
  const { data, errors, loading } = useFetch(
    `http://localhost:5000/api/v1/articles/`
  );
  const deleteArticle = (id) => {
    fetch("http://localhost:5000/admin/delete-article/" + id, {
      headers: {
        authorization: sessionStorage.getItem("token"),
      },
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) =>
        data.message === "Article deleted successfully"
          ? window.location.reload()
          : console.log("Could not delete")
      )
      .catch((err) => console.log(err));
  };
  return (
    <div>
      {data &&
        data?.articles?.map((item) => (
          <div className="grid grid-cols-6 gap-4 my-2">
            <div className="col-span-6 mx-auto md:col-span-3 md:mx-0">
              {item.title}
            </div>
            <div className="col-span-6 mx-auto md:col-span-2 md:mx-0">
              {new Date(item.date).toLocaleString("en-BD")}
            </div>
            <div className="col-span-6 mx-auto md:col-span-1 md:mx-0">
              <button
                type="submit"
                className="px-8 py-2 text-lg text-white bg-red-500 border-0 rounded focus:outline-none hover:bg-red-600"
                onClick={(e) => deleteArticle(item._id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
    </div>
  );
}
