import React from "react";

const VideoDetail = ({ video }) => (
  <>
    <div>
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
    </div>
    <div>{console.log(video)}</div>
  </>
);

export default VideoDetail;
