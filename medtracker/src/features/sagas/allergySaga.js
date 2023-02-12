import {call,put,takeEvery } from 'redux-saga/effects'
import axios from 'axios'

const apiUrl = "https://dummyjson.com/products"

const getAllegry = async () => {
    console.log('data')
   const response = await axios.get(apiUrl)
   return response.data
}

// const deleteAllerg = async (id) => {
//     const response = await axios.delete(apiUrl+ `delete/${id}`)
//     return id
// }


function* fetchAllergies() {
    try {
        const memories = yield call(getAllegry)
        console.log(memories)
        yield put({ type: "GET_ALLERGIES_SUCCESS",memories:memories})
    } catch (error) {
        yield put({ type: 'GET_ALLERGIES_FAILED',message:error.message})
    }
}



function* deleteAllergy({payload}) {
    try {
        console.log('payload', payload)
        const memoryId = yield(call(deleteAllerg,payload))
        console.log(memoryId)
        yield put({type:"DELETE_MEMORY_SUCCESS",id:memoryId})
    } catch (error) {
        yield put({ type:"DELETE_MEMORY_FAILED"})
    }
}

function* allergySaga() {
   yield takeEvery("GET_ALLERGIES",fetchAllergies) 
   yield takeEvery("DELETE_ALLERGY",deleteAllergy)
}

export default allergySaga;