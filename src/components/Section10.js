import React from 'react'
import s from '../styles/_section10.module.scss'
import useMatchMedia from "use-match-media-hook";

const queries = [
    '(max-width: 767px)'
]

const Section10 = () => {
    const [tablet] = useMatchMedia(queries)

    return (
        <section className={s.section}>
            <div className={s.container}>
                <div className={s.section_content}>
                    <div className={s.section_header}>
                        <h1 className={s.section_title}>Место</h1>
                        <a target="_blank" href="https://www.google.com/maps/place/Piirikivi+tee+15,+Leppneeme,+74009+Harju+maakond,+%D0%AD%D1%81%D1%82%D0%BE%D0%BD%D0%B8%D1%8F/@59.5365822,24.8813295,14z/data=!4m5!3m4!1s0x46928d3c9f682e53:0x56221bed36c272ba!8m2!3d59.5422197!4d24.8809969" className={s.section_link}><img src="./assets/images/mapIco.png" alt="ico"/> <p>Piirikivi tee 15</p></a>
                    </div>
                    <div className={s.sectionMap_block}>
                        {tablet ? (
                            <img src="./assets/images/map_mob.png" alt="map" />
                        ) : <img src="./assets/images/map.png" alt="map" />}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Section10