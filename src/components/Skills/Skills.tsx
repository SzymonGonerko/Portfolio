import React, { useState } from 'react';
import './skills.scss';
import { Accordion } from './Accordion/Accordion';

const list = [
  {
    title: 'Technologies',
    classNames: ['technologies', 'growLi'],
    subNav: [
      'HTML5',
      'CSS3',
      'SCSS',
      'JavaScript',
      'TypeScript',
      'Python',
      'C#',
    ],
  },
  {
    title: 'Other Tools',
    classNames: ['otherTools'],
    subNav: [
      'React',
      'React Native',
      'Redux',
      '.NET',
      'Styled-Components',
      'Material-UI',
      'JSS',
      'Firebase',
      'Expo',
      'Blender',
      'Three.js',
      'PIXI.js',
      'Git',
      'Prettier',
      'Eslint',
      'Rest API',
    ],
  },
  {
    title: 'Methodologies',
    classNames: ['methodologies'],
    subNav: ['OOP', 'Procedural programming', 'Agile', 'Scrum'],
  },
  {
    title: 'IDE',
    classNames: ['ide'],
    subNav: [
      'WebStorm',
      'Visual Studio Code',
      'Visal Studio',
      'Gulp',
      'WebPack',
      'CMS',
      'Linux',
      'Windows',
    ],
  },
];

export const Skills = () => {
  return (
    <section className="skills link">
      <div className="skillsSetup">
        <Accordion list={list} />
      </div>
      <div className="skillsInfo">
        <header>
          <h1>Skillsset</h1>
          <h2 className="short">
            In my line of work, I use different tools depends of project
            purpose. Graphics 3D objects, live chat, android app, games, data
            users... and many more.
          </h2>
        </header>
      </div>
    </section>
  );
};
