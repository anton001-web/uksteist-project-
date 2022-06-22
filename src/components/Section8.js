import React from 'react'
import s from '../styles/_section8.module.scss';

const team = [
    {title: 'Разработка и концепция проекта', name: 'TEAM MEDIA OU В ЛИЦЕ DMITRI VAIN'},
    {title: 'Финансирование проекта', name: 'ESTATEGURU OU'},
    {title: 'Дендрология', name: 'AQUAPLANT DESIGN OU'},
    {title: 'Геодезия', name: 'GEODEESIA24 OU'},
    {title: 'Геология', name: 'MAVES OU'},
    {title: 'Проектирование коммуникаций и дорог', name: 'SKEPAST&PUHKIM OU'},
    {title: 'Визуализация и проектирование', name: 'DMITRI KULAKOV'},
    {title: 'Веб дизайн и фото ', name: 'ALEKSANDR GRUSHA, SERGEY SMIRNOV'},
    {title: 'Строительство Дорог и коммуникаций', name: 'В ПРОЦЕССЕ ВЫБОРА'},
    {title: 'Архитекрутное бюро', name: 'VNDL ARHITEKTUUR OU'},
    {title: 'Продажа участков', name: 'SVETLANA DAVIDOVSKI'}
]

const Section8 = () => {
    return (
        <section className={s.section}>
            <div className={s.section_container}>
                <div className={s.section_content}>
                    <div className={s.section_header}>
                        <h1 className={s.section_title}>Команда</h1>
                        <h2 className={s.section_subTitle}>Участок бережно подготавливают:</h2>
                    </div>
                    <div className={s.section_team}>
                        <div className={s.sectionTeam_block}>
                            <ul className={s.section_list}>
                                {
                                    team && team.map((item, ind) => (
                                        <li
                                            key={ind}
                                            className={s.list_item}
                                        >
                                            <p className={s.item_text}>
                                                <span className={s.item_headerText}>{ind + 1}.{item.title}</span>
                                                <span className={s.item_subText}>{item.name}</span>
                                            </p>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Section8