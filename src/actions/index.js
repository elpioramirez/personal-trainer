import axios from "axios";

export const GET_ALL_CUSTOMERS = 'GET_ALL_CUSTOMERS';
export const ADD_CUSTOMER = 'ADD_CUSTOMER';
export const DELETE_CUSTOMER = 'DELETE_CUSTOMER';
export const EDIT_CUSTOMER = 'EDIT_CUSTOMER';

export const GET_ALL_TRAINERS = 'GET_ALL_TRAINERS';
export const ADD_TRAINING_TO_CUSTOMER = 'ADD_TRAINING_TO_CUSTOMER';
export const DELETE_TRAINING = 'DELETE_TRAINING';

const ROOT_URL = 'https://customerrest.herokuapp.com/api'

function receiveData(request, json) {
    return {type: request, payload: json};
}

export function getAllCustomers(dispatch) {
    return axios
        .get(`${ROOT_URL}/customers`)
        .then(response => dispatch(receiveData(GET_ALL_CUSTOMERS, response.data.content)));

}

export function addCustomer(newCustomer) {
    return axios
        .post(`${ROOT_URL}/customers/`, newCustomer)
        .then(() => {
            console.log("new customer posted! success!");
            // window.location = "/";
        })
        .catch(err => {
            console.error(err);
        });
}

export function deleteCustumer(id, dispatch) {
    return axios
        .delete(`${ROOT_URL}/customers/${id}`)
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

export function getAllTrainers(dispatch) {
    return axios
        .get(`${ROOT_URL}/trainings`)
        .then(response => dispatch(receiveData(GET_ALL_TRAINERS, response.data.content)));
}

export function deleteTraining(id, dispatch) {
    return axios
        .delete(`${ROOT_URL}/trainings/${id}`)
        .then(response => dispatch(receiveData(DELETE_TRAINING, response.data)))
        .catch(err => {
            console.error(err);
        });
}

//add training to customer missing!