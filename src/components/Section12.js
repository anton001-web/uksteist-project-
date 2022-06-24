import React from 'react'
import s from '../styles/_section12.module.scss'

const Section12 = () => {
    return (
        <section className={s.section}>
            <div className={s.container}>
                <div className={s.section_content}>
                    <h1 className={s.section_titleHidden}>Ваш персональный помошник</h1>
                    <div className={s.sectionImg_block}>
                        <img src="./assets/images/staff.png" alt=""/>
                    </div>
                    <div className={s.section_info}>
                        <h1 className={s.section_title}>Ваш персональный помошник</h1>
                        <p className={s.staff_name}>svetlana davidovski</p>
                        <p className={s.staff_info}><img src="./assets/images/mailIco.png" className={s.ico}/> <span>svetlana@skinnisvara.ee</span></p>
                        <p className={s.staff_info}><img src="./assets/images/phoneIco.png" className={s.ico}/> <span>+372 5813 0166</span></p>
                        <div className={s.social_list}>
                            <img src="./assets/images/viberIco.png" className={s.social}/>
                            <img src="./assets/images/whatsAppIco.png" className={s.social}/>
                            <img src="./assets/images/tgIco.png" className={s.social}/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Section12