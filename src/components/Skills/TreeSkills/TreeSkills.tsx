import './treeSkills.scss';
import { useState } from 'react';
import { IconType } from 'react-icons';
import { useTypeWriter } from '../../hooks/useTypeWriter';
import { skillsdata, skillsdatait } from './skillsdata';
import type { skillsStructure } from './skillsdata';


interface TreeSkillsProps {
  active: boolean;
}

const descriptions: Record<number, string> = {
  1: "I was responsible for the onboarding process of a new employee, which included configuring the company phone and laptop. On the server side, I created a corporate account in Active Directory Users and Computers and assigned appropriate permissions using the Group Policy Management Console, in accordance with the conditions specified in the Employment Compliance rules.",

  2: "During team meetings, I delivered presentations focused on workflow and process automation in companies. I was also responsible for optimizing the SEO of existing digital products in employment agencies for potential partners, for example by modifying meta tags for social media platforms.",

  3: "The process of legalizing the residence of foreigners required the company to attach public institution fees to the documentation. The company faced the problem of manually renaming large numbers of PDF files confirming banking transactions. To solve this issue, I developed a C# program that automatically renamed PDF files based on the transfer title."
};

export const TreeSkills = ({ active }: TreeSkillsProps) => {
const data: skillsStructure[] = active ? skillsdata : skillsdatait;

  const [hovered, setHovered] = useState(false);
  const [activeGroup, setActiveGroup] = useState<number | null>(null);

  const text = activeGroup ? descriptions[activeGroup] || "" : "";
  const displayedText = useTypeWriter(text, 22);

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

        {active && (
          <div className="row">
            <div className="box">
              <h3>IT supporting hybrid operations</h3>
              {activeGroup && <p>{displayedText}</p>}
            </div>
          </div>
        )}

      </div>
    </nav>
  );
};