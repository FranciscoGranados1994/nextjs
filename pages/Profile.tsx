import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import MainContent from '../src/components/Main'
import style from '../styles/Profile/profile.module.css'
import ProfileImage from '../public/ProfileImage.svg'

const Profile: React.FC = () => {
    const dashValue = 150;

    const [activeRanking, setActiveRanking] = useState<boolean>(false)
    useEffect(() => {
        let displayScore =()=>{
            setTimeout(()=>{
                setActiveRanking(true)
            },300)
        }

        displayScore()
        /* 
        setActiveRanking(true) */
    }, [])

    return (
        <MainContent>
            <main className={style.main}>
                <Link href="/Home">Back to Home</Link>
                <section className={style.section_info}>
                    <div className={style.div_edit}>
                        <ProfileImage height={130} className={style.svg_image} />
                        <input value="francisco" className={style.input_name} />
                        <input value="francisco1994" className={style.input_username} />
                        <textarea className={style.textarea_bio}>Software eng living at Mexico</textarea>
                        <button className={style.button_edit}>Edit</button>
                    </div>
                    <div className={style.div_reputation}>

                        <div className={style.div_ranking}>
                            <svg className={style.svg}>

                                <defs>
                                    <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                        <stop offset="0%" stop-color="#1a2980" />
                                        <stop offset="100%" stop-color="#26d0ce" />
                                    </linearGradient>
                                </defs>
                                <circle className={style.stroke_2} cx="50" cy="50" r="40" stroke-width="10" fill="white" fill-opacity="0.5" />
                                <circle className={activeRanking?style.stroke_1_active:style.stroke_1} cx="50" cy="50" r="40" stroke="url(#gradient)"  stroke-width="10" fill="white" fill-opacity="0.5" />
                            </svg>
                            <span className={style.span_score}>7.5</span>
                        </div>

                        <span className={style.span_rides}>Rides offered: 3</span>
                        <span className={style.span_rides}>Rides Taken: 2</span>

                    </div>
                </section>

            </main>
        </MainContent>

    )
}

export default Profile