import React from 'react'
import Navbar from '../src/components/general/Navbar'
import Footer from '../src/components/general/Footer'
import MainSection from '../src/components/Home/main.section'

const Home: React.FC = () => {
    return (
        <section>
            <Navbar />
            {/* this content is going to change according to rul route */}

            <MainSection />
            {/*  */}

            <Footer />
        </section>
    )
}

export default Home