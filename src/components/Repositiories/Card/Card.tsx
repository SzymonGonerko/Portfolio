import React, { useState } from 'react';
import './card.scss';
import Button from '@mui/material/Button';
import { AiFillGithub } from 'react-icons/ai';
import { styled } from '@mui/material/styles';
import { Play } from '../graficsLogo/Play/Play';

import gg from "../../../assets/hq720.jpg"

interface props {
  finished: string;
  library: string;
  name: string;
  key: number;
  description: string;
  github: string;
  live: string;
}

export const Card = ({ name, description, live }: props) => {
  return (
    <div className="card">
      <div className="poster">
        <div className='graphics'/>
        <Play live={live} />
      </div>
      
      <div className="generalInfo">
        <div className="wrapperInfo">
          <p className="projectTitle">{name}</p>
          <p className="description">{description}</p>
        </div>
      </div>
    </div>
  );
};
