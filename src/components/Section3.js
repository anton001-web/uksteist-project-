import React from 'react'
import s from '../styles/_section3.module.scss'

const Section3 = () => {
    return (
        <section className={s.section}>
            <div className={s.section_container}>
                <div className={s.section_content}>
                    <div className={s.sectionTitle_block}>
                        <h2 className={s.section_title}>Место для <br/> вашего дома:</h2>
                    </div>
                    <div className={s.section_info}>
                        <div className={s.sectionImg_block}>
                            <img src="./assets/images/housePlace.png " alt=""/>
                        </div>
                        <div className={s.section_data}>
                            <ul className={s.section_list}>
                                <li className={s.list_item}>Возможно тут вы построите свой дом</li>
                                <li className={s.list_item}>В окружении заповедного леса</li>
                                <li className={s.list_item}>В тихом и спокойном месте</li>
                                <li className={s.list_item}>В 22 минутах от Таллинна</li>
                                <li className={s.list_item}>В 311 метрах от моря</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Section3