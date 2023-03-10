import React, { useState, useRef, FormEvent, BaseSyntheticEvent } from 'react';
import './basicInfo.scss';

export const BasicInfo = () => {
  const devJsSummit = 'https://app.evenea.pl/event/devjssummit2023/';
  const meetJs = 'https://www.meetup.com/meet-js-wroclaw/events/291213435/';
  return (
    <div className="basicInfo">
      <header>
        <h1>
          <span>Hit</span> me up!
        </h1>
        <h2>If You have some questions for me, let me know about it !</h2>
      </header>
      <div className="events">
        <h3>or catch me at...</h3>
        <aside>
          <a className="meetJs" href={meetJs} target={'_blank'} />
          <a className="devJsSummit" href={devJsSummit} target={'_blank'} />
        </aside>
      </div>
    </div>
  );
};
