import { POINT_CONVERSION_COMPRESSED } from 'constants';
import { useState, useEffect, useRef } from 'react';

export function useComponentVisible() {
  const [isComponentVisible, setIsComponentVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);


  const handleClickOutside = (event: Event) => {

  /*    if (ref.current && ) {
            setIsComponentVisible(true);
     } */

     if(!ref.current.contains(event.target as Node)){
       // setIsComponentVisible()
     }
  };

  function setModal() {
      setIsComponentVisible(!isComponentVisible)
   
  }

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return { ref, isComponentVisible, setIsComponentVisible, setModal };
}
