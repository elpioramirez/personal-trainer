import { GET_ALL_CUSTOMERS, ADD_CUSTOMER, DELETE_CUSTOMER, GET_ALL_CUSTOMERS_REQ, GET_ALL_CUSTOMERS_X } from "../actions";

const defaultState = {
    customers: [],
    newCustomer: {},
    isReady: false
}

export default function (state = defaultState, action) {
    switch (action.type) {
        case GET_ALL_CUSTOMERS_REQ:
            return {
                ...state,
                isReady: true,
            };
        case GET_ALL_CUSTOMERS_X:
            return {
                ...state,
                isReady: false,
            };
        case GET_ALL_CUSTOMERS:
            return {
                ...state,
                customers: action.payload,
            };
        case ADD_CUSTOMER:
            return {
                ...state,
                newCustomer: action.payload
            };
        case DELETE_CUSTOMER:
            return state;
        default:
            return state;
    }
}