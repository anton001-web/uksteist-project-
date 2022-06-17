import {OPEN_MODAL, TOGGLE_BURGER} from "./types";

export const toggleBurger = () => {
    return {
        type: TOGGLE_BURGER
    }
}

export const openModal = (modalData) => {
    return {
        type: OPEN_MODAL,
        payload: modalData
    }
}