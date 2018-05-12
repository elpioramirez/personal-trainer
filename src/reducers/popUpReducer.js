import {POP_ON, POP_OFF} from "../actions";

export default function (state = {
    show: false
}, action) {
    switch (action.type) {

        case POP_ON:
            return {show: true}
        case POP_OFF:
            return {show: false}
        default:
            return state;
    }
}