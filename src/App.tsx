import { useEffect, useState } from 'react';
import './App.scss';
import { ScrollContainer } from 'react-nice-scroll';
import 'react-nice-scroll/dist/styles.css';

import { Hero } from '../src/components/Hero/Hero';
import { Plantify } from './components/Plantify/Plantify';
import { Repositories } from './components/Repositiories/Repositiories';
import { Skills } from './components/Skills/Skills';
import { MoreInfo } from './components/MoreInfo/MoreInfo';
import { Footer } from './components/Footer/Footer';
import { Navigation } from './components/Navigation/Navigation';
import { Idbm } from './components/IDBM/Idbm';

const AnimatedCursor = require('react-animated-cursor');

const App = () => {
  const [darkmood, setDarkMood] = useState(false);
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
          'li',
          'textarea',
          'div.MuiInputBase-root',
        ]}
      />
      <Navigation darkmood={darkmood} setDarkMood={setDarkMood} />
      <ScrollContainer damping={0.06} thumbMinSize={10}>
        <Hero darkmood={darkmood} setDarkMood={setDarkMood} />
        <Idbm/>
        <Plantify />
        <Repositories windowWidth={windowSize[0]} />
        <Skills />
        <MoreInfo darkMood={darkmood} />
        <Footer />
      </ScrollContainer>
    </>
  );

  const mobileLayout = (
    <>
      <Navigation darkmood={darkmood} setDarkMood={setDarkMood} />
      <Hero darkmood={darkmood} setDarkMood={setDarkMood} />
      <Plantify />
      <Repositories windowWidth={windowSize[0]} />
      <Skills />
      <MoreInfo darkMood={darkmood} />
      <Footer />
    </>
  );

  const handleWindowResize = () => {
    setWindowSize([window.innerWidth, window.innerHeight]);
  };

  const changeColor = (color: string) => {
    if (color === `"dark"`) {
      const app = document.querySelector('.App');
      app?.classList.add('darkmood');
      setDarkMood(true);
    } else {
      setDarkMood(false);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize);
    setTimeout(() => {
      let colorScheme = getComputedStyle(document.body, ':after').content;
      changeColor(colorScheme);
    }, 1000);
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);



  return (
    <main className={`App ${darkmood ? 'darkmood' : ''}`}>
      {windowSize[0] > 600 ? desktopLayout : mobileLayout}
    </main>
  );
};

export default App;
