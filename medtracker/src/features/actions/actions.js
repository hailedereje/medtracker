import * as type from '../types'
export const userLogin = (user) => {
    return {
        type:type.USER_LOGIN,
        payload:user
    }
}
export const allergies = () => {
    return {
        type: type.GET_ALLERGIES,
        val : type.GET_ALLERGIES,
    }
}

export const addAllergies = ( allergy) => {
    return {
        type:type.ADD_ALLERGIES,
        payload:allergy
    }
}

export const deleteAllergy = (id) => {
    return {
        type: type.DELETE_ALLERGIES,
        payload:id
    }
}


export const createDocument = ( document ) => {
    return {
        type:type.ADD_DOCUMENT,
        payload:document
    }
}

export const getDocument = () => {
    return {
        type:type.GET_DOCUMENT,
        val:type.GET_DOCUMENT
    }
}

export const deleteDocument = (id) => {
    return {
        type: type.DELETE_DOCUMENT,
        payload:id
    }
}


///////diagnosis
export const updateId = (id) => {
    return {
        type: type.UPDATE_ID,
        payload:id
    }
}


export const diagnosis = () => {
    return {
        type: type.GET_DIAGNOSIS,
        val:type.GET_DIAGNOSIS,
    }
}

export const deleteDiagnosies = (id) => {
    return {
        type: type.DELETE_DIAGNOSIS,
        payload:id
    }
}

export const deleteMedicine = (id) => {
    return {
        payload:id
    }
}



export const deleteVaccine = (id) => {
    return {
        type: type.GET_ALLERGIES,
        payload:id
    }
}


