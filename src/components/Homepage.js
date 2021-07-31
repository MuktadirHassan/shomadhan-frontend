import React from "react";
import "./Homepage.css";
import Navbar from "./Navbar";
export default function Homepage() {
  return (
    <div className="container px-2 mx-auto">
      <Navbar />
      <main className="max-w-3xl mx-auto">
        <h1 className="py-10 font-bold text-8xl text-animate">Shomadhan</h1>
      </main>
    </div>
  );
}
