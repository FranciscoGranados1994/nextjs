import React from 'react';
import CircleCard from './circle.card';
import style from '../../../styles/Home/mainSection.module.css';

const arrayCircles = [
  {
    name: 'circle one',
    verified: true,
    public: false,
    description:
      'circle one is a place where users can give & take rides with the comunity',
  },
  {
    name: 'circle two',
    verified: true,
    public: true,
    description:
      'circle two is a place where users can give & take rides with the comunity',
  },
  {
    name: 'circle three',
    verified: true,
    public: false,
    description:
      'circle three is a place where users can give & take rides with the comunity',
  },
  {
    name: 'circle four',
    verified: true,
    public: false,
    description:
      'circle four is a place where users can give & take rides with the comunity',
  },
  {
    name: 'circle five',
    verified: true,
    public: true,
    description:
      'circle five is a place where users can give & take rides with the comunity',
  },
  {
    name: 'circle six',
    verified: true,
    public: false,
    description:
      'circle six is a place where users can give & take rides with the comunity',
  },
  {
    name: 'circle five',
    verified: true,
    public: true,
    description:
      'circle five is a place where users can give & take rides with the comunity',
  },
  {
    name: 'circle six',
    verified: true,
    public: false,
    description:
      'circle six is a place where users can give & take rides with the comunity',
  },
  {
    name: 'circle six',
    verified: true,
    public: false,
    description:
      'circle six is a place where users can give & take rides with the comunity',
  },
  {
    name: 'circle five',
    verified: true,
    public: false,
    description:
      'circle five is a place where users can give & take rides with the comunity',
  },
  {
    name: 'circle six',
    verified: true,
    public: false,
    description:
      'circle six is a place where users can give & take rides with the comunity',
  },
];

const CirclesList: React.FC = () => {
  function setStyles(index: number) {
    let styleClass;
    if (index % 3 === 0) {
      console.log(index, 'ok');
      styleClass = style.circle_lg;
    } else {
      styleClass = style.circle_sm;
    }
    return styleClass;
  }

  function setCard(index: number) {
    let styleClass: boolean;
    if (index % 3 === 0) {
      console.log(index, 'ok');
      styleClass = true;
    } else {
      styleClass = false;
    }
    return styleClass;
  }

  return (
    <section className={style.section_circle}>
      {arrayCircles.map((circle, index) => {
        setStyles(index);
        return (
          <div className={setStyles(index)} key={index}>
            <CircleCard
              name={circle.name}
              styleClass={setCard(index)}
              publicCircle={circle.public}
            />
          </div>
        );
      })}
    </section>
  );
};

export default CirclesList;
