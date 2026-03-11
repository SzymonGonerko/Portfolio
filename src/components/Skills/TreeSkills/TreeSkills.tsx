import './treeSkills.scss';
import { useState } from 'react';
import { IconType } from 'react-icons';
import { useTypeWriter } from '../../hooks/useTypeWriter';
import { skillsdata, skillsdatait } from './skillsdata';
import type { skillsStructure } from './skillsdata';


interface TreeSkillsProps {
  active: boolean;
}

export const TreeSkills = ({ active }: TreeSkillsProps) => {
const data: skillsStructure[] = active ? skillsdata : skillsdatait;

  const [hovered, setHovered] = useState(false);
  const [activeGroup, setActiveGroup] = useState<number | null>(null);



  const toggleGroup = (group?: number) => {
    if (!group) return;
    setActiveGroup(activeGroup === group ? null : group);
  };

  const getClass = (group?: number) => {
    if (!group) return '';

    let classes = '';

    if (hovered) {
      classes += ` group-${group}-light`;
    }

    if (activeGroup === group) {
      classes += ` group-${group}-strong`;
    }

    return classes;
  };

  return (
    <nav className="mainSkillsNav">
      <div className="diagram-container">

        <div className={active ? 'row' : 'row long'}>
          {data.map((box, boxIndex) => (
            <div
              key={boxIndex}
              className="box"
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
            >
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
                              className={`skill-item ${getClass(item.group)}`}
                              onClick={() => toggleGroup(item.group)}
                            >
                              {Icon && (
                                <Icon
                                  className="skill-icon"
                                  size={18}
                                />
                              )}

                              <span className="skill-label">
                                {item.label}
                              </span>
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