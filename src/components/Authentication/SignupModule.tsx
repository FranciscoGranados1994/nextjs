/* React/Next */
import React, { useState, useEffect } from 'react';
import { useUserData } from '../../Hooks/useUserData';
import { useRouter } from 'next/router';

/* Styles and animatyions */
import style from '../../../styles/SignUp.module.css';
import Lottie from 'react-lottie';
import checkstatus from '../../../styles/statics/checkstatus.json';

/* 
Child Components
    FormatTooltip
    UploadImage
    PhoneInput
    CitiesInput
    Animation
    Status

Main Component 
    SecondSignupModule
*/

const FormatTooltip: React.FC = ({ type, condition }) => {
  /* tootltip wich render a series of rules to follow */
  return condition ? (
    <div className={style.tooltip}>
      <div className={style.div_texts}>
        <a className={style.a_example}> Verify the format</a>
      </div>

      <div className={style.right}>
        <div className={style.text_content}>
          <h3 className={style.h3_considerations}>Consideration : </h3>
          {type === 'email' ? (
            <ul>
              <li>
                Your email must to have: @(at) , .(dot) and a termination with
                at least two characters{' '}
              </li>
              <li>Example: emailtest@gmail.com</li>
            </ul>
          ) : null}

          {type === 'password' ? (
            <ul>
              <li>
                Your password must to have at least a number, an uppercase, an
                lowwercase and a special character
              </li>
            </ul>
          ) : null}

          {type === 'firstname' || type === 'lastname' ? (
            <ul>
              <li>You can't use number or special character</li>
            </ul>
          ) : null}
        </div>
        <i></i>
      </div>
    </div>
  ) : null;
};

const UploadImage: React.FC = ({ handleImg, userImage }) => {
  return (
    <div className={style.file_container}>
      {userImage ? (
        <img
          src={userImage}
          alt="Imagen del usuario"
          className={style.img_file}
        />
      ) : null}
      <form action="#">
        <p className={style.file}>
          <input
            className={style.input_file}
            type="file"
            name="file"
            id="file"
            accept="image/png, image/jpeg"
            onChange={(e) => handleImg(e)}
          />
          <label htmlFor="file" className={style.label_file}>
            Sube tu foto de perfil!
          </label>
        </p>
      </form>
    </div>
  );
};

const PhoneInput: React.FC = ({
  handlePhone,
  setActiveAnimation,
  city,
  description,
  userImage,
}) => {
  const [phone, setPhone] = useState<string>();
  const [regexValidation, setRegexValidation] = useState<boolean>();

  async function handleData(
    e: React.ChangeEvent<HTMLInputElement>
  ): Promise<void> {
    const { value } = e.target;

    await setPhone(value);
    await handlePhone(value);

    if (value.length === 0) {
      setRegexValidation(true);

      if (!description && !city && !userImage) {
        setActiveAnimation(false);
      } else {
        setActiveAnimation(true);
      }
    } else {
      const regexTest = new RegExp(
        /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
        'im'
      );
      const result: boolean = regexTest.test(value);
      setRegexValidation(result);

      if (result) {
        setActiveAnimation(true);
      } else {
        setActiveAnimation(false);
      }
    }
  }

  return (
    <div className={style.phone_container}>
      <label className={style.label_phone}>Phone</label>
      <input
        placeholder="Number"
        value={phone}
        className={style.input_phone}
        onChange={(e) => {
          handleData(e);
        }}
      />
      <FormatTooltip type="email" condition={regexValidation === false} />
    </div>
  );
};

const CitiesInput: React.FC = ({
  handleCity,
  setActiveAnimation,
  description,
  phoneNumber,
  userImage,
}) => {
  const [activateStates, setActiveStates] = useState<boolean>(false);

  const [states, setStates] = useState<string[]>([
    'Aguascalientes',
    'Baja California',
    'Baja California Sur',
    'Campeche',
    'Coahuila',
    'Colima',
    'Chiapas',
    'Chihuahua',
    'Durango',
    'Distrito Federal',
    'Guanajuato',
    'Guerrero',
    'Hidalgo',
    'Jalisco',
    'CDMX',
    'Michoacán',
    'Morelos',
    'Nayarit',
    'Nuevo León',
    'Oaxaca',
    'Puebla',
    'Querétaro',
    'Quintana Roo',
    'San Luis Potosí',
    'Sinaloa',
    'Sonora',
    'Tabasco',
    'Tamaulipas',
    'Tlaxcala',
    'Veracruz',
    'Yucatán',
    'Zacatecas',
  ]);

  const [displayStates, SetDisplayStates] = useState<string[]>(states);

  const [stateSelected, setStateSelect] = useState<string>('');
  const [regexValidation, setRegexValidation] = useState<boolean>();

  async function filterStates(
    e: React.ChangeEvent<HTMLInputElement>
  ): Promise<void> {
    const { value } = e.target;

    setActiveStates(true);
    await handleCity(value);

    /* if is not an empty value, test the regexp rules */

    if (value.length === 0) {
      setRegexValidation(true);
      setStateSelect(value);

      console.log('is empty');

      if (!description && !phoneNumber && !userImage) {
        console.log('the other are empty', description, phoneNumber, userImage);
        setActiveAnimation(false);
      } else {
        console.log(
          'the others are not empty',
          'description',
          description,
          'phoneNumber',
          phoneNumber,
          'userImage',
          userImage
        );
        setActiveAnimation(true);
      }
    } else {
      const regexInput = new RegExp(/^[a-zA-Z ]+$/, 'gi');
      const regexTest: boolean = regexInput.test(value);

      setRegexValidation(regexTest);
      setStateSelect(value);

      if (!regexTest) {
        setActiveAnimation(false);
        setActiveStates(false);
        return;
      } else {
        handleCity(value);
        setActiveAnimation(true);
      }
    }

    /* filter the option that match with the input request */
    const regexp = new RegExp(value, 'gi');

    const statesFiltered: string[] = await states.filter((state) => {
      const result: boolean = regexp.test(state);
      if (result) return state;
    });
    await SetDisplayStates(statesFiltered);
  }

  async function chooseState(state: string): Promise<void> {
    await setActiveStates(false);
    await setStateSelect(state);
    handleCity(state);
  }

  return (
    <div className={style.cities_container}>
      <label className={style.label_city}>Ciudad</label>
      <input
        placeholder="Elige tu ciudad"
        className={style.input_cities}
        onFocus={() => setActiveStates(true)}
        onBlur={() => setActiveStates(false)}
        onChange={(e) => filterStates(e)}
        value={stateSelected}
      />
      {activateStates && displayStates.length !== 0 ? (
        <div className={style.div_states}>
          {/* display state options */}
          {displayStates.map((state, index) => {
            return (
              <div
                key={index}
                className={style.div_state_option}
                onMouseDown={() => {
                  chooseState(state);
                }}
              >
                <h2 className={style.h2_states}>{state}</h2>
              </div>
            );
          })}
        </div>
      ) : null}

      <FormatTooltip type="email" condition={regexValidation === false} />
    </div>
  );
};

const Animation: React.FC = () => {
  const checkAnimation = {
    loop: false,
    autoplay: true,
    animationData: checkstatus,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
  return (
    <div className={style.div_animation}>
      <Lottie options={checkAnimation} height={100} width={50} />
    </div>
  );
};

const SignUpSecondModule: React.FC = () => {
  const [textareaError, setTextareaError] = useState<boolean>();
  const [textareValue, setTextareaValue] = useState<string>();
  const router = useRouter();
  const {
    setActiveAnimation,
    activeAnimation,
    handleCity,
    handlePhone,
    handleDescription,
    handleImage,
    userImage,
    makeRequest,
    phoneNumber,
    description,
    city,
  } = useUserData();
  const activeButton = !activeAnimation;

  async function handleTextareaData(e: React.ChangeEvent<HTMLTextAreaElement>) {
    const { value } = e.target;
    await setTextareaValue(value);
    await handleDescription(value);

    /* if is not an empty value, verify the regex rule */

    if (value.length === 0) {
      setTextareaError(false);

      if (!phoneNumber && !city && !userImage) {
        setActiveAnimation(false);
      } else {
        setActiveAnimation(true);
      }
    } else {
      const regex = new RegExp(/^[a-zA-Z0-9 ]+$/);
      const result: boolean = regex.test(value);

      if (!result) {
        setTextareaError(true);
        setActiveAnimation(false);
      } else {
        setTextareaError(false);
        setActiveAnimation(true);
      }
    }

    console.log(description);
    /* if any other value was previously typed and the actual is empty, remove the animation  */
    if (!userImage && !city && !phoneNumber && value.length === 0) {
      console.log('user data- Test textarea', city, phoneNumber, userImage);
      setActiveAnimation(false);
    }
  }

  function skipProcess(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();

    router.push('/Home');
  }

  return (
    <section className={style.signup_module}>
      <section className={style.section_steps}>
        <div className={style.div_boxes}>
          <div className={style.div_box_1}>
            <div className={style.div_step}>1</div>
            <h3 className={style.h3_step}>Sign up</h3>
          </div>
          <div className={style.div_box_2}>
            <div
              className={activeAnimation ? style.div_step : style.div_pending}
            >
              2
            </div>
            <h3 className={style.h3_step}>Profile</h3>
          </div>
          <div className={style.div_divider}></div>
        </div>
        <div className={style.div_steps_info}>
          <h3 className={style.h3_number_step}>Step 2/2</h3>
          <h2 className={style.h3_step_info}>Profile information</h2>
        </div>
      </section>
      <form className={style.form_signup}>
        {/* handle optional data */}

        <UploadImage
          handleImg={handleImage}
          userImage={userImage}
          setActiveAnimation={setActiveAnimation}
        />

        <div className={style.div_inputs}>
          <CitiesInput
            handleCity={handleCity}
            setActiveAnimation={setActiveAnimation}
            activeAnimation={activeAnimation}
            phoneNumber={phoneNumber}
            description={description}
            userImage={userImage}
          />
          <PhoneInput
            handlePhone={handlePhone}
            setActiveAnimation={setActiveAnimation}
            activeAnimation={activeAnimation}
            description={description}
            userImage={userImage}
            city={city}
          />
        </div>
        <div className={style.textarea_container}>
          <textarea
            name="message"
            placeholder="Descripcion"
            onChange={(e) => {
              handleTextareaData(e);
            }}
            className={style.textarea_about}
          />
          <FormatTooltip type="email" condition={textareaError} />
        </div>

        <div className={style.div_buttons}>
          <span className={style.span_skip} onClick={(e) => skipProcess(e)}>
            Saltar
          </span>
          <button
            onClick={makeRequest}
            className={activeAnimation ? style.button_save : style.button_skip}
            disabled={activeButton}
          >
            Guardar
          </button>
        </div>
      </form>
    </section>
  );
};

export default SignUpSecondModule;
