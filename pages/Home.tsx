import React from 'react'
import MainSection from '../src/components/Home/main.section'
import MainContent from '../src/components/Main'
import {privateRoute, AuthProps} from '../src/components/general/private.routes'

const Home: React.FC = () => {
    return (
        <MainContent>     

            <MainSection />  
            

        </MainContent>
    )
}

export default privateRoute(Home)