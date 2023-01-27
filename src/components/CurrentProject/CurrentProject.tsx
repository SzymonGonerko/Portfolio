import React from 'react';
import './currentProject.scss';
import { FaGooglePlay } from 'react-icons/fa';
const logo = require('../../assets/plantifiMobile.png');



export const CurrentProject = () => {
  const googleplay = 'https://play.google.com/store/apps/details?id=com.szymon1993.plantifi&fbclid=IwAR1lFjFubjrQVmCLFPci3drZMK5Of24S_g6VZRTed0MhHnqj1L0WfI1s1to'
  return (
    <section className="currentProject link">
      <div className='wrapperMobile'>
        <header>
          <a className='linkedIn' href='https://www.linkedin.com/in/szymon-gonerko-b64504237/'>visit my on LinkedIn</a>
          <h1>Currently working on Plantifi</h1>
          <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqa.</h2>
        </header>
        <div className='container'>
          <img src={logo} alt="PlantifyApp" />
          <a href={googleplay}>Get in on <strong>GooglePlay</strong><FaGooglePlay /></a>
        </div>
      </div>
      <div className='wrapperDesktop'>
        <h1>fdsds</h1>
      </div>
        

    </section>
  );
};
