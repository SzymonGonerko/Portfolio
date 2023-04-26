import React, { useState, useRef } from 'react';
import './footer.scss';
import { AiFillLinkedin, AiFillFacebook, AiFillGithub } from 'react-icons/ai';

export const Footer = () => {
  return (
    <>
      <footer>
        <p>Webside created by Szymon Gonerko</p>
        <div className="socialWrapper">
          <a
            target={'_blank'}
            href="https://www.linkedin.com/in/szymon-gonerko-b64504237/"
          >
            <AiFillLinkedin />
          </a>
          <a target={'_blank'} href="https://www.facebook.com/szymon.gonerko">
            <AiFillFacebook />
          </a>
          <a target={'_blank'} href="https://github.com/SzymonGonerko">
            <AiFillGithub />
          </a>
        </div>
      </footer>
    </>
  );
};
