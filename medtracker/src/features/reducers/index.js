import { combineReducers } from "redux";
import allergyReducer from "./allergies";
import diagnoReducer from "./Diagnosis";

const rootReducer = combineReducers({
    allergyReducer:allergyReducer,
    diagnoReducer: diagnoReducer
})

export default rootReducer;