import "./VideoItem.css";
import react from "react";

const VideoItem = (props) => {
  const { video, onVideoSelect } = props;
  return (
    <div onClick={() => onVideoSelect(video)} className="video-item item">
      <img className="ui image" src={video.snippet.thumbnails.medium.url} />
      <div className="content">
        <div className="header"> {video.snippet.title}</div>
      </div>
    </div>
  );
};

export default VideoItem;
