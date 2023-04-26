import React, { useState, useRef } from 'react';
import './hero.scss';
import { useGlobalState } from 'react-nice-scroll';
import { MdOutlineLightMode, MdOutlineNightlight } from 'react-icons/md';

interface props {
  darkmood: boolean;
  setDarkMood: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Hero = ({ darkmood, setDarkMood }: props) => {
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
              Current&nbsp;project
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
            <button
              aria-label="toggle theme website"
              className="toggle"
              onClick={() => setDarkMood((p) => !p)}
            >
              {!darkmood ? (
                <MdOutlineNightlight
                  style={{ transform: 'translate(0, 0.13vw)' }}
                />
              ) : (
                <MdOutlineLightMode
                  style={{ transform: 'translate(0, 0.13vw)' }}
                />
              )}
            </button>
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
          I'm a graduate of the IT CodersLab school with specialization in React
          and React Native. I cooperated with the backend and UX team on Scrum
          methodology. Incessantly participate at programming events and
          confferences. My passions is 3D object animations in Three.js
        </p>
      </header>
    </section>
  );
};
