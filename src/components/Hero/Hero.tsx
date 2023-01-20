import React from 'react';
import './hero.scss';
import { ScrollContainer, useGlobalState } from 'react-nice-scroll';

interface propsTypes {
  windowWidth: number;
}

export const Hero = (props: propsTypes) => {
  const { windowWidth } = props;
  const [smoothScrollBar] = useGlobalState('smoothScrollBar');

  const handleScrollTo = (whitch: string) => {
    if (smoothScrollBar) {
      const links = document.querySelectorAll(
        '.link'
      ) as unknown as HTMLElement[];
      const filteredLinks = [...links].filter((element: any) =>
        element.classList.contains(whitch)
      );
      smoothScrollBar.scrollIntoView(filteredLinks[0]);
    }
  };

  return (
    <section className="hero link">
      <div className="nameBox">
        <div className="wrapper">
          <h1>Szymon Gonerko</h1>
          <h2>
            <span>Frontend&nbsp;</span>
            developer
          </h2>
        </div>

        <nav>
          <ul>
            <li>
              <button onClick={() => handleScrollTo('currentProject')}>
                Section<span>01</span>
              </button>
            </li>
            <li>
              <button onClick={() => handleScrollTo('repo')}>
                Section <span>02</span>
              </button>
            </li>
            <li>
              <button onClick={() => handleScrollTo('skills')}>
                Section <span>03</span>
              </button>
            </li>
            <li>
              <button onClick={() => handleScrollTo('moreInfo')}>
                Section <span>04</span>
              </button>
            </li>
          </ul>
        </nav>
      </div>

      <div className="helloBox">
        <svg>
          <text
            x="2%"
            y={windowWidth < 600 ? '38%' : windowWidth < 900 ? '45%' : '45%'}
            textAnchor="left"
          >
            Hello It's nice to
          </text>
          <text
            x="2%"
            y={windowWidth < 600 ? '70%' : windowWidth < 950 ? '51%' : '55%'}
            textAnchor="left"
          >
            see you ;-)
          </text>
        </svg>
      </div>
    </section>
  );
};
