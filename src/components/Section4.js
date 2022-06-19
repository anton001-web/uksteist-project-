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

    const modalToggle = () => {
        dispatch(openModal())
    }

    return (
        <section className={s.section}>
            <div className={s.modal_overlay} ref={modalRef} onClick={modalToggle}>
                <div className={s.modal_content}>
                    <p className={s.modal_text}>Горы ценны не тем, что высоки, а тем, что богаты лесом.</p>
                </div>
            </div>
            <div className={s.section_bg}>
                <div className={s.section_container}>
                    <div className={s.section_content}>
                        <div>
                            <h1 className={s.section_title}>Истоки</h1>
                            <img src="./assets/images/treeIcon.png" alt="tree(click me)" onClick={modalToggle}/>
                        </div>
                        <p className={s.section_text}>Эта земля формировалась больше 11 миллиардов лет. <br/> 11 семей построят здесь 11 современных домов.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Section4