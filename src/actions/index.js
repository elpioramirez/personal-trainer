import axios from "axios";
import moment from 'moment';

export const GET_ALL_CUSTOMERS = 'GET_ALL_CUSTOMERS';
export const GET_ALL_CUSTOMERS_REQ = 'GET_ALL_CUSTOMERS_REQ';
export const GET_ALL_CUSTOMERS_X = 'GET_ALL_CUSTOMERS_X';
export const ADD_CUSTOMER = 'ADD_CUSTOMER';
export const DELETE_CUSTOMER = 'DELETE_CUSTOMER';
export const EDIT_CUSTOMER = 'EDIT_CUSTOMER';
export const GET_TRAININGS_BY_ID = 'GET_TRAININGS_BY_ID'

export const GET_ALL_TRAINERS = 'GET_ALL_TRAINERS';
export const GET_ALL_TRAINERS_REQ = 'GET_ALL_TRAINERS_REQ';
export const GET_ALL_TRAINERS_X = 'GET_ALL_TRAINERS_X';

export const ADD_TRAINING_TO_CUSTOMER = 'ADD_TRAINING_TO_CUSTOMER';
export const DELETE_TRAINING = 'DELETE_TRAINING';

export const POP_ON = 'POP_ON';
export const POP_OFF = 'POP_OFF';

const ROOT_URL = 'https://customerrest.herokuapp.com/api'

function receiveData(request, json) {
    return { type: request, payload: json };
}

export const getAllCustomers_REQ = () => ({
    type: GET_ALL_CUSTOMERS_REQ,
});

export const getAllCustomers_X = () => ({
    type: GET_ALL_CUSTOMERS_X,
});

export function getAllCustomers() {
    return async (dispatch, getState) => {
        const { customer } = getState();
        // console.log(customer.isReady)
        if (!customer.isReady) {
            dispatch(getAllCustomers_REQ());
            await axios
                .get(`${ROOT_URL}/customers`)
                .then(response => dispatch(receiveData(GET_ALL_CUSTOMERS, response.data.content)));
        }
    }
};

// export async function getAllCustomers(dispatch) {
//     dispatch(getAllCustomers_REQ());
//     const { customer } = getState();
//     console.log(customer.isReady)
//     return await axios
//         .get(`${ROOT_URL}/customers`)
//         .then(response => dispatch(receiveData(GET_ALL_CUSTOMERS, response.data.content)));

// }
export function addCustomer(newCustomer) {
    return axios
        .post(`${ROOT_URL}/customers/`, newCustomer)
        .then(() => {
            console.log("new customer posted! success!");
            window.location = "/customers"
            // window.location = "/";
        })
        .catch(err => {
            console.error(err);
        });
}

export function deleteCustumer(deleteURL, dispatch) {
    return axios
        .delete(deleteURL)
        .then(response => dispatch(receiveData(DELETE_CUSTOMER, response.data)))
        .catch(err => {
            console.error(err);
        });
}

export function editCustomer(id, dispatch) {
    return axios
        .put(`${ROOT_URL}/customers/${id}`)
        .then(response => dispatch(receiveData(EDIT_CUSTOMER, response.data)))
        .catch(err => {
            console.error(err);
        });
}

export const getAllTrainers_REQ = () => ({
    type: GET_ALL_TRAINERS_REQ,
});

export const getAllTrainers_X = () => ({
    type: GET_ALL_TRAINERS_X,
});

// export async function getAllTrainers(dispatch) {
//     dispatch(getAllTrainers_REQ)
//     return await axios
//         .get("https://customerrest.herokuapp.com/gettrainings")
//         .then(response => dispatch(receiveData(GET_ALL_TRAINERS, response.data)));

// }

export function getAllTrainers() {
    return async (dispatch, getState) => {
        const { training } = getState();
        // console.log(customer.isReady)
        if (!training.isReady) {
            dispatch(getAllTrainers_REQ());
            await axios
                .get("https://customerrest.herokuapp.com/gettrainings")
                .then(response => dispatch(receiveData(GET_ALL_TRAINERS, response.data)));
        }
    }
};

export function deleteTraining(id, dispatch) {
    return axios
        .delete(`${ROOT_URL}/trainings/${id}`)
        .then(response => dispatch(receiveData(DELETE_TRAINING, response.data)))
        .catch(err => {
            console.error(err);
        });
}

export function addTraining(trainingSession) {
    return axios
        .post(`${ROOT_URL}/trainings/`, trainingSession)
        .then(() => {
            window.location = "/trainers"
            // console.log("new training sesh added! success!"); window.location =
            // "/trainings" window.location = "/";
        })
        .catch(err => {
            console.error(err);
        });
}

export function getTrainingsById(path, dispatch) {
    return axios
        .get(path)
        .then(response => dispatch(receiveData(GET_TRAININGS_BY_ID, response.data.content)))
        //opens up pop up
        .then(() => dispatch({ type: POP_ON }))
        .catch(err => {
            console.error(err);

        });
}

export function handleCalendar(calendarObj) {
    calendarObj.map((item) => {
        //correct date format in JS
        const original = moment(item.date)._d
        // add the time duration to the original
        const added = moment(moment(original).add(item.duration, 'm'))._d
        //create custom object

        return { title: item.activity, start: original, end: added, allDay: false }

    })
}