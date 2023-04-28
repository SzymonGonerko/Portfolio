import React, { useEffect, useRef } from 'react';
import './repositories.scss';
import 'react-nice-scroll/dist/styles.css';
import { ScrollContainer } from 'react-nice-scroll';

import { Card } from './Card/Card';
import { BsGithub } from 'react-icons/bs';

const repositories = [
  {
    name: 'Vanilla-Date',
    finished: '14.05.2022',
    library: 'Vanilla JS',
    live: 'https://vanilla-date.netlify.app',
    github: 'https://github.com/SzymonGonerko/Vanilla-Date',
    description: `Dating app, written in a React library. Placed on a Firebase with user authentication and real time chat.`,
  },
  {
    name: 'SGWorld',
    finished: '11.07.2022',
    library: 'Three.js',
    live: 'https://sgworld.netlify.app',
    github: 'https://github.com/SzymonGonerko/SGWorld',
    description: `Virtual reflection of my livingplace. Project 3D include my inspirations, phanthasis and real objects crated on Blender. `,
  },
  {
    name: 'SunsetTypes',
    finished: '14.07.2022',
    library: 'TypeScript/Redux',
    live: 'https://sunsettypes.netlify.app',
    github: 'https://github.com/SzymonGonerko/Sunset-Types',
    description: `An experimental app includes the todolist and calculator on 3D space. Components were placed in sunset scenery.`,
  },
  {
    name: 'Flow2CodeGame',
    finished: '18.07.2022',
    library: 'Three.js',
    live: 'https://flow2codegame.netlify.app',
    github: 'https://github.com/SzymonGonerko/Flow2CodeGame',
    description: `Recruiment game for development company from Poznań. Player can shoot by cannon using by special GUI panel.`,
  },
  {
    name: 'OptimoDevGame',
    finished: '27.07.2022',
    library: 'TS/PIXI',
    live: 'https://optimodevgame.netlify.app',
    github: 'https://github.com/SzymonGonerko/Optimo-Development-Game',
    description: `Game creted for comany from Łódź. The main goal of game is catch the most food as possible. Game stylized on 90's`,
  },
];

interface props {
  windowWidth: number;
}

export const Repositories = ({ windowWidth }: props) => {
  const projects = useRef<any>(null);
  const gitHub = 'https://github.com/SzymonGonerko';

  useEffect(() => {
    projects.current.scroll(projects.current.offsetWidth / 2, 0);
  }, []);

  const desktopLayout = (
    <>
      <ScrollContainer>
        <div className="wrapper">
          {repositories.map((el, i) => (
            <Card
              github={el.github}
              key={i}
              description={el.description}
              live={el.live}
              finished={el.finished}
              library={el.library}
              name={el.name}
            />
          ))}
        </div>
      </ScrollContainer>
    </>
  );

  const mobileLayout = (
    <>
      <div className="wrapper">
        {repositories.map((el, i) => (
          <Card
            github={el.github}
            key={i}
            description={el.description}
            live={el.live}
            finished={el.finished}
            library={el.library}
            name={el.name}
          />
        ))}
      </div>
    </>
  );

  return (
    <section className="repo link">
      <div className="repoInfo">
        <header>
          <h1>Repositories</h1>
          <h2 className="short">
            Experimental projects using different technologies and environments.
            Two of them were recruiment game for companies from Poznań and Łódź.
          </h2>
          <a className="githubLink" target={'_blank'} href={gitHub}>
            Check <strong>GitHub</strong>
            <BsGithub />
          </a>
        </header>
      </div>
      <div ref={projects} className="projects">
        {windowWidth > 600 ? desktopLayout : mobileLayout}
      </div>
    </section>
  );
};
