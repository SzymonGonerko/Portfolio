import React, { useEffect, useRef, useState } from 'react';
import './App.scss';
import { ScrollContainer, useGlobalState } from 'react-nice-scroll';
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
  const [darkmood, setDarkMood] = useState(false);
  const myapp = useRef() as any
  const [windowSize, setWindowSize] = useState<number[]>([
    window.innerWidth,
    window.innerHeight,
  ]);

  const desktopLayout = (
    <>
      <AnimatedCursor
        innerSize={10}
        outerSize={7}
        color={darkmood ? '255, 255, 255' : '0, 0, 0'}
        outerAlpha={0.2}
        trailingSpeed={1}
        innerScale={0.4}
        outerScale={5}
        clickables={[
          'a',
          'button',
          'p.title',
          'span.event',
          'input',
          'textarea',
          'div.MuiInputBase-root',
        ]}
      />
      <ScrollContainer damping={0.07} thumbMinSize={10}>
        <Hero darkmood={darkmood} setDarkMood={setDarkMood} />
        <CurrentProject />
        <Repositories windowWidth={windowSize[0]} />
        <Skills />
        <MoreInfo darkMood={darkmood} />
      </ScrollContainer>
    </>
  );

  const mobileLayout = (
    <>
      <Hero darkmood={darkmood} setDarkMood={setDarkMood}  />
      <CurrentProject />
      <Repositories windowWidth={windowSize[0]} />
      <Skills />
      <MoreInfo darkMood={darkmood} />
    </>
  );

  const handleWindowResize = () => {
    setWindowSize([window.innerWidth, window.innerHeight]);
  };

  const changeColor = (color : string) => {
    if (color === `"dark"`) {
      const app = document.querySelector(".App")
      app?.classList.add("darkmood")
      setDarkMood(true)
    } else {
      setDarkMood(false)
    }
  }

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize);
    setTimeout(() => {
      let colorScheme = getComputedStyle(document.body,':after').content;
      console.log(colorScheme)
      changeColor(colorScheme)
    }, 1000)
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  const scrollToTop = () => {
    if (smoothScrollBar) {
      smoothScrollBar.scrollTo(0, 0, 1000);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <main ref={myapp} className={`App ${darkmood? "darkmood": ''}`}>
      {windowSize[0] > 600 ? desktopLayout : mobileLayout}
      <div id="topArrow" onClick={scrollToTop}>
        <FaChevronUp />
      </div>
    </main>
  );
};

export default App;
