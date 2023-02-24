import React from 'react';
import './flow2Code.scss';
import { Play } from '../Play/Play';

interface props {
  live: string,
}

export const Flow2Code = ({live}: props) => {
  return (
    <div className="flow2Code">
      <Play live={live}/>
    </div>
  );
};
