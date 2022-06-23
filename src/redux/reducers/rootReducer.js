import {combineReducers} from "redux";
import {burgerReducer} from "./burgerReducer";
import {modalReducer} from "./modalReducer";
import {docModalReducer} from "./docModalReducer";

export const rootReducer = combineReducers({
    burger: burgerReducer,
    modal: modalReducer,
    doc: docModalReducer
})