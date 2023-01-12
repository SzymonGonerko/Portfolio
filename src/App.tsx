import React from 'react';
import './App.scss';
import { useRef } from 'react';
import { Scrollbar } from 'smooth-scrollbar-react';
import type { Scrollbar as BaseScrollbar } from 'smooth-scrollbar/scrollbar';

import { Hero } from '../src/components/Hero/Hero';
import { CurrentProject } from './components/CurrentProject/CurrentProject';
import { Repositories } from './components/Repositiories/Repositiories';
import { Skills } from './components/Skills/Skills';
import { MoreInfo } from './components/MoreInfo/MoreInfo';

const appStyles: {} = {
  maxHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
};
const AnimatedCursor = require('react-animated-cursor');

const App = () => {
  const scrollbar = useRef<BaseScrollbar | null>(null);
  return (
    <main className="App" style={appStyles}>
      <AnimatedCursor
        innerSize={15}
        outerSize={10}
        color="0, 0, 0"
        outerAlpha={0.2}
        trailingSpeed={1}
        innerScale={0.4}
        outerScale={5}
      />
      <Scrollbar
        damping={0.04}
        ref={scrollbar}
        plugins={{
          overscroll: {
            effect: 'glow',
          } as {},
        }}
      >
        <Hero />
        <CurrentProject />
        <Repositories />
        <Skills />
        <MoreInfo />
      </Scrollbar>
    </main>
  );
};

export default App;
