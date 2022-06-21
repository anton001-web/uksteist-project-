import React from 'react'
import s from '../styles/_section7.module.scss';
import ReactTooltip from "react-tooltip";

const tooltipData = [
    {text: 'Геология', id: 'geoL', place: 'top'},
    {text: 'Геодезия', id: 'geoD', place: 'top'},
    {text: 'Дендрология', id: 'denrd', place: 'top'},
    {text: 'Проектирование комунникаций', id: 'komuP', place: 'top'},
    {text: 'Проектирование дорог', id: 'komuD', place: 'top'},
    {text: 'Подготовка участков', id: 'podU', place: 'top'},
    {text: 'Строительство коммуникаций', id: 'stroK', place: 'top'},
    {text: 'Строительство дорог', id: 'stroD', place: 'top'}
]

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
                                    <li className={s.stage_stages} data-tip data-for='geoL'><span className={s.innerStage_subTitle}>Геология</span></li>
                                    <li className={s.stage_stages} data-tip data-for='geoD'><span className={s.innerStage_subTitle}>Геодезия</span></li>
                                    <li className={s.stage_stages} data-tip data-for='denrd'><span className={s.innerStage_subTitle}>Дендрология</span></li>
                                </ul>
                            </li>
                            <li className={s.stage}>
                                <ul className={s.inner_stage}>
                                    <li className={s.stage_stages} data-tip data-for='komuP'><span className={s.innerStage_subTitle}>Проектирование коммуникаций</span></li>
                                    <li className={s.stage_stages} data-tip data-for='komuD'><span className={s.innerStage_subTitle}>Проектирование дорог</span></li>
                                </ul>
                                <p className={s.stage_title} data-title>Проектирование дорог</p>
                            </li>
                            <li className={s.stage}>
                                <ul className={s.inner_stage}>
                                    <li className={s.stage_stages} data-tip data-for='podU'><span className={s.innerStage_subTitle}>Подготовка участков</span></li>
                                    <li className={s.stage_stages} data-tip data-for='stroK'><span className={s.innerStage_subTitle}>Строительство коммуникаций</span></li>
                                    <li className={s.stage_stages} data-tip data-for='stroD'><span className={s.innerStage_subTitle}>Строительство дорог</span></li>
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
                            {
                                tooltipData && tooltipData.map((tooltip, index) => (
                                    <ReactTooltip id={tooltip.id} place={tooltip.place} key={index}>
                                        {tooltip.text}
                                    </ReactTooltip>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Section7