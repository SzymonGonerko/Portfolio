import React from 'react';
import './repositories.scss';
import 'react-nice-scroll/dist/styles.css';
import { VanillaDate } from './graficsLogo/VanillaDate/VanillaDate';
import { SGWorld } from './graficsLogo/SGWorld/SGWorld';
import { SunsetTypes } from './graficsLogo/SunsetTypes/SunsetTypes';
import { Flow2Code } from './graficsLogo/Flow2Code/Flow2Code';
import { OptimoDev } from './graficsLogo/OptimoDev/OptimoDev';

const repositories = [
  {
    name: 'Vanilla-Date',
    finished: '14.05.2022',
    liveLink: 'https://vanilla-date.netlify.app',
    library: 'Vanilla JS',
    logo: <VanillaDate />,
  },
  {
    name: 'SGWorld',
    finished: '11.07.2022',
    liveLink: 'https://sgworld.netlify.app',
    library: 'Three.js',
    logo: <SGWorld />,
  },
  {
    name: 'SunsetTypes',
    finished: '14.07.2022',
    liveLink: 'https://sunsettypes.netlify.app',
    library: 'TypeScript/Redux',
    logo: <SunsetTypes />,
  },
  {
    name: 'Flow2CodeGame',
    finished: '18.07.2022',
    liveLink: 'https://flow2codegame.netlify.app',
    library: 'Three.js',
    logo: <Flow2Code />,
  },
  {
    name: 'OptimoDevGame',
    finished: '27.07.2022',
    liveLink: 'https://optimodevgame.netlify.app',
    library: 'TS/PIXI',
    logo: <OptimoDev />,
  },
];

export const Repositories = () => {
  return (
    <section className="repo link">
      <div className="repoInfo">
        <header>
          <h1>Repositories</h1>
          <h2>My repositories on GitHub</h2>
        </header>
      </div>
      <div className="projects">
        <div className="wrapper">
          {repositories.map((el, i) => (
            <div key={i} className="card">
              <div className="gradient">{el.logo}</div>
              <div className="generalInfo">
                <div className="wrapperInfo">
                  <div className="topInfo">
                    <p className="date">{el.finished}</p>
                    <p className="library">{el.library}</p>
                  </div>
                  <p className="title">{el.name}</p>
                  <p className="description">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Deserunt et totam ipsum, sequi minima cumque dolorum beatae
                    pariatur soluta quod. Nihil cumque omnis repellat ducimus
                    molestiae veritatis, id necessitatibus odio?
                  </p>
                  <a target={'_blank'} href={el.liveLink}>
                    live
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
