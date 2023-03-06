import React from 'react';
import './moreInfo.scss';

export const MoreInfo = () => {
const devJsSummit ='https://app.evenea.pl/event/devjssummit2023/'
const meetJs = 'https://crossweb.pl/en/events/meetjs-wroclaw-marzec-2023/'

  return (
    <section className="moreInfo link">
      <div className='basicInfo'>
        <header>
            <h1>Hit me up!</h1>
            <h2>
              If You have some questions for me, let me know about it !
            </h2>
        </header>
        <div className='events'>
          <h3>or catch me at...</h3>
            <aside>
              <a className='meetJs' href={meetJs} target={'_blank'}/>
              <a className='devJsSummit' href={devJsSummit} target={'_blank'}/>
            </aside>
        </div>
      </div>
      <div className='formContainer'>
        
      </div>
    </section>
  );
};
