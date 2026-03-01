import React from "react";
import { useGlobalState } from 'react-nice-scroll';
import './navigation.scss';

import { MdOutlineLightMode, MdOutlineNightlight } from 'react-icons/md';


interface props {
  darkmood: boolean;
  setDarkMood: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Navigation = ({ darkmood, setDarkMood }: props) => {
  const [smoothScrollBar] = useGlobalState('smoothScrollBar');

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
    return <> 
    <nav className="circleNav">
            <ul>
              <li>
                <button onClick={() => scrollTo('plantify')}>
                  Plantify
                </button>
              </li>
            <li>
                <button onClick={() => scrollTo('idbm')}>
                  IDBM
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('repo')}>Repositories</button>
              </li>
              <li>
                <button onClick={() => scrollTo('hero')} className={"logo"}></button>
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
          </nav></> 
}