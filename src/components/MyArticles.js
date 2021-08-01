import React from "react";
import useFetch from "./../lib/useFetch";
import { useAuth } from "./AuthContext";

export default function MyArticles() {
  const {
    user: { user },
  } = useAuth();
  const { data, errors, loading } = useFetch(
    `http://localhost:5000/api/v1/article/by-user/${user?.email}`
  );
  console.log(data, user);
  return (
    <div>
      {data &&
        data.map((item) => (
          <div className="flex items-center justify-between my-2">
            <div className="flex-0">{item.title}</div>
            <div>{new Date(item.date).toLocaleString("en-BD")}</div>
            <div>
              <button
                type="submit"
                className="px-8 py-2 text-lg text-white bg-red-500 border-0 rounded focus:outline-none hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
    </div>
  );
}
