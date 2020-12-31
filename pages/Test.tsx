import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import style from '../styles/testComponent.module.css';
import ProfileImage from '../public/ProfileImage.svg';

const SwitchComponent = ({ status, setStatus }) => {
    /* global component */
  return (
    <div
      className={status ? style.div_switch_on : style.div_switch_off}
      onClick={() => {
        setStatus(!status);
      }}
    >
      <div className={status ? style.switch_on : style.switch_off}></div>
    </div>
  );
};

const SwitchPublic = () => {
  const [activeSwitch, setActiveSwitch] = useState(true);
  return (
    <div className={style.div_switch}>
      <div className={style.switch_container}>
        <label className={style.label}>
          Is Public? {activeSwitch ? 'Yes' : 'No'}
        </label>
        <SwitchComponent status={activeSwitch} setStatus={setActiveSwitch} />
      </div>
    </div>
  );
};

const SwitchLimit = () => {
  const [activeSwitch, setActiveSwitch] = useState(false);
  return (
    <div className={style.div_switch}>
      <div className={style.switch_container}>
        <label className={style.label}>
          Is limited? {activeSwitch ? 'Yes' : 'No'}
        </label>
        <SwitchComponent status={activeSwitch} setStatus={setActiveSwitch} />
      </div>

      {activeSwitch ? (
        <div className={style.members_container}>
          <label className={style.label_members}>How many members? </label>

          <input placeholder="1" className={style.input_noMembers} />
        </div>
      ) : null}
    </div>
  );
};

const ModalCircle: React.FC = () => {
  const [activeModal, setActiveModal] = useState<boolean>(true);
  return activeModal ? (
    <div className={style.modal_general}>
      <div className={style.modal_bg}></div>
      <div className={style.modal_content}>
        <section className={style.image_section}>
          <ProfileImage className={style.icon_profile} />
        </section>
        <div className={style.div_inputs}>
          <div className={style.input_name}>
            <input placeholder="circle name" className={style.input} />
          </div>
          <div className={style.input_slug}>
            <input placeholder="slug name" className={style.input} />
          </div>
        </div>
        <div className={style.div_text}>
          <textarea className={style.textarea}>Text</textarea>
        </div>
        <div className={style.div_switches}>
          <SwitchLimit />
          <SwitchPublic />
        </div>
        <div className={style.div_button}>
          <button className={style.button}>Crear Circulo</button>
        </div>
      </div>
    </div>
  ) : null;
};

const Test: React.FC = () => {
  return (
    <div>
      This section is only to create the correspondient component that missing
      -Create Ride -Create Circle -Notify about near ride
      <h2>Task: Create Circle</h2>
      <ModalCircle />
    </div>
  );
};

export default Test;
