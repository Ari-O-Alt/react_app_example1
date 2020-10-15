import React from 'react';
import Button from '../Button/Button';
import './VideoSection.css';
import '../../App.css';

const VideoSection = () => {
  return (
    <div className='heroContainer'>
      <video src='./Videos/video-2.mp4' autoPlay loop muted />
      <h1>Adventure awaits</h1>
      <p>What are you waiting for?</p>
      <div className='videoButton'>
        <Button className='vidButton' buttonStyle='btn_outline' buttonSize='btn_large'>
          GET STARTED
        </Button>
      </div>
      <Button className='vidButton' buttonStyle='btn_primary' buttonSize='btn_large'>
        WATCH TRAILER <i className='far fa-play-cirlce' />
      </Button>
    </div>
  );
};

export default VideoSection;
