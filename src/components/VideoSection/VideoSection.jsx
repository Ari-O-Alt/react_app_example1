import React from 'react';
import Button from '../Button/Button';
import './VideoSection.css';
import '../../App.css';

const VideoSection = () => {
  return (
    <div className='videoContainer'>
      <video src='../../../../Videos/video.mp4' autoPlay loop muted />
      <h1>Adventure awaits</h1>
      <p>What are you waiting for?</p>
      <div className='videoButtons'>
        <Button className='vidButton' buttonStyle='btn_outline' buttonSize='btn_large'>
          GET STARTED
        </Button>

        <Button className='vidButton' buttonStyle='btn_primary' buttonSize='btn_large'>
          WATCH TRAILER <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
};

export default VideoSection;
