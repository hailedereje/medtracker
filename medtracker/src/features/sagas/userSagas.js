import {call,put,takeEvery } from 'redux-saga/effects'
import { clientInstance } from './allergySaga'



const login = async (user) => {
    console.log(user,"saga")
    const response = await clientInstance.post(user)
    return response.data
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
   yield takeEvery("USER_LOGIN",userLogin)
}

export default userSaga;