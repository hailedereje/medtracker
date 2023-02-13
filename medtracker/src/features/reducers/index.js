import { combineReducers } from "redux";
import allergyReducer from "./allergies";
import diagnoReducer from "./Diagnosis";
import userReducer from "./user";

const rootReducer = combineReducers({
    allergyReducer:allergyReducer,
    diagnoReducer: diagnoReducer,
    userReducer:userReducer
})

export default rootReducer;