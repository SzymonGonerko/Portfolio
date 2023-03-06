import React, { useState } from 'react';
import './accordion.scss';
import { IoIosArrowDropdown } from 'react-icons/io';

interface props {
  list: { title: string; subNav: string[] }[];
}

export const Accordion = ({ list }: props) => {
  const handleClick = (skill: string) => {
    const detailsSkills = document.querySelectorAll(
      '.generalSkillLi'
    ) as unknown as HTMLCollection;
    const skillsInfo = document.querySelector('.skillsInfo');

    const [...newArr] = detailsSkills;

    const eachOther = newArr.filter(
      (element) => !element.classList.contains(skill)
    );
    const spans = eachOther.map((el) => el.querySelectorAll('.arrow')[0]);
    spans.forEach((el) => el.classList.remove('turnRound'));
    eachOther.forEach((el) => el.classList.remove('growLi'));

    const clickedItem = newArr.filter((element) =>
      element.classList.contains(skill)
    )[0];
    clickedItem.querySelectorAll('.arrow')[0].classList.toggle('turnRound');
    clickedItem.classList.toggle('growLi');

    skillsInfo?.addEventListener('click', () => {
      clickedItem.querySelectorAll('.arrow')[0].classList.remove('turnRound');
      spans.forEach((el) => el.classList.remove('turnRound'));
      eachOther.forEach((el) => el.classList.remove('growLi'));
      clickedItem.classList.remove('growLi');
    });
  };

  return (
    <nav className="mainSkillsNav">
      <ul className="mainSkillsList">
        {list.map((el: { title: string; subNav: any[] }, i: number) => (
          <li
            key={i}
            onClick={() => handleClick(el.title)}
            className={`generalSkillLi ${el.title}`}
          >
            <p className="title">
              {el.title === 'OtherTools' ? 'Other tools' : el.title}{' '}
              <span className="arrow">
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
