import React, { useState } from 'react';
import './skills.scss';
import { TreeSkills } from './TreeSkills/TreeSkills';
import { IoMdSettings } from "react-icons/io";

export const Skills = () => {
  const [active, setActive] = useState(true)
  return (
    <section className="skills link">
      <div className="skillsSetup">
        <TreeSkills active={active} />
      </div>
      <div className="skillsInfo">
        <header>
          <h1>Skillsset</h1>
          <h2 className="short">
Bridging law and technology to help companies navigate regulation, reduce risk, and gain a strategic edge.
          </h2>
          <button onClick={() => {setActive(p => !p)}} className={"googlePlayLink"} >
            {active? "Show": "Hide"} IT tools <IoMdSettings />
          </button>
        </header>
      </div>
    </section>
  );
};
