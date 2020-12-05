import { useState } from 'react';

export const useUserData = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [description, setDesciption] = useState('');
  const [city, setCity] = useState('');
  const [userImage, setImage] = useState('');
  const [activeAnimation, setActiveAnimation] = useState<boolean>();

  function handleImage(e) {
    const reader = new FileReader();

    reader.onload = () => {
      if (reader.readyState === 2) {
        setImage(reader.result);
        setActiveAnimation(true);
      }
    };

    reader.readAsDataURL(e.target.files[0]);
  }

  function handleCity(city: string): void {
    setActiveAnimation(true);
    setCity(city);
  }

  function handlePhone(value: string): void {
    setPhoneNumber(value);
  }

  function handleDescription(value: string): void {
    setDesciption(value);
  }

  function makeRequest(e) {
    e.preventDefault();
    console.log('CONTINUE');
  }

  return {
    handleImage,
    handleCity,
    handlePhone,
    phoneNumber,
    description,
    city,
    userImage,
    handleDescription,
    makeRequest,
    setActiveAnimation,
    activeAnimation,
  };
};
