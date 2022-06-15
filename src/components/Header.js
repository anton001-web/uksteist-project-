import React, {useEffect} from 'react'
import s from '../styles/_header.module.scss'
import {useDispatch, useSelector} from "react-redux";
import classNames from "classnames";
import {toggleBurger} from "../redux/actions";
import Select from "react-select/base";

const languagesOpt = [{
    value: 'ru',
    label: 'Ru'
}, {
    value: 'eng',
    label: 'Eng'
}
]


const Header = () => {
    const dispatch = useDispatch()
    const menuRef = React.createRef()
    const burgerBtn = React.createRef()

    const handleBurger = () => {
        dispatch(toggleBurger())
    }

    const {visible} = useSelector((state) => {
        const {burger} = state
        return burger
    })

    useEffect(() => {
        if(visible) {
            menuRef.current.style.left = '0'
            burgerBtn.current.classList.add(s.active)

        } else {
            menuRef.current.style.left = '-120%'
            burgerBtn.current.classList.remove(s.active)
        }
    }, [visible])

    return (
        <header className={s.header}>
            <div className={s.header_container}>
                <div className={s.header_up}>
                    <div className={classNames(s.header__social, s.socials)}>
                        <img src="./assets/images/inst.png" alt="instagram" className={classNames(s.social_media, s.social_inst)}/>
                        <img src="./assets/images/facebook.png" alt="facebook" className={classNames(s.social_media, s.social_facebook)}/>
                    </div>
                    <div className={s.logo_block}>
                        <img src="./assets/images/logo.png" alt="logo" className={s.logo}/>
                    </div>
                    <div className={s.settings}>
                        <img src="./assets/images/phone.png" alt="call" className={s.call}/>
                        <Select options={languagesOpt}/>
                    </div>
                    <button className={s.burger_toggle} onClick={handleBurger} ref={burgerBtn}>
                        <span className={s.bar}></span>
                        <span className={s.bar}></span>
                        <span className={s.bar}></span>
                    </button>
                </div>
                <div className={s.header_down}>
                    <div className={s.list_block} ref={menuRef}>
                        <ul className={s.header_list}>
                            <div className={s.burgerHeader}>
                                <img src="./assets/images/logo.png" alt="logo" className={s.logo}/>
                                <button className={s.burger_toggle} onClick={handleBurger} ref={burgerBtn}>
                                    <span className={s.bar}></span>
                                    <span className={s.bar}></span>
                                    <span className={s.bar}></span>
                                </button>
                            </div>
                            <li className={s.headerList__item}>Участки</li>
                            <li className={s.headerList__item}>Место</li>
                            <li className={s.headerList__item}>История</li>
                            <li className={s.headerList__item}>Этапы</li>
                            <li className={s.headerList__item}>Команда</li>
                            <li className={s.headerList__item}>Документы</li>
                            <li className={s.headerList__item}>Прогулка</li>
                            <div className={s.hidden_desktop}>
                                <div className={classNames(s.burger_socials, s.socials)}>
                                    <img src="./assets/images/inst.png" alt="instagram" className={classNames(s.social_media, s.social_inst)}/>
                                    <img src="./assets/images/facebook.png" alt="facebook" className={classNames(s.social_media, s.social_facebook)}/>
                                </div>
                                <div className={s.burger_info}>
                                    <span>Ваш персональный <br/> помощник в покупке участка:</span>
                                    <br/>
                                    <span className={s.burger_contacts} >Svetlana Davidovski <br/> +372 5813 0166</span>
                                </div>
                                <div className={s.languages_select}>
                                    Ru
                                </div>
                            </div>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header