import VideoPlayer from "./components/VideoPlayer";
import SelectOptions from "./components/SelectOptions";
import { useState } from "react";

const videos = {
  deer: "https://s3.amazonaws.com/codecademy-content/courses/React/react_video-fast.mp4",
  snail:
    "https://s3.amazonaws.com/codecademy-content/courses/React/react_video-slow.mp4",
  cat: "https://s3.amazonaws.com/codecademy-content/courses/React/react_video-cute.mp4",
  spider:
    "https://s3.amazonaws.com/codecademy-content/courses/React/react_video-eek.mp4",
};

const videoTitles = Object.keys(videos);

export default function App() {
  const [currentVideo, setCurrentVideo] = useState(videos.cat);

  function onSelectVideo(video) {
    const videoURL = videos[video];
    setCurrentVideo(videoURL);
  }

  return (
    <div>
      <h1>Project 6: Video Player</h1>
      <SelectOptions onSelectVideo={onSelectVideo} videoValues={videoTitles} />
      <VideoPlayer videoURL={currentVideo} />
    </div>
  );
}
