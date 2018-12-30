import { GET_ALL_TRAINERS, ADD_TRAINING_TO_CUSTOMER, DELETE_TRAINING, GET_ALL_TRAINERS_REQ, GET_ALL_TRAINERS_X, DELETE_TRAINING_OK } from "../actions";

const defaultState = {
    trainers: [],
    isLoading: false
}

export default function (state = defaultState, action) {
    switch (action.type) {
        case GET_ALL_TRAINERS_REQ:
            return {
                ...state,
                isLoading: true,
            };
        case GET_ALL_TRAINERS_X:
            return {
                ...state,
                isLoading: false,
            };
        case GET_ALL_TRAINERS:
            return {
                ...state,
                trainers: action.payload,
                isLoading: false
            };
        case ADD_TRAINING_TO_CUSTOMER:
            return {
                ...state,
                trainers: action.payload,
                isLoading: true,
            };
        case DELETE_TRAINING:
            return {
                ...state,
                isLoading: true
            }
        case DELETE_TRAINING_OK:
            return {
                ...state,
                isLoading: false
            }


        default:
            return state;
    }
}