import React from 'react';
import './play.scss';

interface props {
    live: string
}

export const Play = ({live} : props) => {
    return (
        <a href={live} target={'_blank'}  className='play'>
            <div className='icon'/>
        </a>
    )
}