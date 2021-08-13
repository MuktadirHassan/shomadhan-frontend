import React from "react";

export default function Bgwrapper({ children }) {
  const styles = {
    zIndex: "-1",
  };
  return (
    <div className="h-screen">
      <div style={styles} className="relative w-full max-w-lg">
        <div className="absolute bg-purple-300 rounded-full opacity-50 blur-3xl -top-10 -left-10 md:w-96 md:h-96 w-60 h-60 mix-blend-multiply filter animate-blob"></div>
        <div className="absolute bg-pink-300 rounded-full opacity-50 blur-3xl top-60 left-20 md:w-96 md:h-96 w-60 h-60 mix-blend-multiply filter animate-blob animation-delay-2000"></div>
        <div className="absolute w-40 h-40 bg-green-300 rounded-full opacity-50 blur-3xl top-16 -right-4 md:w-72 md:h-72 mix-blend-multiply filter animate-blob animation-delay-5000"></div>
      </div>
      {children}
    </div>
  );
}
