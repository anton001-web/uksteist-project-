import {OPEN_MODAL} from "../types";


const initialState = {
    visible: false
}

export const modalReducer = (state = initialState, action) => {
    switch (action.type) {
        case OPEN_MODAL:
            return {...state, visible: !state.visible}
        default:
            return state
    }
}