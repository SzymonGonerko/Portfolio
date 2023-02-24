import React from 'react';
import './sgWorld.scss';
import { Play } from '../Play/Play';

interface props {
  live: string,
}

export const SGWorld = ({live} : props) => {
  return (
    <div className="SGWorld">
        <Play live={live}/>
    </div>
  );
};
