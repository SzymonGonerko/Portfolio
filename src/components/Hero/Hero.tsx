import React, { useState } from 'react';
import './hero.scss';
import { useGlobalState } from 'react-nice-scroll';
import { MdOutlineLightMode, MdOutlineNightlight } from 'react-icons/md';
import { SocialEvent } from './SocialEvent/SocialEvent';

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
    line.style.width = '245%';
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
      {/* <nav className="circleNav">
        <ul>
          <li>
            <button onClick={() => scrollTo('plantify')}>
              Plantify
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
      </nav> */}

      <header className="generalInfo">
        <div className="photo" />
        <div className="wrapper">
          <h1>Szymon Gonerko</h1>
          <h2>Engineer developer & IT specialist</h2>
          <p className="description">
            Developer and IT specialist focused on React and mobile application development using React Native. Graduate of IT CodersLab. Since 2024, an IT engineering student. Experience working with backend and UX teams in Agile environments. Applies Scrum methodology to deliver high-quality solutions. Regularly participates in{' '}
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
        <div className="sign" />
      </header>
    </section>
  );
};
