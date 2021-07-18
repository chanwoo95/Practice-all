import React from "react";
import styles from "./video_item.module.css";

const VideoItem = ({ video, onVideoClick }) => (
  <li className={styles.container} onClick={() => onVideoClick(video)}>
    <div className={styles.video}>
      <img
        className={styles.thumbnail}
        src={video.snippet.thumbnails.medium.url}
        alt="thumbnails"
      />
      <div className={styles.info}>
        <h4 className={styles.title}>{video.snippet.title}</h4>
        <p className={styles.channel}>{video.snippet.channelTitle}</p>
      </div>
    </div>
  </li>
);

export default VideoItem;
