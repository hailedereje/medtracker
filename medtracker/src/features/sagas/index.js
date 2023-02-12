import { all } from "redux-saga/effects";
import allergySaga from "./allergySaga";
import userSaga from "./userSagas";

export default function* rootSaga() {
    
    yield all([
        allergySaga(),
        userSaga()
    ])
}