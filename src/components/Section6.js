import React, {useState} from 'react'
import s from '../styles/_section6.module.scss'
import {sliderData} from "./utils/sliderData";
import classNames from "classnames";

const sliderTitles = [
    {title: 'Новые дороги', id: 1, data: 'active'},
    {title: 'Уличное освещение', id: 2},
    {title: 'Маяк', id: 3},
    {title: 'Забор', id: 4},
    {title: 'Общая зона', id: 5},
    {title: 'Скамейки с крышей', id: 6},
    {title: 'Дорожка', id: 7},
    {title: 'Детская площадка', id: 8},
    {title: 'Песочница', id: 9},
    {title: 'Входная группа', id: 10},
    {title: 'Комунникации', id: 11},
    {title: 'Лес', id: 12},
    {title: 'И ваш участок земли', id: 13}
]

const Section6 = () => {
    const [current, setCurrent] = useState(0)
    const slides = sliderData.length

    const prevSlide = () => setCurrent(current === 0 ? slides - 1 : current - 1)
    const nextSlide = () => setCurrent(current === slides - 1 ? 0 : current + 1)

    const setSlide = (e) => {
        const slide = parseInt(e.target.dataset.slide)

        setCurrent(slide - 1)
    }

    return (
        <section className={s.section}>
            <div className={s.section_container}>
                <div className={s.section_content}>
                    <div className={s.sectionTitles_block}>
                        <div className={s.sectionTitle_block}> <h1 className={s.section_title}>Инфраструктура:</h1> </div>
                        <div className={s.section_subTitles}>
                            <ul className={s.section_list}>
                                {sliderTitles && sliderTitles.map((item, index) => (
                                    <li data-active={item.data} data-title={item.title} data-slide={item.id} className={s.list_item} onClick={setSlide}>{item.title}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className={s.sectionSlider_block}>
                        <div className={s.sectionSlider_container}>
                            {
                                sliderData.map((item, ind) => (
                                    <div className={ind === current ? classNames(s.slide, s.active) : s.slide} key={ind}>
                                        {
                                            ind  === current && (
                                                <img src={item.img} className={s.sliderImg}/>
                                            )
                                        }
                                    </div>
                                ))
                            }
                        </div>
                        <div className={s.sectionSlider_controls}>
                            <div className={s.slider_controls}>
                                <h1 className={s.slide_title}>{sliderData[current].title}</h1>
                                <h2 className={s.slide_subTitle}>{sliderData[current].subTitle}</h2>
                                <div className={s.slider_btns}>
                                    <button className={s.slider_btn} onClick={prevSlide}>
                                        <img src="./assets/images/less.png" alt=""/>
                                    </button>
                                    <button className={s.slider_btn} onClick={nextSlide}>
                                    <img src="./assets/images/more.png" alt=""/>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Section6