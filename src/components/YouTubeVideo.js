import React from "react";

export default function YouTubeVideo({videoId, title}) {
  const fullUrl = `https://www.youtube.com/embed/${videoId}`
  return (
    <iframe width="384" height="216" src={fullUrl} title={title}
            style={{backgroundColor: "black"}}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
  );
}
