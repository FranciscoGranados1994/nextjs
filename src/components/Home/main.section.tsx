import React from 'react';
import CirclesList from './circles.list';
import style from '../../../styles/Home/mainSection.module.css';

const MainSection: React.FC = () => {
  return (
    <main className={style.main}>
      {/*Welcome and My cards*/}
      {/* filter */}
      {/* cards */}
      <div>Bienvenida</div>

      <CirclesList />
    </main>
  );
};

export default MainSection;
