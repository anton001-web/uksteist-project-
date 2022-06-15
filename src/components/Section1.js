import React from 'react'
import s from '../styles/_section1.module.scss'
import classNames from "classnames";

const Section1 = () => {
    return (
        <section className={s.section}>
            <div className={s.section_block}>
                <div className={s.eleven}>
                    <div className={s.one}>

                    </div>
                    <div className={s.one}>

                    </div>
                </div>
                <div className={s.sectionInfo_block}>
                    <div className={s.section_info}>
                        <h2 className={s.section_title}>Жилой район в Виймиси</h2>
                        <span className={s.section_subTitle}>Одинадцать приватных участков с собственным лесом</span>
                        <button className={s.areas_btn}>Участки</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Section1