import React from "react";
import styles from "./video_item.module.css";

const VideoItem = (props) => (
  <li className={styles.container}>
    <div className={styles.video}>
      <img
        className={styles.thumbnail}
        src={props.video.snippet.thumbnails.medium.url}
        alt="thumbnails"
      />
      <div className={styles.info}>
        <h4 className={styles.title}>{props.video.snippet.title}</h4>
        <p className={styles.channel}>{props.video.snippet.channelTitle}</p>
      </div>
    </div>
  </li>
);

export default VideoItem;
