import React, { useEffect, useRef } from 'react';
import './repositories.scss';
import 'react-nice-scroll/dist/styles.css';
import { ScrollContainer } from 'react-nice-scroll';

import { Card } from './Card/Card';
import { VanillaDate } from './graficsLogo/VanillaDate/VanillaDate';
import { SGWorld } from './graficsLogo/SGWorld/SGWorld';
import { SunsetTypes } from './graficsLogo/SunsetTypes/SunsetTypes';
import { Flow2Code } from './graficsLogo/Flow2Code/Flow2Code';
import { OptimoDev } from './graficsLogo/OptimoDev/OptimoDev';

const repositories = [
  {
    name: 'Vanilla-Date',
    finished: '14.05.2022',
    library: 'Vanilla JS',
    logo: <VanillaDate live={'https://vanilla-date.netlify.app'}  />,
    github: 'https://github.com/SzymonGonerko/Vanilla-Date',
    description: `Dating app, written in a React library. Placed on a Firebase with user authentication and real time chat. Design inspired by the movie "The Shape of Water" dir. Guillermo del Toro`,
  },
  {
    name: 'SGWorld',
    finished: '11.07.2022',
    library: 'Three.js',
    logo: <SGWorld live={'https://sgworld.netlify.app'}  />,
    github: 'https://github.com/SzymonGonerko/SGWorld',
    description: `Reflection of my living place. Project 3D include my myliving place, inspirations and real exissting things`
  },
  {
    name: 'SunsetTypes',
    finished: '14.07.2022',
    library: 'TypeScript/Redux',
    logo: <SunsetTypes live={'https://sunsettypes.netlify.app'} />,
    github: 'https://github.com/SzymonGonerko/Sunset-Types',
    description: `An experimental app includes the toDoList and calculator on 3D space. Compontnts are placed in sunset scenery. It's up to You whitch sunset type you choose ;)`
  },
  {
    name: 'Flow2CodeGame',
    finished: '18.07.2022',
    library: 'Three.js',
    logo: <Flow2Code live={'https://flow2codegame.netlify.app'} />,
    github: 'https://github.com/SzymonGonerko/Flow2CodeGame',
    description: `Recruiment game for development company from Poznań. Player can shoot by cannon using by special GUI panel.`
  },
  {
    name: 'OptimoDevGame',
    finished: '27.07.2022',
    library: 'TS/PIXI',
    logo: <OptimoDev live={'https://optimodevgame.netlify.app'}  />,
    github: 'https://github.com/SzymonGonerko/Optimo-Development-Game',
    description: `Game creted for comany from Łódź. The main goal of game is catch the most food as possible. Game stylized on 90's`
  },
];

interface props {
  windowWidth: number
}

export const Repositories = ({ windowWidth} : props) => {
  const projects = useRef<any>(null)


  useEffect(() => {
    projects.current.scroll(projects.current.offsetWidth/2, 0)
  }, [])


const desktopLayout = <>
  <ScrollContainer>
    <div className="wrapper">
      {repositories.map((el, i) => (
        <Card github={el.github} key={i} description={el.description} logo={el.logo} finished={el.finished} library={el.library} name={el.name}/>
      ))}
    </div>
  </ScrollContainer>
</>

const mobileLayout = <>
      <div className="wrapper">
        {repositories.map((el, i) => (
          <Card github={el.github} key={i} description={el.description} logo={el.logo} finished={el.finished} library={el.library} name={el.name} />
        ))}
      </div>
</>



  return (
    <section className="repo link">
      <div className="repoInfo">
        <header>
          <h1>Repositories</h1>
          <h2>My repositories on GitHub</h2>
        </header>
      </div>
      <div ref={projects} className="projects">
        {windowWidth > 600 ? desktopLayout: mobileLayout}
      </div>
    </section>
  );
};
