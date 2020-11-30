/* React */
import React, { useState, useEffect } from 'react';

/* Style */
import style from '../../../styles/Login.module.css';
import Lottie from 'react-lottie';
import checkstatus from '../../../styles/statics/checkstatus.json';

/* Hooks */
import { useValidation } from '../../Hooks/useValidation';
import {
  stateDataInterface,
  KeyType,
  validationInterface,
} from '../../Types/hooks.types';

/* Components */
import Spiner from '../general/Spinner';
import SignUpSecondModule from '../Authentication/SignupModule';

const FormatRules: React.FC = ({ type, topPosition, condition }) => {
  /* tootltip wich render a series of rules to follow */
  return condition ? (
    <div className={topPosition ? style.tooltip_up : style.tooltip}>
      <div className={style.div_texts}>
        <a className={style.a_example}> Verify the format</a>
      </div>

      <div className={topPosition ? style.right_up : style.right}>
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

const TooltipErrors: React.FC = ({ errorsRequest }) => {
  return errorsRequest !== null ? (
    <div className={style.div_error}>{errorsRequest.email}</div>
  ) : null;
};

const ErrorMessage: React.FC = ({ condition, message }) => {
  return condition ? (
    <div className={style.div_error_response}>
     {message}
    </div>
  ) : null
}

const CheckerAnimation: React.FC = ({ condition }) => {
  const checkAnimation = {
    loop: false,
    autoplay: true,
    animationData: checkstatus,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return condition === null ? (
    <div className={style.div_animation}>
      <Lottie options={checkAnimation} height={100} width={50} />
    </div>
  ) : null;
};

const AuthSection: React.FC = ({
  setSection,
  state,
  submitData,
  handleData,
  checkOnBlur,
  errors,
  styleClass,
  disable,
  currentSection,
  isLoading,
  errorsRequest,
}) => {
  /* render the first section for authentication where is login,signup and reset section */

  function setInputStyle() {
    /* set style for inpus that can handle errors */
    let styleClass;
    if (errorsRequest !== null) {
      styleClass = style.input_error;
    } else if (isLoading) {
      styleClass = style.input_wait;
    } else {
      styleClass = style.input;
    }
    return styleClass;
  }

  useEffect(() => {
    console.log('Error Request => ', errorsRequest)
  }, [errorsRequest])

  return (
    <div>
      <section className={style.section}>
        <a
          className={
            currentSection === 'Sign Up' ? style.anchor_selected : style.anchor
          }
          onClick={() => {
            setSection('signup');
          }}
        >
          Sign up
        </a>
        <a
          className={
            currentSection === 'Log In' ? style.anchor_selected : style.anchor
          }
          onClick={() => {
            setSection('login');
          }}
        >
          Log in
        </a>
        <a
          className={
            currentSection === 'Reset' ? style.anchor_selected : style.anchor
          }
          onClick={() => {
            setSection('reset');
          }}
        >
          Reset
        </a>
      </section>
      <div className={style.container_center}>
        <form className={style.form} onSubmit={(e) => submitData(e)}>
          <section className={styleClass}>
            <div className={style.div_login}>
              <input
                placeholder="Email"
                name="email"
                className={isLoading ? style.input_wait : style.input}
                onChange={handleData}
                autoComplete="off"
                onBlur={checkOnBlur}
                value={state.email.value}
                disabled={isLoading}
              />
              <FormatRules condition={errors.email} type="email" topPosition />
    {/*           <TooltipErrors errorsRequest={errorsRequest} /> */}

              <CheckerAnimation condition={errors.email} />

              
             {errorsRequest !== null ? (
                <h2  className={style.div_error_response}>{errorsRequest.email}</h2>
                ) : null} 
            </div>
            <div className={style.div_login}>
              <input
                name="password"
                placeholder="Password"
                className={isLoading ? style.input_wait : style.input}
                onChange={handleData}
                autoComplete="off"
                onBlur={checkOnBlur}
                value={state.password.value}
                disabled={isLoading}
              />
              <FormatRules
                condition={errors.password}
                type="password"
                topPosition
              />
               <CheckerAnimation condition={errors.password} />

               {errorsRequest !== null ? (
                <h2  className={style.div_error_response}>{errorsRequest.password}</h2>
                ) : null} 


              {errorsRequest !== null ? (
                <h2  className={style.div_error_response}>{errorsRequest.non_field_errors}</h2>
                ) : null} 



            </div>

            <div className={style.div_login}>
              <input
                name="passwordComfirmation"
                placeholder="Password Comfirmation"
                className={isLoading ? style.input_wait : style.input}
                onChange={handleData}
                autoComplete="off"
                onBlur={checkOnBlur}
                value={state.passwordComfirmation.value}
                disabled={isLoading}
              />
              <FormatRules
                condition={errors.passwordComfirmation}
                type="passwordComfirmation"
                topPosition
              />
              <CheckerAnimation condition={errors.passwordComfirmation} />

              {errorsRequest !== null ? (
                <h2  className={style.div_error_response}>{errorsRequest.password_confirmation}</h2>
                ) : null} 


              {errorsRequest !== null ? (
                <h2  className={style.div_error_response}>{errorsRequest.non_field_errors}</h2>
                ) : null} 



            </div>

            <div className={style.div_login}>
              <input
                name="lastName"
                placeholder="Last Name"
                className={isLoading ? style.input_wait : style.input}
                onChange={handleData}
                autoComplete="off"
                onBlur={checkOnBlur}
                value={state.lastName.value}
                disabled={isLoading}
              />
              <FormatRules
                condition={errors.lastName}
                type="lastname"
                topPosition
              />
              <CheckerAnimation condition={errors.lastName} />
 
              {errorsRequest !== null ? (
                <h2 className={style.div_error_response}>{errorsRequest.username}</h2>
              ) : null} 

            </div>
          </section>
          <section className={style.section_buttons}>
            <button className={style.button} disabled={disable}>
              {isLoading ? <Spiner /> : currentSection}
            </button>
          </section>
        </form>
      </div>
    </div>
  );
};

const Login: React.FC = () => {
  /* set component state */
  const [styleClass, setStyleClass] = useState<string>(style.section_signup);
  const [currentSection, setCurrentSection] = useState<string>('Sign Up');

  const [stateSchema, setStateSchema] = useState<
    Record<KeyType, stateDataInterface>
  >({
    email: { value: '', error: '' },
    password: { value: '', error: '' },
    passwordComfirmation: { value: '', error: '' },
    lastName: { value: '', error: '' },
  });

  const [validateSchema, setValidateSchema] = useState<
    Record<KeyType, validationInterface>
  >({
    email: {
      required: true,
      validator: {
        regexp: /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
        error: 'The email format is wrong',
      },
    },
    password: {
      required: true,
      validator: {
        regexp: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/,
        error: 'The password format is wrong',
      },
    },
    passwordComfirmation: {
      required: true,
      validator: {
        regexp: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/,
        error: 'The password format is wrong',
      },
    },
    lastName: {
      required: true,
      validator: {
        regexp: /^[a-zA-Z]+$/,
        error: 'The last name format is wrong',
      },
    },
  });

  /* Intantiate hook's methods and variables */
  const {
    handleData,
    disable,
    submitData,
    checkOnBlur,
    errors,
    setDirty,
    setErrors,
    setValues,
    state,
    setState,
    setAuthSection,
    authSection,
    signUpSection,
    isLoading,
    setIsLoading,
    errorsRequest,
    setErrorsRequest,
  } = useValidation(stateSchema, validateSchema);

  async function setSignUpSchema(): Promise<void> {
    /* Modify css class, name, and state schema when user selects sign up */
    await Promise.all([
      setStyleClass(style.section_signup),
      setCurrentSection('Sign Up'),
      setValidateSchema({
        email: {
          required: true,
          validator: {
            regexp: /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
            error: 'Invalid email format.',
          },
        },
        password: {
          required: true,
          validator: {
            regexp: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/,
            error: 'Invalid password format.',
          },
        },
        passwordComfirmation: {
          required: true,
          validator: {
            regexp: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/,
            error: 'The password format is wrong',
          },
        },
        lastName: {
          required: true,
          validator: {
            regexp: /^[a-zA-Z]+$/,
            error: 'Invalid username format.',
          },
        },
      }),
      setStateSchema({
        email: { value: '', error: '' },
        password: { value: '', error: '' },
        passwordComfirmation: { value: '', error: '' },
        lastName: { value: '', error: '' },
      }),
    ]);
  }

  async function setLogInSchema(): Promise<void> {
    /* Modify css class, name, and state scheme when user selects Log In */
    await Promise.all([
      setStyleClass(style.section_login),
      setCurrentSection('Log In'),
      setValidateSchema({
        email: {
          required: true,
          validator: {
            regexp: /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
            error: 'Invalid email format.',
          },
        },
        password: {
          required: true,
          validator: {
            regexp: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/,
            error: 'Invalid password format.',
          },
        },
      }),
      setStateSchema({
        email: { value: '', error: '' },
        password: { value: '', error: '' },
        passwordComfirmation: { value: '', error: '' },
        lastName: { value: '', error: '' },
      }),
    ]);
  }

  async function setResetSchema(): Promise<void> {
    /* Modify css class, name, and state scheme when user selects Reset */
    await Promise.all([
      setStyleClass(style.section_reset),
      setCurrentSection('Reset'),
      setValidateSchema({
        email: {
          required: true,
          validator: {
            regexp: /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
            error: 'Invalid email format.',
          },
        },
      }),
      setStateSchema({
        email: { value: '', error: '' },
        password: { value: '', error: '' },
        passwordComfirmation: { value: '', error: '' },
        lastName: { value: '', error: '' },
      }),
    ]);
  }

  async function setSection(section: string): Promise<void> {
    /* Reset these properties when user changes among options */
    await Promise.all([
      setIsLoading(false),
      setDirty({}),
      setErrors({}),
      setValues({}),
      setState(stateSchema),
      setAuthSection(section),
    ]);

    /* dispatch function according option selected by user */
    switch (section) {
      case 'signup':
        setSignUpSchema();
        break;
      case 'login':
        setLogInSchema();
        break;
      default:
        setResetSchema();
        break;
    }
  }

  return (
    /* render main auth section or optional section according to the process */
    <div
      className={!signUpSection ? style.container_form : style.container_large}
    >
      {!signUpSection ? (
        <AuthSection
          disable={disable}
          currentSection={currentSection}
          styleClass={styleClass}
          submitData={submitData}
          handleData={handleData}
          checkOnBlur={checkOnBlur}
          errors={errors}
          state={state}
          setSection={setSection}
          isLoading={isLoading}
          errorsRequest={errorsRequest}
        />
      ) : (
          <SignUpSecondModule />
        )}
    </div>
  );
};

export default Login;
