import {GET_TRAININGS_BY_ID} from "../actions";

export default function (state = {}, action) {
    switch (action.type) {

        case GET_TRAININGS_BY_ID:
            return {
                ...state,
                trainingById: action.payload
            }
        default:
            return state;
    }
}