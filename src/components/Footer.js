import React from 'react'
import s from '../styles/_footer.module.scss'
import classNames from "classnames";

const Footer = () => {
    return (
        <section className={s.footer}>
            <div className={s.container}>
                <div className={s.footer_content}>
                    <div className={classNames(s.footer_contacts, s.grid_item)}>
                        <h4 className={s.footerContacts_title}>Контакты:</h4>
                        <ul className={s.footer_list}>
                            <li className={s.list_item}>Team Media OU</li>
                            <li className={s.list_item}>Harjumaa, Tallinn linn, Tulika poik 4, 10613</li>
                            <li className={s.list_item}>Тел: 58205581</li>
                            <li className={s.list_item}>E-mail: dmitri.vain@gmail.com</li>
                            <li className={s.list_item}>Регистрационый код 14268077</li>
                        </ul>
                        <div className={s.footer_firstIcons}>
                            <img src="./assets/images/facebookIco.svg" alt=""/>
                            <img src="./assets/images/instIco.svg" alt=""/>
                        </div>
                    </div>
                    <div className={classNames(s.footerLogo_block, s.grid_item)}>
                        <a href=""><img src="./assets/images/footerLogo.png" alt=""/></a>
                    </div>
                    <div className={classNames(s.footer_subContacts, s.grid_item)}>
                        <div className={s.footer_block}>
                            <h5 className={s.footer_subTitle}>Ваш персональный <br/> помощник в покупке участка:</h5>
                            <p className={s.footer_staffName}>Svetlana Davidovski <br/> +372 5813 0166</p>
                            <div className={s.footer_icons}>
                                <a href="" className={s.footer_link}>Telegram</a>
                                <a href="" className={s.footer_link}>WhatsApp</a>
                                <a href="" className={s.footer_link}>Viber</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer