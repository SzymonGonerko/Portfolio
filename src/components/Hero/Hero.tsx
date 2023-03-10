import React, { useState, useRef } from 'react';
import './hero.scss';
import { useGlobalState } from 'react-nice-scroll';
import { SocialEvent } from './SocialEvent/SocialEvent';

export const Hero = () => {
  const [smoothScrollBar] = useGlobalState('smoothScrollBar');
  const [showEvent, setShowEvent] = useState(false);

  const scrollTo = (whitch: string) => {
    const links = document.querySelectorAll(
      '.link'
    ) as unknown as HTMLElement[];
    const filteredLinks = [...links].filter((element: HTMLElement) =>
      element.classList.contains(whitch)
    );
    if (smoothScrollBar) {
      smoothScrollBar.scrollIntoView(filteredLinks[0]);
    } else {
      filteredLinks[0].scrollIntoView({ behavior: 'smooth' });
    }
  };

  const onHandleClick = () => {
    setShowEvent(true);
    const line = document.querySelector(
      '.description span .line'
    ) as unknown as HTMLElement;
    line.style.width = '213%';
    line.style.height = '2px';
  };

  const onMouseLeave = () => {
    const line = document.querySelector(
      '.description span .line'
    ) as unknown as HTMLElement;
    line.style.width = '100%';
    line.style.height = '1px';
    setShowEvent(false);
  };

  return (
    <section className="hero link">
      <nav className="circleNav">
        <ul>
          <li>
            <button onClick={() => scrollTo('currentProject')}>
              CurrentProject
            </button>
          </li>
          <li>
            <button onClick={() => scrollTo('repo')}>Repositories</button>
          </li>
          <li>
            <button onClick={() => scrollTo('skills')}>Skillsset</button>
          </li>
          <li>
            <button onClick={() => scrollTo('moreInfo')}>Contact</button>
          </li>
          <li>
            <div className="myself" />
          </li>
        </ul>
      </nav>

      <header className="generalInfo">
        <h1>Szymon Gonerko</h1>
        <div className="info">
          <h2>Frontend Developer</h2>
          <h3>Based in Wrocław</h3>
        </div>
        <p className="description">
          I'm graduate of the IT CodersLab school with specialization in React
          and React Native. On the last project I had pleasure cooperete with 7
          persons team in sprintlog scrum system. I incessantly participate at{' '}
          <span
            className="event"
            onClick={onHandleClick}
            onMouseLeave={onMouseLeave}
          >
            programming events. <span className="line" />
          </span>
          When I was writing my dyploma app, I noticed how beautiful generative
          art can be. I follow this path. I'm ready to work with you on
          commercial projects.
        </p>
        {showEvent && <SocialEvent />}
      </header>
    </section>
  );
};
