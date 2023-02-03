import React from 'react';
import './hero.scss';
import { useGlobalState } from 'react-nice-scroll';

interface propsTypes {
  windowWidth: number;
}

export const Hero = (props: propsTypes) => {
  const { windowWidth } = props;
  const [smoothScrollBar] = useGlobalState('smoothScrollBar');

  const handleScrollTo = (whitch: string) => {
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

  return (
    <section className="hero link">
      <div className="nameBox">
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
        <div className="wrapper">
          <h1>Szymon Gonerko</h1>
          <h2>
            <span>Frontend&nbsp;</span>
            developer
          </h2>
        </div>
        <svg>
          <text
            x="2%"
            y={windowWidth < 600 ? '38%' : windowWidth < 900 ? '45%' : '45%'}
            textAnchor="left"
          >
            Hello It's nice to {windowWidth < 600 ? 'see' : ''}
          </text>
          <text
            x="2%"
            y={windowWidth < 600 ? '65%' : windowWidth < 950 ? '51%' : '55%'}
            textAnchor="left"
          >
            {windowWidth < 600 ? 'you ;-)' : 'see you ;-)'}
          </text>
        </svg>
      </div>
    </section>
  );
};
