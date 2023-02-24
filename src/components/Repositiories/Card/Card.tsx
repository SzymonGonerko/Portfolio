import React from 'react';
import './card.scss';

interface props {
    logo: JSX.Element,
    finished: string,
    library: string,
    name: string,
    key: number,
    description: string,
    github: string
}

export const Card = ({logo, finished, library, name, description, github} : props) => {
    return (
        <div className="card">
        <div className="gradient">{logo}</div>
        <div className="generalInfo">
          <div className="wrapperInfo">
            <div className="topInfo">
              <p className="date">{finished}</p>
              <p className="library">{library}</p>
            </div>
            <p className="title">{name}</p>
            <p className="description">{description}</p>
            <a className='githubLink' href={github}>check on github</a>
          </div>
        </div>
      </div>
    )
}