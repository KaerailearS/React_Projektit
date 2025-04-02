export default function VideoPlayer({ videoURL, posterImage }) {
  return (
    <div className="video-player">
      <video
        controls
        autoPlay
        muted
        preload="metadata"
        poster={posterImage}
        aria-label="Video player"
        src={videoURL}
        type="video/mp4"
      ></video>
    </div>
  );
}
