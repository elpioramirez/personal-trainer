import {combineReducers} from "redux";
import {reducer as formReducer} from "redux-form";
import customerReducer from './customerReducer';
import trainingReducer from './TrainingReducer';

const rootReducer = combineReducers({customer: customerReducer, training: trainingReducer, form: formReducer});

export default rootReducer;