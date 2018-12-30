import axios from "axios";
import moment from 'moment';

export const GET_ALL_CUSTOMERS = 'GET_ALL_CUSTOMERS';
export const GET_ALL_CUSTOMERS_REQ = 'GET_ALL_CUSTOMERS_REQ';
export const GET_ALL_CUSTOMERS_X = 'GET_ALL_CUSTOMERS_X';

export const ADD_CUSTOMER = 'ADD_CUSTOMER';
export const ADD_CUSTOMER_REQ = 'ADD_CUSTOMER_REQ';
export const ADD_CUSTOMER_X = 'ADD_CUSTOMER_X';


export const DELETE_CUSTOMER = 'DELETE_CUSTOMER';
export const DELETE_CUSTOMER_REQ = 'DELETE_CUSTOMER_REQ';
export const DELETE_CUSTOMER_X = 'DELETE_CUSTOMER_X';


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
        // const { customer } = getState();
        // // console.log(customer.isLoading)
        // if (!customer.isLoading) {

        // }

        dispatch(getAllCustomers_REQ());
        await axios
            .get(`${ROOT_URL}/customers`)
            .then(response => dispatch(receiveData(GET_ALL_CUSTOMERS, response.data.content)));
    }
};

export const addCustomer_REQ = (person) => (
    {
        type: ADD_CUSTOMER_REQ,
        person: person
    }
);

export const addCustomer_X = (error) => (
    {
        type: ADD_CUSTOMER_X,
        error: error
    }
);

export const addCustomer = (newCustomer) => {
    return async (dispatch, getState) => {

        const { customer } = getState();

        if (!customer.isLoading) {
            dispatch(addCustomer_REQ(newCustomer));
            const url = `${ROOT_URL}/customers`;
            axios.post(url, newCustomer)
                .then(function (response) {
                    //

                    if (response.status === 201) {
                        //console.log('working');
                        dispatch(getAllCustomers());
                    }
                })
                .catch(function (error) {
                    dispatch(ADD_CUSTOMER_X(error));
                });
        }
    }

};



export const deleteCustumer_REQ = (url) => (
    {
        type: DELETE_CUSTOMER_REQ,
        url: url
    }
);
export function deleteCustumer(deleteURL) {

    return (dispatch, getState) => {

        const { customer } = getState();

        if (!customer.isLoading) {
            dispatch(deleteCustumer_REQ(deleteURL));

            axios
                .delete(deleteURL)
                .then(response => {
                    console.log(response);
                    if (response.status === 204) {
                        dispatch(getAllCustomers());
                    }
                }
                )
                .catch(err => {
                    console.error(err);
                });
        }



    }


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
        // console.log(customer.isLoading)
        if (!training.isLoading) {
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