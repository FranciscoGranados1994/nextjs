import React, { useState, useEffect, useRef } from 'react';
import style from '../../../styles/Profile/profileModal.module.css';
import { useRouter } from 'next/router';

const useClickOutside = (handler) => {
  const domNode = useRef();

  useEffect(() => {
    const maybeHandler = (event) => {
      if (!domNode.current.contains(event.target)) {
        handler();
      }
    };

    document.addEventListener('mousedown', maybeHandler);

    return () => {
      document.removeEventListener('mousedown', maybeHandler);
    };
  });

  return domNode;
};

function ProfileModal() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const domNode = useClickOutside(() => {
    setIsOpen(false);
  });

  function redirectToProfile() {
    setIsOpen(!isOpen);
    router.push('/Profile');
  }

  return (
    <div>
      <div className={style.div_text} onClick={() => setIsOpen(!isOpen)}>
        Profile
      </div>
      {/*  {
        isOpen? <div className={style.main}>Profile</div>:null
      } */}
      <div className={isOpen ? style.main : style.main_inactive} ref={domNode}>
        <div className={style.div_main_data}>
          <span className={style.span_data}> Francisco Granados</span>
          <span className={style.span_data}>
            I am a softyware developer living at cdmx
          </span>
          <span className={style.span_data}>I've taken 3 rides</span>
          <span className={style.span_data}>I've offered 2 rides</span>
        </div>

        <span className={style.span_reputation}>Reputation compontent</span>
        <button
          className={style.button_edit}
          onClick={() => redirectToProfile()}
        >
          Editar
        </button>
      </div>
    </div>
  );
}

export default ProfileModal;
