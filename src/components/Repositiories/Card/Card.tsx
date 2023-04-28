import React, { useState } from 'react';
import './card.scss';
import Button from '@mui/material/Button';
import { AiFillGithub } from 'react-icons/ai';
import { styled } from '@mui/material/styles';
import { Play } from '../graficsLogo/Play/Play';

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
      <div className="gradient">
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
