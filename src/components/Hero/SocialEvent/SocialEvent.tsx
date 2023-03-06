import React, { useEffect, useRef, useState } from 'react';
import './socialEvent.scss';
import src from '../../../assets/MeetUp.mp4';

interface props {
  videoEl: any;
}

export const SocialEvent = () => {
  const videoEl = useRef<HTMLVideoElement>(null);

  return (
    <>
      <div className="circleVideo">
        <video
          src={src}
          ref={videoEl}
          autoPlay={true}
          style={{ height: '100%' }}
        />
      </div>
    </>
  );
};
