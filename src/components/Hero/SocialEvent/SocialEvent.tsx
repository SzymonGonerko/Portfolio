import React, { useRef } from 'react';
import './socialEvent.scss';
import src from '../../../assets/MeetUp.mp4';
import poster from '../../../assets/poster.jpg';

export const SocialEvent = () => {
  const videoEl = useRef<HTMLVideoElement>(null);

  return (
    <>
      <div className="circleVideo">
        <video
          src={src}
          ref={videoEl}
          autoPlay={true}
          style={{ height: '100%', borderRadius: '10px' }}
        />
        <img src={poster} alt="codingMeetingEvent" className="poster" />
      </div>
    </>
  );
};
