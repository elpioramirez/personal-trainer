import {combineReducers} from "redux";
import {reducer as formReducer} from "redux-form";
import customerReducer from './customerReducer';
import trainingReducer from './TrainingReducer';
import IndividualReducer from "./IndividualReducer";
import popUpReducer from "./popUpReducer";

const rootReducer = combineReducers({customer: customerReducer, training: trainingReducer, form: formReducer, individualTraining: IndividualReducer, popUp: popUpReducer});

export default rootReducer;