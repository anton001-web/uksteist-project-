import {OPEN_MODAL} from "../types";


const initialState = {
    open: false,
    taken: 'Свободный',
    landArea: '3000 м2',
    houseArea: '300 м2',
    address: 'Vainu tee',
    price: '200000'
}

export const modalReducer = (state = initialState, action) => {
    switch (action.type) {
        case OPEN_MODAL:
            return {...state, modalInfo: action.payload}
        default:
            return state
    }
}