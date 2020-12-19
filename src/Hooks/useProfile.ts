import {useState} from 'react'

export const useProfile=()=>{
   const [activeModal, setActiveModal] = useState<boolean>(false) 
    
   return {
       activeModal, 
       setActiveModal
   }
}