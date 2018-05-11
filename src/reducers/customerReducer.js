import {GET_ALL_CUSTOMERS, ADD_CUSTOMER, DELETE_CUSTOMER} from "../actions";

export default function (state = {}, action) {
    switch (action.type) {
        case GET_ALL_CUSTOMERS:
            return {
                ...state,
                customers: action.payload
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