import {GET_ALL_TRAINERS, ADD_TRAINING_TO_CUSTOMER, DELETE_TRAINING} from "../actions";

export default function (state = {}, action) {
    switch (action.type) {
        case GET_ALL_TRAINERS:
            return {
                ...state,
                trainers: action.payload
            };
        case ADD_TRAINING_TO_CUSTOMER:
            return {
                ...state,
                trainers: action.payload
            };
        case DELETE_TRAINING:
            return state;

        default:
            return state;
    }
}