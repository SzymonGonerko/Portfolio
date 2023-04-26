import React, { useState } from 'react';
import './accordion.scss';
import { IoIosArrowDropdown } from 'react-icons/io';

interface props {
  list: { title: string; classNames: any; subNav: string[] }[];
}

export const Accordion = ({ list }: props) => {
  const handleClick = (skill: string) => {
    const detailsSkills = document.querySelectorAll(
      '.generalSkillLi'
    ) as unknown as HTMLCollection;
    const [...newArr] = detailsSkills;

    const eachOther = newArr.filter(
      (element) => !element.classList.contains(skill[0])
    );
    const spans = eachOther.map((el) => el.querySelectorAll('.arrow')[0]);
    spans.forEach((el) => el.classList.remove('turnRound'));
    eachOther.forEach((el) => el.classList.remove('growLi'));

    const clickedItem = newArr.filter(
      (element) =>
        element.classList.contains(skill[0]) ||
        element.classList.contains(skill[1])
    )[0];
    clickedItem.querySelectorAll('.arrow')[0].classList.add('turnRound');
    setTimeout(() => {
      clickedItem.classList.add('growLi');
    }, 550);
  };

  return (
    <nav className="mainSkillsNav">
      <ul className="mainSkillsList">
        {list.map((el: any, i: number) => (
          <li
            key={i}
            onClick={() => handleClick(el.classNames)}
            className={`generalSkillLi ${[...el.classNames].join(' ')}`}
          >
            <p className="title">
              {el.title}
              <span
                className={`arrow ${
                  el.title === 'Technologies' ? 'turnRound' : ''
                }`}
              >
                <IoIosArrowDropdown />
              </span>
            </p>
            <nav>
              <ul>
                {el.subNav.map((el: string, i: number) => (
                  <li key={i}>{el}</li>
                ))}
              </ul>
            </nav>
          </li>
        ))}
      </ul>
    </nav>
  );
};
