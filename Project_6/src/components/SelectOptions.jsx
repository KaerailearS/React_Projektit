export default function SelectOptions({ onSelectVideo, videoValues }) {
  return (
    <form>
      {videoValues.map((value, i) => (
        <div className="video-inputs" key={i}>
          <input
            type="radio"
            id={`video-${i}`}
            name="video"
            value={value}
            onChange={(event) => onSelectVideo(event.target.value)}
          />
          <label htmlFor={`video-${i}`}>{value}</label>{" "}
        </div>
      ))}
    </form>
  );
}
