import React, {useEffect} from 'react'
import s from '../styles/_section4.module.scss'
import {useDispatch, useSelector} from "react-redux";
import {openModal} from "../redux/actions";

const Section4 = () => {
    const modalRef = React.createRef()
    const dispatch = useDispatch()
    const {visible} = useSelector(store => {
        const {modal} = store
        return modal
    })

    useEffect(() => {
        if(visible) {
            modalRef.current.classList.add(s.modal_open)
        } else {
            modalRef.current.classList.remove(s.modal_open)
        }
    }, [visible])

    const modalToggle = (e) => {
        if(e.target.dataset.control) {
            dispatch(openModal())
        }
    }

    return (
        <section className={s.section}>
            <div className={s.modal_overlay} data-control ref={modalRef} onClick={modalToggle}>
                <div className={s.modal_content}>
                    <button className={s.modal_close} data-control onClick={() => modalToggle}>&times;</button>
                    <div className={s.modalImg_block}>
                        <img src="./assets/images/modalImg.png" alt=""/>
                    </div>
                    <div className={s.modalTitle_text}>
                        <p>
                            <span>В бескрайних просторах Вселенских полей  Энергией света клубится, Волшебной историей сказочных дней  Летит на Земле воплотиться.</span>
                            <br/>
                            <span>Но так безграничен Вселенной чертог,  А панцирь же узок и тесен.  Сулит испытать ощущений восторг,  Тем самым он так интересен.</span>
                            <br/>
                            <span>В безмолвной тиши тёплых  летних ночей Космической гостьей хвостатой  Спускается в лапы пушистых ветвей  И вмиг исчезает куда-то.</span>
                            <br/>
                            <span>В то время по тропкам лесным ,не спеша,  Задумчивый путник гуляет,  И сказка, невидимой пылью кружа,  На плечи ему оседает.</span>
                            <br/>
                            <span>Под звучный оркестр полночных цикад,  Прогулкой лесной утомленный,  Герой наш на сонной опушки наряд  Ложится дремотой пленённый.</span>
                            <br/>
                            <span>Во сне будто слышит призыв голосов  Построить 11 лучших домов  В том самом лесу,  Что открыл он на днях,  Дорогу к нему охраняет маяк.</span>
                        </p>
                    </div>
                    <div className={s.modal_footer}>
                        <p>«Жизнь каждого человека – волшебная сказка, написанная рукой Бога.» <br/> Ганс Христиан
                            Андерсен</p>
                    </div>
                </div>
            </div>
            <div className={s.section_bg}>
                <div className={s.section_container}>
                    <div className={s.section_content}>
                        <div>
                            <h1 className={s.section_title}>Истоки</h1>
                            <img src="./assets/images/treeIco.svg" alt="tree(click me)" onClick={modalToggle} data-control className={s.treeIco}/>
                        </div>
                        <p className={s.section_text}>Эта земля формировалась больше 11 миллиардов лет. <br/> 11 семей построят здесь 11 современных домов.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Section4