import React, {useEffect} from 'react'
import s from '../styles/_section9.module.scss'
import {useDispatch, useSelector} from "react-redux";
import {docModal, openModal} from "../redux/actions";

const files = [
    {title: 'Геодезия'},
    {title: 'Геология'},
    {title: 'Дендрология'},
    {title: 'План застройки'},
    {title: 'Общая презентация'},
    {title: 'Айдентика'}
]

const Section9 = () => {
    const docRef = React.createRef()
    const dispatch = useDispatch()

    const {visible} = useSelector(store => {
        const {doc} = store
        return doc
    })

    useEffect(() => {
        if(visible) {
            docRef.current.classList.add(s.modal_open)
        } else {
            docRef.current.classList.remove(s.modal_open)
        }
    }, [visible])

    const modalToggle = (e) => {
        if(e.target.dataset.control) {
            dispatch(docModal())
        }
    }

    return (
        <section className={s.section}>
            <div className={s.modal_overlay} ref={docRef} data-control onClick={modalToggle}>
                <div className={s.modal_content}>
                    <h1 className={s.modal_title}>Отправьте документы на свою почту</h1>
                    <input type="text" className={s.modal_input} placeholder='Ваш E-mail'/>
                    <p className={s.form_rule}>Нажимая кнопку «Отправить», Вы даёте согласие на <span>обработку ваших персональных данных</span></p>
                    <button className={s.form_submit}>Отправить на почту</button>
                </div>
            </div>
            <div className={s.section_container}>
                <div className={s.section_content}>
                    <h1 className={s.section_title}>Документы</h1>
                    <h2 className={s.section_subTitle}>Документы для скачивания</h2>
                    <div className={s.sectionFiles_block}>
                        {files && files.map(file => (
                            <div className={s.section_file} key={file.title} onClick={modalToggle} data-control>
                                <img data-control src="./assets/images/download_btn.png" alt=""/>
                                <p data-control className={s.file_title}> {file.title} </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Section9