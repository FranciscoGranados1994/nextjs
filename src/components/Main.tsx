import React from 'react'
import Navbar from './general/Navbar'
import Footer from './general/Footer'
import style from '../../styles/General/Navbar.module.css'
const MainContent: React.FC = ({ children }) => {
    return (
        <div className={style.div}>
            <Navbar />
            
                {children}
          
            <Footer />
        </div>
    )
}

export default MainContent