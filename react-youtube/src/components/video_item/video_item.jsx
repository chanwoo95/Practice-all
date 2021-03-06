import React, { memo } from "react";
import styles from "./video_item.module.css";

const VideoItem = memo(({ video, onVideoClick, display }) => {
  const displayType = display === "list" ? styles.list : styles.grid;
  return (
    <li
      className={`${styles.container} ${displayType}`}
      onClick={() => onVideoClick(video)}
    >
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
});

export default VideoItem;
