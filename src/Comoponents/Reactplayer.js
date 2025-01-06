import React, { useState } from "react";
import ReactPlayer from "react-player";

function Reactplayer() {
  const [play, setPlay] = useState(false);

  return (
    <div>
      <div>
        <ReactPlayer
          url="https://www.youtube.com/embed/6xWTbwgX_X4?si=lFdhnqUaF8QxlVDH" // Video URL
          playing={play} // Control playback using the play state
          controls={true} // Show player controls (play, pause, volume, etc.)
          width="100%" // Set the width of the player
          height="500px" // Set the height of the player
          onPlay={() => setPlay(true)} // Set play state to true when the video starts
          onPause={() => setPlay(false)} // Set play state to false when the video is paused
        />
      </div>
    </div>
  );
}

export default Reactplayer;
