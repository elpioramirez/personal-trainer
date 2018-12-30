import { GET_ALL_TRAINERS, ADD_TRAINING_TO_CUSTOMER, DELETE_TRAINING, GET_ALL_TRAINERS_REQ, GET_ALL_TRAINERS_X } from "../actions";

const defaultState = {
    trainers: [],
    isReady: false
}

export default function (state = defaultState, action) {
    switch (action.type) {
        case GET_ALL_TRAINERS_REQ:
            return {
                ...state,
                isReady: true,
            };
        case GET_ALL_TRAINERS_X:
            return {
                ...state,
                isReady: false,
            };
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