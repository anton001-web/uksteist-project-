import React from 'react'
import s from '../styles/_section11.module.scss'

const Section11 = () => {
    return (
        <section className={s.section}>
            <div className={s.container}>
                <div className={s.section_content}>
                    <h1 className={s.section_title}>Прогулка</h1>
                    <h2 className={s.section_subTitle}>Запланируйте прогулку на выходные по этому чудесному месту</h2>
                    <button className={s.section_btn}>Построить маршрут</button>
                </div>
            </div>
            <div className={s.videoBlock}>
                <video className={s.video} src="./assets/images/forest.mp4" autoPlay loop muted></video>
            </div>
        </section>
    )
}

export default Section11