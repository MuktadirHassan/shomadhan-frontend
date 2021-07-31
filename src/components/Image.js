import React from "react";

// *** Usage
// <Image height="9" width="16" src={image} alt="alt-text" />

export default function Image({ src, alt = "...", height = 10, width = 16 }) {
  return (
    <div className={`relative aspect-w-${width} aspect-h-${height}`}>
      <img src={src} alt={alt} className={`object-cover`} />
    </div>
  );
}
