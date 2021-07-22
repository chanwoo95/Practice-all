import React from "react";
import styles from "./video_detail.module.css";

const VideoDetail = ({ video }) => (
  <section className={styles.section}>
    <iframe
      title="video"
      className={styles.video}
      type="text/html"
      width="800px"
      height="500px"
      src={`https://www.youtube.com/embed/${video.id}`}
      frameBorder="0"
      allowFullScreen
    ></iframe>
    <h2>{video.snippet.title}</h2>
    <pre className={styles.pre}>{video.snippet.description}</pre>
  </section>
);

export default VideoDetail;
