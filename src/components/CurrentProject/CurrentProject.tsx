import React from 'react';
import './currentProject.scss';
import { FaGooglePlay } from 'react-icons/fa';
import { BsGithub } from 'react-icons/bs';
import { ScrollContainer } from 'react-nice-scroll';
import logo from "../../assets/plantifiMobile.png"


const photos = [
  require('../../assets/plantifiPreview/1.jpg'),
  require('../../assets/plantifiPreview/2.jpg'),
  require('../../assets/plantifiPreview/3.jpg'),
  require('../../assets/plantifiPreview/4.jpg'),
  require('../../assets/plantifiPreview/5.jpg'),
  require('../../assets/plantifiPreview/6.jpg'),
  require('../../assets/plantifiPreview/7.jpg'),
  require('../../assets/plantifiPreview/8.jpg'),
  require('../../assets/plantifiPreview/9.jpg'),
  require('../../assets/plantifiPreview/10.jpg'),
  require('../../assets/plantifiPreview/11.jpg'),
];


export const CurrentProject = () => {
  const googleplay =
    'https://play.google.com/store/apps/details?id=com.szymon1993.plantifi&fbclid=IwAR1lFjFubjrQVmCLFPci3drZMK5Of24S_g6VZRTed0MhHnqj1L0WfI1s1to';
  const gitHub = 'https://github.com/SzymonGonerko/Plantifi';
  const figma = 'https://www.figma.com/file/9Mjrr6WzPrrUpFpVoT0SNq/Plantify?node-id=0%3A1&t=Xf1BUP9QcTjHQpYt-0'
  return (
    <section className="currentProject link">
      <div className="wrapperMobile">
        <header>
          <h1>Currently working on Plantifi</h1>
          <h2>
            Mobile app for managing and recognizing home plants. Created on
            react native and expo environment. Published on Google Play.
          </h2>
        </header>
        <div className="container">
          <img src={logo} alt="PlantifyApp" />
          <a className="githubLink" href={googleplay} target={'_blank'}>
            Get in on <strong>GooglePlay</strong>
            <FaGooglePlay />
          </a>
        </div>
      </div>
      <div className="wrapperDesktop">
        <div className="plantifiScrollBox">
          <ScrollContainer
            activeSmoothScrollOnTouchDevice={false}
            damping={0.05}
            thumbMinSize={0.2}
          >
            {photos.map((el, i) => (
              <div className="containerImg" key={i}>
                <img src={el}></img>
              </div>
            ))}
          </ScrollContainer>
        </div>
        <div className="plantifiDescriptionBox">
          <header>
            <h1>Currently working on Plantifi</h1>
            <h2>
              Mobile app for manage and recognizing home plants. Created by 7 UX coworkers on <a target={'_blank'} href={figma}>Figma</a> Based on
              React Native and Expo enivoroment. Published on{' '}
              <a target={'_blank'} href={googleplay}>Google Play</a>.
            </h2>
            <a className="githubLink" target={'_blank'} href={gitHub}>
              Check it on <strong>GitHub</strong>
              <BsGithub />
            </a>
          </header>
        </div>
      </div>
    </section>
  );
};
