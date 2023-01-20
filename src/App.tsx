import React, { useEffect, useRef, useState } from 'react';
import './App.scss';
import {
  ScrollContainer,
  FixedElement,
  useGlobalState,
} from 'react-nice-scroll';
import 'react-nice-scroll/dist/styles.css';

import { Hero } from '../src/components/Hero/Hero';
import { CurrentProject } from './components/CurrentProject/CurrentProject';
import { Repositories } from './components/Repositiories/Repositiories';
import { Skills } from './components/Skills/Skills';
import { MoreInfo } from './components/MoreInfo/MoreInfo';

const AnimatedCursor = require('react-animated-cursor');

const App = () => {
  const [smoothScrollBar] = useGlobalState('smoothScrollBar');
  const [scroller] = useGlobalState('container');
  const [windowSize, setWindowSize] = useState<number[]>([
    window.innerWidth,
    window.innerHeight,
  ]);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize([window.innerWidth, window.innerHeight]);
    };
    window.addEventListener('resize', handleWindowResize);
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  });

  const scrollToTop = () => {
      smoothScrollBar?.scrollTo(0, 0, 1000)
      const hero = document.querySelector('.hero') as any
      console.log(smoothScrollBar?.isVisible(hero))
  }

  return (
    <main className="App">
      {windowSize[0] > 600 && (
        <AnimatedCursor
          innerSize={12}
          outerSize={12}
          color="0, 0, 0"
          outerAlpha={0.2}
          trailingSpeed={1}
          innerScale={1}
          outerScale={0}
        />
      )}
      <ScrollContainer
        activeSmoothScrollOnTouchDevice={false}
        damping={0.05}
        thumbMinSize={10}
      >
        <Hero windowWidth={windowSize[0]} />
        <CurrentProject />
        <Repositories />
        <Skills />
        <MoreInfo />
      </ScrollContainer>
    </main>
  );
};

export default App;
