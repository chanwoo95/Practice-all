import React, { useEffect, useState } from "react";
import styles from "./app.module.css";
import VideoList from "./components/video_list/video_list";
import SearchHeader from "./components/search_header/search_header";
import VideoDetail from "./components/video_detail/video_detail";

function App({ youtube }) {
  const [videos, setVideos] = useState([]);
  const [selectedVideos, setSelectedVideos] = useState([]);

  const selectVideos = (video) => {
    setSelectedVideos(video);
  };

  const search = (query) => {
    youtube
      .search(query) //
      .then((videos) => setVideos(videos));
  };

  useEffect(() => {
    youtube
      .mostPopular() //
      .then((videos) => setVideos(videos));
  }, [youtube]);

  return (
    <div className={styles.app}>
      <SearchHeader onSearch={search} />
      <div className={styles.detail}>
        {selectedVideos && <VideoDetail video={selectedVideos} />}
        <VideoList videos={videos} onVideoClick={selectVideos} />
      </div>
    </div>
  );
}

export default App;
