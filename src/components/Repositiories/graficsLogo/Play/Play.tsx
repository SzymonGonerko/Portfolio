import React from 'react';
import './play.scss';

interface props {
  live: string;
}

export const Play = ({ live }: props) => {
  return (
    <a
      aria-label="link to project"
      href={live}
      target={'_blank'}
      className="play"
    >
      <div className="icon" />
    </a>
  );
};
