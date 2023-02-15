import { createStore,applyMiddleware } from "redux";
import rootReducer from './reducers/index'
import createSagaMiddleware from 'redux-saga'
import rootSaga from "./sagas";
const sagaMiddleWare = createSagaMiddleware();


const store = createStore(rootReducer,applyMiddleware(sagaMiddleWare))
sagaMiddleWare.run(rootSaga)
export default store;