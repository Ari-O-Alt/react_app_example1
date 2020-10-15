import React from 'react';

const VideoSection = () => {
  return (
    <div className='heroContainer'>
      <video src='./Videos/video-2.mp4' autoPlay loop muted />
      <h1>Adventure awaits</h1>
      <p>What are you waiting for?</p>
    </div>
  );
};

export default VideoSection;
