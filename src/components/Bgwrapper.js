import React from "react";

export default function Bgwrapper({ children }) {
  return (
    <div className="h-screen overflow-x-hidden">
      <div className="relative w-full max-w-lg">
        <div className="absolute bg-purple-300 rounded-full blur-3xl opacity-70 -top-10 -left-10 md:w-96 md:h-96 w-60 h-60 mix-blend-multiply filter animate-blob"></div>
        <div className="absolute bg-pink-300 rounded-full blur-3xl opacity-70 top-60 left-20 md:w-96 md:h-96 w-60 h-60 mix-blend-multiply filter animate-blob animation-delay-2000"></div>
        <div className="absolute w-40 h-40 bg-green-300 rounded-full blur-3xl opacity-70 top-16 -right-4 md:w-72 md:h-72 mix-blend-multiply filter animate-blob animation-delay-5000"></div>
      </div>
      {children}
      <div className="relative w-full max-w-lg ml-auto">
        <div className="absolute top-0 left-0 bg-purple-300 rounded-full opacity-70 w-96 h-96 mix-blend-multiply filter animate-blob blur-3xl"></div>
        <div className="absolute bg-pink-300 rounded-full opacity-70 top-60 -left-20 w-80 h-80 mix-blend-multiply filter animate-blob animation-delay-2000 blur-3xl"></div>
        <div className="absolute w-40 h-40 bg-green-300 rounded-full opacity-70 top-32 -left-40 mix-blend-multiply filter animate-blob animation-delay-5000 blur-3xl"></div>
      </div>
    </div>
  );
}
