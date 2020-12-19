import React from 'react';
import CirclesList from './circles.list';
import UserCircles from './circles.suscription'
import Filters from './filters'
import style from '../../../styles/Home/mainSection.module.css';


const MainSection: React.FC = () => {
  return (
    <main className={style.main}>
      {/*Welcome and My cards*/}
      {/* filter */}
      {/* cards */}

      {/* <div>Bienvenida</div>
      <a>
      <Link href="/Profile">Profile</Link>

      </a>
      <a>
      <Link href="/Circle">Circle</Link>
      </a>
 */}
      <UserCircles />

      {/* filter */}
      <Filters/>

      <CirclesList />
    </main>
  );
};

export default MainSection;
