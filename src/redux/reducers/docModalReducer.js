import {DOC_MODAL} from "../types";

const initialState = {
    visible: false
}

export const docModalReducer = (state = initialState, action) => {
    switch (action.type) {
        case DOC_MODAL:
            return {...state, visible: !state.visible}
        default:
            return state
    }
}