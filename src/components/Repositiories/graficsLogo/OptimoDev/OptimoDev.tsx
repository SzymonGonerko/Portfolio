import React from 'react';
import './optimoDev.scss';
import { Play } from '../Play/Play';

interface props {
  live: string;
}

export const OptimoDev = ({ live }: props) => {
  return (
    <div className="optimoDev">
      <Play live={live} />
    </div>
  );
};
