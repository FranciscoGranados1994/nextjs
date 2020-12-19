import React from 'react';
import style from '../../../styles/Home/circlesCard.module.css';

interface CardInterface{
  name:string, 
  styleClass:boolean, 
  publicCircle:boolean
}

const CircleCard: React.FC<CardInterface> = ({ name, styleClass, publicCircle }) => {

  return (
    <div className={styleClass ? style.main_card_lg : style.main_card}>
      <div className={publicCircle ? style.div_left : style.div_left_public}>
        <div className={style.verified_logo}>verified</div>
        <div className={style.circle_logo}>Logotipo</div>
      </div>
      <div className={style.div_right}>
        <div className={style.div_details}>
          <h2 className={style.h2_title}>{name}</h2>
          <p className={style.p_desc}>Description</p>
        </div>
        <div className={style.div_button}>
          <button className={style.button}>Join</button>
        </div>
      </div>
    </div>
  );
};

export default CircleCard;
