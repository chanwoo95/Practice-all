import React from "react";
import styles from "./video_detail.module.css";

const VideoDetail = ({ video }) => (
  <section className={styles.section}>
    <iframe
      title="video"
      id="ytplayer"
      type="text/html"
      width="720"
      height="405"
      src={`https://www.youtube.com/embed/${video.id}`}
      frameBorder="0"
      allowFullScreen
    ></iframe>
    <h2>{video.snippet.title}</h2>
    <pre>{video.snippet.description}</pre>
  </section>
);

export default VideoDetail;
