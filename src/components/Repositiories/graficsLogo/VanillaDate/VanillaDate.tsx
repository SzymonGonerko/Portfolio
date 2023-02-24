import React from 'react';
import './vanillaDate.scss';
import { Play } from '../Play/Play';

interface props {
  live: string,
}

export const VanillaDate = ({live}: props) => {
  return (
    <div className="vanillaDate">
        <Play live={live}/>
    </div>
  );
};
