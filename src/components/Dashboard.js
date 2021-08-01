import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import AllArticles from "./AllArticles";

export default function Dashboard() {
  return (
    <div className="container px-5 ">
      <div className="flex-col w-full mx-auto md:flex md:flex-row md:min-h-screen">
        <aside className="flex flex-col flex-shrink-0 w-full text-gray-700 bg-transparent md:w-64 dark-mode:text-gray-200 dark-mode:bg-gray-800">
          <nav class="flex-grow md:block px-4 pb-4 md:pb-0 md:overflow-y-auto">
            <Link
              className="block px-4 py-2 mt-2 text-sm font-semibold text-gray-900 rounded-lg dark-mode:bg-gray-700 dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 hover:text-gray-900 focus:text-gray-900 hover:bg-white focus:bg-gray-200 focus:outline-none focus:shadow-outline"
              to="/dashboard/all-articles"
            >
              All Articles
            </Link>
          </nav>
        </aside>
        <main className="flex-1">
          <Switch>
            <Route path="/dashboard/all-articles">
              <AllArticles />
            </Route>
            <Route path="/dashboard">
              <AllArticles />
            </Route>
          </Switch>
        </main>
      </div>
    </div>
  );
}
