import { Router } from 'next/router';
import { useState } from 'react';
import { UserRequest } from '../services/User.service';
import { useRouter } from 'next/router';

export const useUserData = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [description, setDesciption] = useState('');
  const [city, setCity] = useState('');
  const [userImage, setImage] = useState('');
  const [activeAnimation, setActiveAnimation] = useState<boolean>();
  const router = useRouter();

  function handleImage(e) {
    /* const reader = new FileReader();

    reader.onload = () => {
      if (reader.readyState === 2) {
        setImage(reader.result);
        setActiveAnimation(true);
      }
    };

    reader.readAsDataURL(e.target.files[0]);
 */
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

  async function makeRequest(e) {
    e.preventDefault();

    const userData = {
      biography: description,
    };
    const result = await UserRequest.updateProfile(userData);
    const { data, status } = result;
    if (status === 201) {
      router.push('/Home');
    }

    return;
    console.log('Result => ', result);
    console.log(description);
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
