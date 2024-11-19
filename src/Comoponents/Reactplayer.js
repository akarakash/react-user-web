import React from 'react'
import ReactPlayer from 'react-player';

function Reactplayer() {
  return (
    <div>

    <div>
       <ReactPlayer 
        url="https://www.youtube.com/embed/6xWTbwgX_X4?si=lFdhnqUaF8QxlVDH"  // Video URL (can be a YouTube link, Vimeo, etc.)
        playing={true} // Automatically play the video
        controls={true} // Show player controls (play, pause, volume, etc.)
        width="100%"  // Set the width of the player
        height="500px" // Set the height of the player
      />
    </div>

    </div>
  )
}

export default Reactplayer