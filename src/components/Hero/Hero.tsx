import React from 'react';
import './hero.scss';

interface propsTypes {
  windowWidth: number;
}

export const Hero = (props: propsTypes) => {
  const { windowWidth } = props;
  return (
    <section className="hero">
      <div className="nameBox">
        <div className="wrapper">
          <h1>Szymon Gonerko</h1>
          <h2>
            <strong>Frontend&nbsp;</strong>
            developer
          </h2>
        </div>

        <nav>
          <ul>
            <li>
              <a>
                Sekcja <span>01</span>
              </a>
            </li>
            <li>
              <a>
                Sekcja <span>02</span>
              </a>
            </li>
            <li>
              <a>
                Sekcja <span>03</span>
              </a>
            </li>
            <li>
              <a>
                Sekcja <span>04</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="helloBox">
        <svg>
          <text x="2%" y={windowWidth < 600 ? '38%' : '45%'} textAnchor="left">
            Hello It's nice to
          </text>
          <text x="2%" y={windowWidth < 600 ? '60%' : '55%'} textAnchor="left">
            see you ;-)
          </text>
        </svg>
      </div>
    </section>
  );
};
