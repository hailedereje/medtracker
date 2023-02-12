import {call,put,takeEvery } from 'redux-saga/effects'
import axios from 'axios'

const apiUrl = 'http://localhost:8800/api/'

const createUser = async (user) => {
    const response = await axios.post(apiUrl + "register",user)
    return response.data
}
const login = async (user) => {
    const response = await axios.post(apiUrl + "login",user)
    return response.data
}

function* createNewUser({payload}) {
    try {
        const user =  yield call(createUser,payload)
        yield put({type: "CREATE_USER_SUCCESS",user:user})
    } catch (error) {
        yield put({ type: "CREATE_USER_FAILED",message:error.message})
    }
}

function* userLogin({payload}) {
    try {
        const user =  yield call(login,payload)
        yield put({type: "LOGIN_SUCCESS",user:user})
    } catch (error) {
        yield put({ type: "LOGIN_FAILED",message:error.message})
    }
}

function* userSaga() {
   yield takeEvery("CREATE_USER",createNewUser)
   yield takeEvery("USER_LOGIN",userLogin)
}

export default userSaga;