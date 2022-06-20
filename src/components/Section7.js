import React from 'react'
import s from '../styles/_section7.module.scss';

const Section7 = () => {
    return (
        <section className={s.section}>
            <div className={s.section_container}>
                <div className={s.section_content}>
                    <div className={s.sectionTitle_block}>
                        <h1 className={s.section_title}>Этапы</h1>
                        <h2 className={s.section_subTitle}>Срок реализации</h2>
                    </div>
                    <div className={s.section_stages}>
                        <ul className={s.stages}>
                            <li className={s.stage}>
                                <p className={s.stage_subTitle} data-start>
                                    <span className={s.start_date}>01.06.2021</span>
                                    <span className={s.percentStart}>0%</span>
                                </p>
                                <p className={s.stage_title}>Подготовительные работы</p>
                                <ul className={s.inner_stage}>
                                    <li className={s.stage_stages}></li>
                                    <li className={s.stage_stages}></li>
                                    <li className={s.stage_stages}></li>
                                </ul>
                            </li>
                            <li className={s.stage}>
                                <ul className={s.inner_stage}>
                                    <li className={s.stage_stages}></li>
                                    <li className={s.stage_stages}></li>
                                </ul>
                                <p className={s.stage_title} data-title>Проектирование дорог</p>
                            </li>
                            <li className={s.stage}>
                                <ul className={s.inner_stage}>
                                    <li className={s.stage_stages}></li>
                                    <li className={s.stage_stages}></li>
                                    <li className={s.stage_stages}></li>
                                </ul>
                                <p className={s.stage_title} data-title>Строительство дорог</p>
                            </li>
                            <li className={s.stage}>
                                <p className={s.stage_subTitle} data-end>
                                    <span className={s.start_date}>01.02.2023</span>
                                    <span className={s.percentStart}>100%</span>
                                </p>
                                <p className={s.stage_title}>Инфраструктура готова</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Section7