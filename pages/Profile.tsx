import Link from 'next/link'
import React from 'react'
import MainContent from '../src/components/Main'
import style from '../styles/Profile/profile.module.css'

const Profile: React.FC = () => {
    return (
        <MainContent>
            <main className={style.main}>
                <Link href="/Home">Back to Home</Link>
                <section className={style.section_info}>
                    <div className={style.div_edit}>
                        <span>Imagen</span>
                        <span>Name: Francisco</span>
                        <span>Biografia: Software engeenie</span>
                    </div>
                    <div className={style.div_reputation}>
                        <div>Reputacion</div>
                        <span>Rides taken</span>
                        <span>Rides offered</span>
                    </div>
                </section>

            </main>
        </MainContent>

    )
}

export default Profile