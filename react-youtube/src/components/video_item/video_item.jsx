import React from "react";
import "./video_item.css";

const VideoItem = (props) => (
  <li className="item">
    <img
      className="item-thumbnails"
      src={props.video.snippet.thumbnails.default.url}
      alt="thumbnails"
    />
    <div>
      <h3 className="item-title">{props.video.snippet.title}</h3>
      <span className="item-channel">{props.video.snippet.channelTitle}</span>
    </div>
  </li>
);

export default VideoItem;
