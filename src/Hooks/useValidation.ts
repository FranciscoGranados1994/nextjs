import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import {
  KeyType,
  stateDataInterface,
  validationInterface,
} from '../Hooks/types/hooks.types';

export const useValidation = (
  stateSchema: Record<KeyType, stateDataInterface>,
  validationSchema: Record<KeyType, validationInterface> = {}
) => {
  const [state, setState] = useState<Record<KeyType, stateDataInterface>>(
    stateSchema
  );
  const [isDirty, setIsDirty] = useState<boolean>(false);
  const [disable, setDisable] = useState<boolean>(true);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [values, setValues] = useState<Record<string, string>>({});
  const [dirty, setDirty] = useState<Record<string, boolean>>({});
  const [signUpSection, setSignUpSection] = useState<boolean>(false);
  const [authSection, setAuthSection] = useState<string>('signup');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorsRequest, setErrorsRequest] = useState<Record<string, string>>(
    null
  );
  const router = useRouter();

  useEffect(() => {
    const validateErrors = async () => {
      /* verify whether all vinput were typed  */

      let noDirty: boolean;
      let noErrors: boolean;
      let dirtyValue: boolean;
      let errorValue: string;

      noDirty = await Object.keys(validationSchema).some((property) => {
        dirtyValue = dirty[property];
        return !dirtyValue;
      });

      /* verify whether there are errors */
      noErrors = await Object.keys(validationSchema).some((property) => {
        errorValue = errors[property];
        return errorValue !== null;
      });

      await setDisable(!noDirty && !noErrors ? false : true);
    };

    validateErrors();
  }, [dirty]);

  function verifyRegExp(pattern, value) {
    const testRegexp = new RegExp(pattern);
    const testResult: boolean = testRegexp.test(value);
    return testResult;
  }

  async function validateForm(name: string, value: string) {
    /* if validation schema doesnt have the current property just return */
    if (!validationSchema[name]) return;

    const { required, validator } = validationSchema[name];
    const { regexp, error: errorLabel } = validator;

    const isInitialized: boolean = !value && required ? false : true;

    let error: string;

    if (!isInitialized) return error;

    const testRegExp: boolean = await verifyRegExp(regexp, value);

    error = !testRegExp ? errorLabel : null;

    return error;
  }

  async function checkOnBlur(e: React.FocusEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    const error = await validateForm(name, value);
    setErrors((prevValues) => ({ ...prevValues, [name]: error }));
  }

  async function updateProperties(
    name: string,
    error: string,
    value: string,
    dirtyValue: boolean
  ): Promise<void> {
    /* Update properties individually */
    await Promise.all([
      setErrors((prevValues) => ({ ...prevValues, [name]: error })),
      setValues((prevValues) => ({ ...prevValues, [name]: value })),
      setDirty((prevValues) => ({ ...prevValues, [name]: dirtyValue })),
    ])
      .then(() => {
        return Promise.resolve();
      })
      .catch((err) => {
        console.error(err);
      });
  }

  async function handleData(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    /* remove errors messages */
    setErrorsRequest(null);

    /* Verify if is an empty value */
    const dirtyValue: boolean = value.length < 1 ? false : true;

    /* test regex and assign error text to properties */
    const error = await validateForm(name, value);

    await updateProperties(name, error, value, dirtyValue);

    await setState({
      ...state,
      [name]: {
        value,
        error,
      },
    });

    return;
  }

  async function handleLoginRequest(e) {
    e.preventDefault();

    await setIsLoading(true);
    router.push('/Home');
  }

  async function handleResetRequest(e) {
    e.preventDefault();

    await setIsLoading(true);
  }

  async function handleSignUpRequest(e) {
    e.preventDefault();

    /*function that handles data and makes http request to sign up*/
    await setIsLoading(true);

    /* return 200 status */

    /* pending: make the pettion */

    await setSignUpSection(true);

    /* return errors */
    /*   await setErrorsRequest({
          'email':'this email is already used by another user'
      })  
      await setIsLoading(false)  */

    return;
  }

  async function submitData(e: React.MouseEvent<HTMLFormElement>) {
    e.preventDefault();
    if (disable === true) return;

    /* Verify the section that was typed */
    switch (authSection) {
      case 'signup':
        handleSignUpRequest(e);
        break;
      case 'login':
        handleLoginRequest(e);
        break;
      default:
        handleResetRequest(e);
        break;
    }
  }

  return {
    handleData,
    submitData,
    checkOnBlur,
    errors,
    values,
    dirty,
    disable,
    setValues,
    setErrors,
    setDirty,
    signUpSection,
    state,
    setState,
    setAuthSection,
    authSection,
    isLoading,
    setIsLoading,
    errorsRequest,
    setErrorsRequest,
  };
};
