import React from 'react';
import './idbm.scss';
import { FaPlay } from "react-icons/fa";
import { ScrollContainer } from 'react-nice-scroll';
import logo from '../../assets/plantifiMobile.png';
import { Tilt } from 'react-tilt';

const defaultOptions = {
  reverse: false,
  max: 20,
  perspective: 1500,
  scale: 1,
};

const photos = [
  require('../../assets/IDBMPreview/1.jpg'),
  require('../../assets/IDBMPreview/2.jpg'),
  require('../../assets/IDBMPreview/3.jpg'),
  require('../../assets/IDBMPreview/4.jpg'),
  require('../../assets/IDBMPreview/5.jpg'),
  require('../../assets/IDBMPreview/6.jpg'),
];

export const Idbm = () => {
  const liveLink = 'https://idbm.netlify.app/';


  return (
    <section className="idbm link">
      <div className="wrapperMobile">
        <header>
          <h1>IDBM as interactive fullstack app</h1>
          <h2 className="short">
Interactive Database Movies is a full-stack application replicating the core features of modern movie platforms.
Built with a custom movie database, it showcases strong expertise in relational database design and cloud deployment on Microsoft Azure and MSSQL.
          </h2>
        </header>
        <div className="container">
          <img src={logo} alt="PlantifyApp" />
          <a className="googlePlayLink" href={liveLink} target={'_blank'}>
            Check it out <strong>GooglePlay</strong>
            <FaPlay />
          </a>
        </div>
      </div>
      <div className="wrapperDesktop">
        <div className="idbmScrollBox">
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
        <div className="idbmDescriptionBox">
          <header>
            <h1>IDBM as interactive fullstack app</h1>
            <h2 className="short">
Interactive Database Movies is a full-stack application.
Built with relational database design and cloud deployment on Microsoft Azure and MSSQL.
            </h2>
            <a className="googlePlayLink" target={'_blank'} href={liveLink}>
              Check it out
              <FaPlay />
            </a>
          </header>
        </div>
      </div>
    </section>
  );
};
