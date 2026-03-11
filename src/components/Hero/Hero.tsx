import React, { useState } from 'react';
import './hero.scss';
import { SocialEvent } from './SocialEvent/SocialEvent';


export const Hero = () => {
  const [showEvent, setShowEvent] = useState(false);


  const onHandleClick = () => {
    setShowEvent(true);
    const line = document.querySelector(
      '.description span .line'
    ) as unknown as HTMLElement;
    line.style.width = '255%';
  };

  const onMouseLeave = () => {
    const line = document.querySelector(
      '.description span .line'
    ) as unknown as HTMLElement;
    line.style.width = '100%';
    setShowEvent(false);
  };

  return (
    <section className="hero link">
      <header className="generalInfo">
        <div className="photo" />
        <div className="wrapper">
          <h1>Szymon Gonerko</h1>
          <h2>Engineer developer & IT specialist</h2>
          <p className="description">
            Developer and IT specialist focused on React and mobile application development using React Native. Regularly participates in{' '}
            <span
              className="event"
              onClick={onHandleClick}
              onMouseLeave={onMouseLeave}
            >
              programming events <span className="line" />
            </span>{' '}
            and tech conferences to expand knowledge and stay up to date with industry trends.
          </p>
        </div>
        {showEvent && <SocialEvent />}
      </header>
    </section>
  );
};
