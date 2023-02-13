import {call,put,takeEvery } from 'redux-saga/effects'
import axios from 'axios'

const apiUrl = "https://0d6a-185-107-56-46.eu.ngrok.io/"

const getAllegry = async () => {
    console.log('data')
   const response = await axios.get(apiUrl + "api/Allergy")
   console.log("data111",response.data)
   return response.data
}

const Addallergy = async (allergy) => {
    console.log("metenal")
   const response = await axios.post(apiUrl + "api/Allergy",allergy)
   return response.data
}

const deleteAllerg = async (id) => {
    const response = await axios.delete(apiUrl+ `delete/${id}`)
    return id
}

function* Addallergies () {
    try{
        const allergy = yield call(Addallergy)
        yield put({ type: "ADD_ALLERGIES_SUCCESS",allergy:allergy})
    }catch (error){
        yield put({ type:"ADD_ALLERGIES_FAILED",message:error.message})
    }
}

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
   yield takeEvery("ADD_ALLERGIES",Addallergies)
   yield takeEvery("GET_ALLERGIES",fetchAllergies) 
   yield takeEvery("DELETE_ALLERGY",deleteAllergy)
}

export default allergySaga;