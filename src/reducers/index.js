import {combineReducers} from "redux";
import customerReducer from './customerReducer';
import trainingReducer from './TrainingReducer';

const rootReducer = combineReducers({customer: customerReducer, training: trainingReducer});

export default rootReducer;