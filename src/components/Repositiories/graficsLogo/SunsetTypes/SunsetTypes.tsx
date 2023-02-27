import React from 'react';
import './sunsetTypes.scss';
import { Play } from '../Play/Play';

interface props {
  live: string;
}

export const SunsetTypes = ({ live }: props) => {
  return (
    <div className="sunsetTypes">
      <Play live={live} />
    </div>
  );
};
