import React from 'react';
import style from '../../../styles/Home/circlesSuscription.module.css';
import Back from '../../../public/Back.svg';
import Next from '../../../public/Next.svg';

const UserCircles: React.FC = () => {
  const circles = [
    {
      name: 'cu',
      logo: 'logotipo',
    },
    {
      name: 'ipn',
      logo: 'logotipo',
    },
    {
      name: 'ipn',
      logo: 'logotipo',
    },
  ];

  function advanced() {}

  return (
    <div className={style.div_user_circles}>
      <h2 className={style.h2}>Mis Circulos:</h2>
      <div className={style.circle_list}>
        {/* If there no circles suscriptions doesnt render anythong */}
        {circles.length > 3 ? <Back className={style.back} /> : null}

        <div className={style.div_cards}>
          {circles.map((circle) => {
            return <div className={style.card}>{circle.name}</div>;
          })}
        </div>
        {circles.length > 3 ? (
          <Next
            className={style.next}
            onClick={() => {
              advanced();
            }}
          />
        ) : null}
      </div>
    </div>
  );
};

export default UserCircles;
