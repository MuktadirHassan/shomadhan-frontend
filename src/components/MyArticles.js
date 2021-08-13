import React from "react";
import { useHistory } from "react-router-dom";
import useFetch from "./../lib/useFetch";
import { useAuth } from "./AuthContext";

export default function MyArticles() {
  const {
    user: { user },
  } = useAuth();
  const history = useHistory();
  const { data } = useFetch(
    `https://shomadhan.herokuapp.com/api/v1/article/by-user/${user?.email}`
  );
  const deleteArticle = (id) => {
    fetch(
      "https://shomadhan.herokuapp.com/api/v1/delete-article/" +
        user.uid +
        "/" +
        id,
      {
        headers: {
          authorization: sessionStorage.getItem("token"),
        },
        method: "DELETE",
      }
    )
      .then((res) => res.json())
      .then((data) =>
        data.message === "Article deleted successfully"
          ? window.location.reload()
          : console.log("Could not delete")
      )
      .catch((err) => console.log(err));
  };
  const editArticle = (id) => {
    history.push("/profile/edit-article/" + id);
  };
  console.log(data, user);
  return (
    <div>
      {data &&
        data.map((item) => (
          <div className="grid grid-cols-7 gap-4 my-2">
            <div className="col-span-6 mx-auto md:col-span-3 md:mx-0">
              {item.title}
            </div>
            <div className="col-span-6 mx-auto md:col-span-2 md:mx-0">
              {new Date(item.date).toLocaleString("en-BD")}
            </div>
            <div className="col-span-6 mx-auto md:col-span-1 md:mx-0">
              <button
                type="submit"
                className="px-8 py-2 text-lg text-white bg-blue-500 border-0 rounded focus:outline-none hover:bg-blue-600"
                onClick={(e) => editArticle(item._id)}
              >
                Update
              </button>
            </div>
            <div lassName="col-span-6 mx-auto md:col-span-1 md:mx-0">
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
      {data?.length === 0 && "You don't have any articles."}
    </div>
  );
}
