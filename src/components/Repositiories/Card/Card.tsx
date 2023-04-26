import React, { useState } from 'react';
import './card.scss';
import Button from '@mui/material/Button';
import { AiFillGithub } from 'react-icons/ai';
import { styled } from '@mui/material/styles';

interface props {
  logo: JSX.Element;
  finished: string;
  library: string;
  name: string;
  key: number;
  description: string;
  github: string;
}

export const Card = ({
  logo,
  finished,
  library,
  name,
  description,
  github,
}: props) => {
  return (
    <div className="card">
      <div className="gradient">{logo}</div>
      <div className="generalInfo">
        <div className="wrapperInfo">
          <p className="projectTitle">{name}</p>
          <p className="description">{description}</p>
        </div>
        {/* <a href={github} target={"_blank"}>Check on github <AiFillGithub/></a> */}
      </div>
    </div>
  );
};
