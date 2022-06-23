import {DOC_MODAL, OPEN_MODAL, TOGGLE_BURGER} from "./types";

export const toggleBurger = () => {
    return {
        type: TOGGLE_BURGER
    }
}

export const openModal = () => {
    return {
        type: OPEN_MODAL
    }
}

export const docModal = () => {
    return {
        type: DOC_MODAL
    }
}