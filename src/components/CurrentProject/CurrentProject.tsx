import React from 'react';
import './currentProject.scss';
import { FaGooglePlay } from 'react-icons/fa';
import { ScrollContainer } from 'react-nice-scroll';
import logo from '../../assets/plantifiMobile.png';
import { Tilt } from 'react-tilt'


const defaultOptions = {
	reverse: false,
	max: 20,
	perspective: 1500,
	scale: 1,
}

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
  require('../../assets/plantifiPreview/12.jpg'),
  require('../../assets/plantifiPreview/13.jpg'),
  require('../../assets/plantifiPreview/14.jpg'),
];

export const CurrentProject = () => {
  const googleplay =
    'https://play.google.com/store/apps/details?id=com.szymon1993.plantifi&fbclid=IwAR1lFjFubjrQVmCLFPci3drZMK5Of24S_g6VZRTed0MhHnqj1L0WfI1s1to';
  const gitHub = 'https://github.com/SzymonGonerko/Plantifi';

  return (
    <section className="currentProject link">
      <div className="wrapperMobile">
        <header>
          <h1>Currently working on Plantifi</h1>
          <h2 className="short">
            Mobile app for manage and recognizing home plants. Created by 5 UX
            coworkers on Figma. Based on React Native and Expo enivoroment.
            Published on Google Play.
          </h2>
        </header>
        <div className="container">
          <img src={logo} alt="PlantifyApp" />
          <a className="googlePlayLink" href={googleplay} target={'_blank'}>
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
                <Tilt className="tilt" options={defaultOptions}>
                  <img alt={`preview-plantifi-${i + 1}`} src={el}></img>
                </Tilt>
              </div>
            ))}
          </ScrollContainer>
        </div>
        <div className="plantifiDescriptionBox">
          <header>
            <h1>Currently working on Plantifi</h1>
            <h2 className="short">
              Mobile app for manage and recognizing home plants. Created by 5 UX
              coworkers on Figma. Based on React Native and Expo enivoroment.
              Published on Google Play.
            </h2>
            <a className="googlePlayLink" target={'_blank'} href={googleplay}>
              Download by <strong>GooglePlay</strong>
              <FaGooglePlay />
            </a>
          </header>
        </div>
      </div>
    </section>
  );
};
