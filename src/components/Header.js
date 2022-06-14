import React from 'react'
import s from '../styles/_header.module.scss'
import classNames from "classnames";

const Header = () => {
    return (
        <header className={s.header}>
            <div className={s.header_container}>
                <div className={s.header_up}>
                    <div className={s.header__social}>
                        <img src="./assets/images/inst.png" alt="instagram" className={classNames(s.social_media, s.social_inst)} data-social='inst'/>
                        <img src="./assets/images/facebook.png" alt="facebook" className={classNames(s.social_media, s.social_facebook)}/>
                    </div>
                    <div className={s.logo_block}>
                        <img src="./assets/images/logo.png" alt="logo" className={s.logo}/>
                    </div>
                    <div className={s.settings}>
                        <img src="./assets/images/phone.png" alt="call" className={s.call}/>
                    </div>
                </div>
                <div className={s.header_down}>
                    <div className={s.list_block}>
                        <ul className={s.header_list}>
                            <li className={s.headerList__item}>Участки</li>
                            <li className={s.headerList__item}>Место</li>
                            <li className={s.headerList__item}>История</li>
                            <li className={s.headerList__item}>Этапы</li>
                            <li className={s.headerList__item}>Команда</li>
                            <li className={s.headerList__item}>Документы</li>
                            <li className={s.headerList__item}>Прогулка</li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header