import './treeSkills.scss';
import { useState } from 'react';
import { skillsdata, skillsdatait } from './skillsdata';
import type { skillsStructure } from './skillsdata';

interface TreeSkillsProps {
  active: boolean;
}

export const TreeSkills = ({ active }: TreeSkillsProps) => {
  const data: skillsStructure[] = active ? skillsdata : skillsdatait;
  const [activeGroup, setActiveGroup] = useState<number | null>(null);

  const toggleGroup = (group?: number) => {
    if (!group) return;
    setActiveGroup(activeGroup === group ? null : group);
  };

  return (
    <nav className="mainSkillsNav">
      <div className="diagram-container">
        <div className={active ? 'row' : 'row long'}>
          {data.map((box, boxIndex) => (
            <div key={boxIndex} className="box">
              <h3>{box.heading}</h3>

              <ul className="ul_1">
                {box.categories.map((category, catIndex) => (
                  <li className="li_1" key={catIndex}>
                    {category.title}

                    <ul className="ul_2">
                      {category.items.map((item, itemIndex) => {
                        const Icon = item.icon;

                        return (
                          <li className="li_2" key={itemIndex}>
                            <span
                              className={`skill-item`}
                              onClick={() => toggleGroup(item.group)}
                            >
                              {Icon && (
                                <Icon className="skill-icon" size={18} />
                              )}

                              <span className="skill-label">{item.label}</span>
                            </span>
                          </li>
                        );
                      })}
                    </ul>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};
