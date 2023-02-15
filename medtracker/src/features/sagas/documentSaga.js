import {call,put,takeEvery } from 'redux-saga/effects'
import axios from 'axios'

const apiUrl = "https://0d6a-185-107-56-46.eu.ngrok.io/"

const getDocument = async () => {
   const response = await axios.get(apiUrl + "api/document")
   return response.data
}

const addDocument = async (document) => {
    console.log("add document")
   const response = await axios.post(apiUrl + "api/document",document)
   return response.data
}

const deleteDocument = async (id) => {
    return id
}

function* addDocuments() {
    try{
        const document = yield call(addDocument)
        yield put({ type: "ADD_DOCUMENT_SUCCESS",docuement:document})
    }catch (error){
        yield put({ type:"ADD_DOCUMENT_FAILED",message:error.message})
    }
}

function* fetchDocuments() {
    try {
        const documents = yield call(getDocument)
        console.log(documents)
        yield put({ type: "GET_DOCUMENT_SUCCESS",docuements:documents})
    } catch (error) {
        yield put({ type: 'GET_DOCUMENT_FAILED',message:error.message})
    }
}

function* deleteDocuments({payload}) {
    try {
        const documentId = yield(call(deleteDocument,payload))
        console.log(documentId)
        yield put({type:"DELETE_DOCUMENT_SUCCESS",id:documentId})
    } catch (error) {
        yield put({ type:"DELETE_DOCUMENT_FAILED"})
    }
}

function* documentSaga() {
   yield takeEvery("ADD_DOCUMENT",addDocuments)
   yield takeEvery("GET_DOCUMENT",fetchDocuments) 
   yield takeEvery("DELETE_DOCUMENT",deleteDocuments)
}

export default documentSaga;