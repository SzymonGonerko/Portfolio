import React, { useEffect, useState } from 'react';
import './App.scss';
import {
  ScrollContainer,
  useGlobalState,
} from 'react-nice-scroll';
import 'react-nice-scroll/dist/styles.css';
import { FaChevronUp } from 'react-icons/fa';

import { Hero } from '../src/components/Hero/Hero';
import { CurrentProject } from './components/CurrentProject/CurrentProject';
import { Repositories } from './components/Repositiories/Repositiories';
import { Skills } from './components/Skills/Skills';
import { MoreInfo } from './components/MoreInfo/MoreInfo';

const AnimatedCursor = require('react-animated-cursor');


const App = () => {
  const [smoothScrollBar] = useGlobalState('smoothScrollBar');
  const [showTopArrow, setShowTopArrow] = useState(false);
  const hero = document.querySelector('.hero') as HTMLElement;
  const [windowSize, setWindowSize] = useState<number[]>([
    window.innerWidth,
    window.innerHeight,
  ]);

  const desktopLayout = <>
  <AnimatedCursor
    innerSize={10}
    outerSize={7}
    color="0, 0, 0"
    outerAlpha={0.2}
    trailingSpeed={1}
    innerScale={0.4}
    outerScale={5}
    clickables={[
      'a', 'button',
    ]}
  />
  <ScrollContainer
    damping={0.07}
    thumbMinSize={10}
>
  <Hero windowWidth={windowSize[0]} />
  <CurrentProject />
  <Repositories windowWidth={windowSize[0]}/>
  <Skills />
  <MoreInfo />
</ScrollContainer></>;

const mobileLayout = <>
<Hero windowWidth={windowSize[0]} />
<CurrentProject />
<Repositories windowWidth={windowSize[0]} />
<Skills />
<MoreInfo />
</>

  const handleWindowResize = () => {
    setWindowSize([window.innerWidth, window.innerHeight]);
  };
  const nativeSrollTo = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const logMovement = () => {
    smoothScrollBar?.isVisible(hero)
      ? setShowTopArrow(false)
      : setShowTopArrow(true);
    if (smoothScrollBar === undefined) {
      const arrow = document.getElementById('topArrow') as HTMLDivElement;
      arrow?.addEventListener('click', nativeSrollTo);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize);
    document.addEventListener('mousemove', logMovement);
    document.addEventListener('touchstart', logMovement);
    return () => {
      window.removeEventListener('resize', handleWindowResize);
      document.removeEventListener('mousemove', logMovement);
      document.removeEventListener('touchstart', logMovement);
    };
  });

  const scrollToTop = () => {
    smoothScrollBar?.scrollTo(0, 0, 1000);
  };

  return (
    <main className="App">
      {windowSize[0] > 600 ? desktopLayout : mobileLayout}
      {showTopArrow && (
        <div id="topArrow" onClick={scrollToTop}>
          <FaChevronUp />
        </div>
      )}
    </main>
  );
};

export default App;
