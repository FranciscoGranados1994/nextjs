import React from 'react';
import style from '../../../styles/General/Navbar.module.css';

const Navbar: React.FC = () => {
  return (
    <nav className={style.navbar}>
      <div className={style.div_logo}>Logo</div>
      <div className={style.div_profile}>profile</div>
      <div className={style.div_logout}>logout</div>
    </nav>
  );
};

export default Navbar;
