import React from "react";
import ReactPlayer from "react-player";

function VideoPlayer() {
  return (
    <ReactPlayer
      url={
        "https://firebasestorage.googleapis.com/v0/b/rapid-clipz.appspot.com/o/The%20Debate%20Over%20Reintroducing%20Jaguars%20to%20North%20America%20%5Bm2LThhFmnXo%5D.mp4?alt=media&token=7d531dae-5fe7-4a1f-8d15-013c217287ff"
      }
      controls
      width="640px"
      height="360px"
    />
  );
}

export default VideoPlayer;
