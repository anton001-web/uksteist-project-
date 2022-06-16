import React from 'react'
import s from '../styles/_section2.module.scss'

const areasInfo = [
    {title: 'Лес', image: './assets/images/forest.png', subTitle: 'Жизнь в окружении леса'},
    {title: 'Море', image: './assets/images/sea.png', subTitle: 'В 311 метрах от дома ваше море'},
    {title: 'Воздух', image: './assets/images/air.png', subTitle: 'Вдыхайте морской и хвойный воздух'}
]

const houses = [
    {title: '1', data: 'one'},
    {title: '2', data: 'two'},
    {title: '3', data: 'thee'},
    {title: '4', data: 'four'},
    {title: '5', data: 'five'},
    {title: '6', data: 'six'},
    {title: '7', data: 'seven'},
    {title: '8', data: 'eight'},
    {title: '9', data: 'nine'},
    {title: '10', data: 'ten'},
    {title: '11', data: 'eleven'},
]

const Section2 = () => {
    return (
        <section className={s.section}>
            <div className={s.section_content}>
                <div className={s.section_areas}>
                    {
                        areasInfo && areasInfo.map((item, index) => (
                            <div className={s.areas_item} key={index}>
                                <img src={item.image} alt="" width='50px' height='50px'/>
                                <h2 className={s.item_title}>{item.title}</h2>
                                <h3 className={s.item_subTitle}>{item.subTitle}</h3>
                            </div>
                        ))
                    }
                </div>
                <div className={s.section_seaInfo}>
                    <div className={s.seaInfo}>
                        <span>311 м</span>
                        <img src="./assets/images/doubleArrow.png" alt=""/>
                        <span>Море</span>
                    </div>
                </div>
                <div className={s.section_houses}>
                    <div className={s.houses_block}>
                        {
                            houses && houses.map(item => (
                                <div className={s.house} data-house={item.data}>
                                    {item.title}
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Section2