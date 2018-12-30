import { GET_ALL_CUSTOMERS, ADD_CUSTOMER, DELETE_CUSTOMER, GET_ALL_CUSTOMERS_REQ, GET_ALL_CUSTOMERS_X, ADD_CUSTOMER_X, DELETE_CUSTOMER_REQ, ADD_CUSTOMER_REQ } from "../actions";

const defaultState = {
    customers: [],
    newCustomer: {},
    isLoading: false,
    error: null
}

export default function (state = defaultState, action) {
    switch (action.type) {
        case GET_ALL_CUSTOMERS_REQ:
            return {
                ...state,
                isLoading: true,
            };
        case GET_ALL_CUSTOMERS_X:
            return {
                ...state,
                isLoading: false,
            };
        case GET_ALL_CUSTOMERS:
            return {
                ...state,
                customers: action.payload,
                isLoading: false
            };
        case ADD_CUSTOMER_REQ:
            return {
                ...state,
                isLoading: true,
                newCustomer: action.person
            };
        case ADD_CUSTOMER_X:
            return {
                ...state,
                isLoading: false,
                error: action.error
            };
        case ADD_CUSTOMER:
            return {
                ...state,
                isLoading: false,
                newCustomer: action.person
            };

        case DELETE_CUSTOMER_REQ:
            return {
                ...state,
                isLoading: true,
                deleteUrl: action.url
            }
        case DELETE_CUSTOMER:
            return {
                ...state,
                isLoading: false,
            }
        default:
            return state;
    }
}